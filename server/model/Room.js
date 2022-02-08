const songs = require("../utils/sampleSongs");

class Room {
  constructor(roomId, winningCondition) {
    this.id = roomId;
    this.winningCondition = winningCondition;
    this.users = [];
    this.song = "";
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

  updateScore(userId) {
    const user = users.find((user) => user.id === userId);

    user.score = user.score + 1;
  }

  updateSong() {
    // TODO 랜덤으로 노래 비디오 문자열 반환
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
