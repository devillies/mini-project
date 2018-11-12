// @flow
function checkPassword(password) {
  if (password.length < 12) {
    return true;
  }
  for (let i of password) {
    if (typeof i === 'number') {
      if (i === i.toUpperCase()) {
        return true;
      }
    }
  }

  return false;
}
let inputPassword = 'Killah123';
console.log(checkPassword(inputPassword));
