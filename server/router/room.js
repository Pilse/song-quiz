const router = require("express").Router();
const Rooms = require("../model/Rooms");

router.post("/code", (req, res) => {
  const code = req.body;

  const room = Rooms.findRoom(code);

  if (room) res.send(JSON.stringify(room.id));
  else res.send(JSON.stringify(false));
});

router.post("/nickname", (req, res) => {
  const { nickname, roomId } = req.body;

  const room = Rooms.findRoom(roomId);

  res.send(room.isDupliactedNickname(nickname));
});

module.exports = router;
