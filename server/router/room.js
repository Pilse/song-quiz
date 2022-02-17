const router = require("express").Router();
const Rooms = require("../model/Rooms");

router.post("/code", (req, res) => {
  const { code } = req.body;

  const room = Rooms.findRoom(code);

  if (room) {
    if (!room.isStarted) {
      res.send(JSON.stringify({ roomId: room.id, error: null }));
    } else {
      res.send(JSON.stringify({ roomId: null, error: "STARTED" }));
    }
  } else res.send(JSON.stringify({ roomId: null, error: "CODE" }));
});

router.post("/nickname", (req, res) => {
  const { nickname, roomId } = req.body;

  const room = Rooms.findRoom(roomId);

  if (room) {
    if (!room.isStarted) {
      if (room.isDuplicatedNickname(nickname)) {
        res.send(JSON.stringify({ isDuplicated: true, error: null }));
      } else res.send(JSON.stringify({ isDuplicated: false, error: null }));
    } else {
      res.send(JSON.stringify({ isDuplicated: null, error: "STARTED" }));
    }
  } else res.send(JSON.stringify({ roomId: null, error: "DELETED" }));
});

module.exports = router;
