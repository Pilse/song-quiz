const Room = require("./Room");
const generator = require("../utils/roomIdGenerator");

let instance;
class Rooms {
  constructor() {
    if (instance) return instance;

    this.rooms = [];

    instance = this;
  }

  saveRoom(winningCondition) {
    const roomId = generator();

    const room = new Room(roomId, winningCondition);

    this.rooms.push(room);

    return room;
  }

  findRoom(roomId) {
    return this.rooms.find((room) => room.id === roomId);
  }

  findRoomByUserId(userId) {
    return this.rooms.filter(
      (room) => room.users.filter((user) => user.id === userId).length
    )[0];
  }

  deleteEmptyRoom() {
    this.rooms = this.rooms.filter((room) => room.users.length > 0);
  }
}

module.exports = new Rooms();
