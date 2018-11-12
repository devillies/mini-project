// @flow
function checkPassword(password) {
  function checkWord(words, min, max) {
    let charCodeMin = min.charCodeAt(0);
    let charCodeMax = max.charCodeAt(0);
    for (let i = 0; i < words.length; i++) {
      let charCode = words.charCodeAt(i);
      if (charCode >= charCodeMin && charCode <= charCodeMax) {
        return true;
      }
    }
    false;
  }

  function checkNumber(number) {
    for (let i = 0; i <= number.length; i++) {
      if (!isNaN(number[i]) === true) {
        return true;
      }
    }
    false;
  }

  if (password.length <= 6) {
    return {success: false, reason: 'need longer password'};
  }
  if (!checkWord(password, 'A', 'Z') || !checkWord(password, 'a', 'z')) {
    return {success: false, reason: 'no uppercase in password'};
  }
  if (!checkNumber(password)) {
    return {success: false, reason: 'no number in password'};
  }
  return {success: true, reason: 'password is OK'};
}

let {success, reason} = checkPassword('Killah123');
console.log({success, reason});
