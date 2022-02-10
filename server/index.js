const express = require("express");
const cors = require("cors");
const socket = require("socket.io");
const http = require("http");

const Rooms = require("./model/Rooms");
const User = require("./model/User");

const roomRouter = require("./router/room");

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/rooms", roomRouter);

const io = socket(server);

io.on("connection", (socket) => {
  socket.on("join", ({ roomId, nickname }) => {
    const room = Rooms.findRoom(roomId);

    const user = new User(socket.id, nickname, "user");

    room.saveUser(user);

    socket.join(roomId);

    socket.emit("user", { ...user.userInfo(), roomId: room.id });

    const noticeMessage = {
      message: `${nickname}님이 입장했습니다`,
      type: "notice",
    };

    io.to(roomId).emit("message", noticeMessage);
    io.to(roomId).emit(
      "users",
      room.users.map((user) => user.userInfo())
    );
  });

  socket.on("create", ({ nickname, winningCondition }) => {
    const room = Rooms.saveRoom(winningCondition);

    const user = new User(socket.id, nickname, "host");

    room.saveUser(user);

    socket.join(room.id);

    socket.emit("user", { ...user.userInfo(), roomId: room.id });

    const noticeMessage = {
      message: `${user.nickname}님이 입장했습니다`,
      type: "notice",
    };

    io.to(room.id).emit("message", noticeMessage);
    io.to(room.id).emit("notice", "클릭하여 시작");
    io.to(room.id).emit(
      "users",
      room.users.map((user) => user.userInfo())
    );
  });

  socket.on("leave", ({ roomId, userId }) => {
    const room = Rooms.findRoom(roomId);
    const { newHost, leaved } = room.deleteUser(userId);

    socket.leave(roomId);

    if (newHost) {
      io.to(newHost.id).emit("user", {
        ...newHost.userInfo(),
        roomId: room.id,
      });
    }

    const noticeMessage = {
      message: `${leaved.nickname}님이 퇴장했습니다`,
      type: "notice",
    };

    io.to(room.id).emit("message", noticeMessage);
    io.to(room.id).emit(
      "users",
      room.users.map((user) => user.userInfo())
    );

    room.skipVotes = Math.max(room.users.length, room.skipVotes);

    io.to(room.id).emit("skip", {
      total: room.users.length,
      agree: room.skipVotes,
    });

    if (room.skipVotes === room.users.length) {
      room.isAllowed = false;

      io.to(room.id).emit("notice", `${room.song.song} - ${room.song.artist}`);
      io.to(room.id).emit("continue", true);

      const noticeMessage = {
        message: "노래를 스킵했습니다",
        type: "notice",
      };
      io.to(room.id).emit("message", noticeMessage);
    }

    Rooms.deleteEmptyRoom();
  });

  socket.on("play", ({ roomId, userId }) => {
    const room = Rooms.findRoom(roomId);

    if (!room.isStarted) {
      room.isStarted = true;

      io.to(room.id).emit("start", true);
    }

    const user = room.findUser(userId);

    if (user.role === "host") {
      room.updateSong();
      room.isAllowed = true;
      room.skipVotes = 0;

      io.to(roomId).emit("skip", {
        total: room.users.length,
        agree: room.skipVotes,
      });
      io.to(roomId).emit("play", room.song.video);
      io.to(roomId).emit("notice", `문제 ${room.round}`);
    }
  });

  socket.on("message", ({ roomId, userId, message }) => {
    const room = Rooms.findRoom(roomId);

    const user = room.findUser(userId);

    const userMessage = { nickname: user.nickname, message, type: "message" };

    io.to(roomId).emit("message", userMessage);

    if (room.song.song && room.isAnswer(message) && room.isAllowed) {
      room.isAllowed = false;

      room.updateScore(user);

      const noticeMessage = {
        message: `${user.nickname} 정답`,
        type: "notice",
      };

      socket.emit("user", { ...user.userInfo(), roomId: room.id });

      io.to(roomId).emit("message", noticeMessage);
      io.to(roomId).emit("notice", `${room.song.song} - ${room.song.artist}`);
      io.to(roomId).emit("continue", true);
      io.to(roomId).emit(
        "users",
        room.users.map((user) => user.userInfo())
      );

      if (room.isGameFinished()) {
        const user = room.findWinner();
        console.log(user.nickname);

        io.to(roomId).emit("end", user.nickname);
      }
    }
  });

  socket.on("stop", ({ roomId }) => {
    io.to(roomId).emit("continue", false);
    io.to(roomId).emit("play", "");
    io.to(roomId).emit("notice", "준비");
  });

  socket.on("skip", ({ roomId, vote }) => {
    const room = Rooms.findRoom(roomId);

    room.skipVotes += vote;

    io.to(roomId).emit("skip", {
      total: room.users.length,
      agree: room.skipVotes,
    });

    if (room.skipVotes === room.users.length) {
      room.isAllowed = false;

      io.to(roomId).emit("notice", `${room.song.song} - ${room.song.artist}`);
      io.to(roomId).emit("continue", true);

      const noticeMessage = {
        message: "노래를 스킵했습니다",
        type: "notice",
      };
      io.to(room.id).emit("message", noticeMessage);
    }
  });

  socket.on("disconnect", () => {
    const userId = socket.id;

    const room = Rooms.findRoomByUserId(userId);

    if (room) {
      const { newHost, leaved } = room.deleteUser(userId);

      socket.leave(room.id);

      if (newHost) {
        io.to(newHost.id).emit("user", {
          ...newHost.userInfo(),
          roomId: room.id,
        });
      }

      const noticeMessage = {
        message: `${leaved.nickname}님이 퇴장했습니다`,
        type: "notice",
      };

      io.to(room.id).emit("message", noticeMessage);
      io.to(room.id).emit(
        "users",
        room.users.map((user) => user.userInfo())
      );

      room.skipVotes = Math.max(room.users.length, room.skipVotes);

      io.to(room.id).emit("skip", {
        total: room.users.length,
        agree: room.skipVotes,
      });

      if (room.skipVotes === room.users.length) {
        room.isAllowed = false;

        io.to(room.id).emit(
          "notice",
          `${room.song.song} - ${room.song.artist}`
        );
        io.to(room.id).emit("continue", true);

        const noticeMessage = {
          message: "노래를 스킵했습니다",
          type: "notice",
        };
        io.to(room.id).emit("message", noticeMessage);
      }

      Rooms.deleteEmptyRoom();
    }
  });
});

const port = process.env.PORT || 8000;

server.listen(port, () => console.log(`Listening on port ${port}`));
