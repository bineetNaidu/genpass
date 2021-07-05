const { alpha, numbers, symbols } = require('./constants');

const createPassword = (len = 8, hasNums = true, hasSyms = true) => {
  let char = alpha;
  hasNums ? (char += numbers) : '';
  hasSyms ? (char += symbols) : '';

  return generatedPassword(len, char);
};

const generatedPassword = (len, char) => {
  let password = '';

  for (let i = 0; i < len; i++) {
    password += char.charAt(Math.floor(Math.random() * char.length));
  }

  return password;
};

module.exports = { createPassword };
