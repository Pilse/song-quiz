const User = require("./User");
const songs = require("../utils/sampleSongs");

class Room {
  constructor(roomId, winningCondition) {
    this.id = roomId;
    this.winningCondition = winningCondition;
    this.users = [];
    this.song = "";
  }

  get song() {
    return this.song;
  }

  findUser(userId) {
    return this.users.find((user) => user.id === userId);
  }

  findUserIndex(userId) {
    return this.users.findIndex((user) => user.id === userId);
  }

  findWinner() {
    return this.users.find((user) => user.score === this.winningCondition);
  }

  saveUser(user) {
    this.users.push(new User(user.id, user.nickname, user.role));
  }

  deleteUser(userId) {
    const user = this.findUser(userId);

    if (user.role === "host") {
      const userIndex = this.findUserIndex(userId);

      this.users[(userIndex + 1) % this.users.length].role = "host";
    }

    this.users = this.users.filter((user) => user.id !== userId);
  }

  updateScore(userId) {
    const user = users.find((user) => user.id === userId);

    user.score = user.score + 1;
  }

  updateSong() {
    this.song = songs[0].video;
  }

  isDupliactedNickname(nickname) {
    return this.users.find((user) => user.nickname === nickname);
  }

  isAnswer(song) {
    return this.song === song;
  }

  isGameFinished() {
    return this.users.any((user) => user.score === this.winningCondition);
  }
}

module.exports = Room;
