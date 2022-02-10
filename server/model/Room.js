const songs = require("../utils/sampleSongs");

class Room {
  constructor(roomId, winningCondition) {
    this.id = roomId;
    this.winningCondition = Number(winningCondition);
    this.users = [];
    this.song = "";
    this.round = 0;
    this.isFirstAnswer = true;
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
    this.users.push(user);
  }

  deleteUser(userId) {
    const user = this.findUser(userId);

    if (user.role === "host") {
      const userIndex = this.findUserIndex(userId);

      const newHost = this.users[(userIndex + 1) % this.users.length];

      newHost.role = "host";

      this.users = this.users.filter((user) => user.id !== userId);

      return { newHost, leaved: user };
    }

    this.users = this.users.filter((user) => user.id !== userId);

    return { newHost: null, leaved: user };
  }

  updateScore(user) {
    user.score += 1;
  }

  updateSong() {
    this.song = songs[Math.floor(Math.random() * 7)];
    this.round += 1;
  }

  isDupliactedNickname(nickname) {
    return this.users.find((user) => user.nickname === nickname);
  }

  isAnswer(song) {
    return this.song.song === song;
  }

  isGameFinished() {
    return this.users.some((user) => user.score === this.winningCondition);
  }
}

module.exports = Room;
