export default function compareObject(objOne, objTwo) {
  let keyOne = Object.keys(objOne);
  let keyTwo = Object.keys(objTwo);
  if (keyOne.length !== keyTwo.length) {
    return false;
  }
  for (let key of keyOne) {
    if (keyOne[key] !== keyTwo[key]) {
      return false;
    }
  }
  return true;
}
