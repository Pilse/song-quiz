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
      message: `${nickname}님이 입장하셨습니다`,
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
      message: `${user.nickname}님이 입장하셨습니다`,
      type: "notice",
    };

    io.to(room.id).emit("message", noticeMessage);
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
      message: `${leaved.nickname}님이 퇴장했습니다.`,
      type: "notice",
    };

    io.to(room.id).emit("message", noticeMessage);
    io.to(room.id).emit(
      "users",
      room.users.map((user) => user.userInfo())
    );

    Rooms.deleteEmptyRoom();
  });

  socket.on("play", ({ roomId, userId }) => {
    const room = Rooms.findRoom(roomId);

    const user = room.findUser(userId);

    if (user.role === "host") {
      room.updateSong();

      io.to(roomId).emit("play", room.song);
    }
  });

  socket.on("message", ({ roomId, userId, message }) => {
    const room = Rooms.findRoom(roomId);

    const user = room.findUser(userId);

    const userMessage = { nickname: user.nickname, message, type: "message" };

    io.to(roomId).emit("message", userMessage);

    if (room.isAnswer(message)) {
      const noticeMessage = {
        message: `${user.nickname} 정답`,
        type: "notice",
      };

      io.to(roomId).emit("message", noticeMessage);

      io.to(roomId).emit("play", "");

      if (room.isGameFinished()) {
        const user = room.findWinner();

        io.to(roomId).emit("end", user.nickname);
      }
    }
  });

  socket.on("disconnect", ({ roomId, userId }) => {
    if (!roomId || !userId) return;

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
      message: `${leaved.nickname}님이 퇴장했습니다.`,
      type: "notice",
    };

    io.to(room.id).emit("message", noticeMessage);
    io.to(room.id).emit(
      "users",
      room.users.map((user) => user.userInfo())
    );

    Rooms.deleteEmptyRoom();

    socket.disconnect();
  });
});

const port = process.env.PORT || 8000;

server.listen(port, () => console.log(`Listening on port ${port}`));
