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

  if (room.isDupliactedNickname(nickname)) res.send(JSON.stringify(false));
  else res.send(JSON.stringify(true));
});

module.exports = router;
