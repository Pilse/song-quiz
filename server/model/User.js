class User {
  constructor(id, nickname, role) {
    this.id = id;
    this.nickname = nickname;
    this.score = 0;
    this.role = role;
  }

  get id() {
    return this.id;
  }

  get nickname() {
    return this.nickname;
  }

  get score() {
    return this.score;
  }

  get role() {
    return this.role;
  }

  set score(newScore) {
    if (newScore) {
      this.score = newScore;
    }
  }

  set role(newRole) {
    if (newRole) {
      this.role = newRole;
    }
  }
}

module.exports = User;
