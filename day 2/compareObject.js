let objectOne = {
  name: 'james',
  position: 'guitarist',
};
let objectTwo = {
  name: 'corey',
  position: 'singer',
};
function compareObject(objectOne, objectTwo) {
  let keyOne = Object.keys(objectOne);
  let keyTwo = Object.keys(objectTwo);
  if (keyOne.length !== keyTwo.length) {
    return false;
  }
  for (let key of keyOne) {
    if (objectOne[key] !== objectTwo[key]) {
      return false;
    }
  }
  return true;
}
