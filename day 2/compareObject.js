let objectOne = {
  name: 'james',
  position: 'guitarist',
};
let objectTwo = {
  name: 'corey',
  position: 'singer',
};
function compareObject(objOne, objTwo) {
  let keyOne = Object.keys(objOne);
  let keyTwo = Object.keys(objTwo);
  if (keyOne.length !== keyTwo.length) {
    return false;
  }
  for (let key of keyOne) {
    if (objOne[key] !== objTwo[key]) {
      return false;
    }
  }
  return true;
}
console.log(compareObject(objectOne, objectTwo));
