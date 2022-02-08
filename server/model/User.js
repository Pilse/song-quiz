class User {
  constructor(id, nickname, role) {
    this.id = id;
    this.nickname = nickname;
    this.score = 0;
    this.role = role;
  }

  userInfo() {
    return {
      id: this.id,
      nickname: this.nickname,
      score: this.score,
      role: this.role,
    };
  }
}

module.exports = User;
