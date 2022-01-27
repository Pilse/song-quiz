function generator() {
  let password = "";

  for (let i = 0; i < 2; i++) {
    password += getRandomUpper();
  }
  for (let i = 0; i < 2; i++) {
    password += getRandomLower();
  }
  for (let i = 0; i < 2; i++) {
    password += getRandomNumber();
  }
  for (let i = 0; i < 2; i++) {
    password += getRandomSymbol();
  }

  return shuffle(password);
}

function shuffle(password) {
  for (let i = password.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    let t = password[i];
    password[i] = password[j];
    password[j] = t;
  }
  return password;
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  const symbols = "~!@#$%^&*()_+=/?;:<>[]{}";

  return symbols[Math.floor(Math.random() * symbols.length)];
}

module.exports = generator;
