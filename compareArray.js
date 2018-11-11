// @flow
export default function compareArray(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  for (let element of arrOne) {
    if (arrOne[element] !== arrTwo[element]) {
      return false;
    }
  }
  return true;
}
