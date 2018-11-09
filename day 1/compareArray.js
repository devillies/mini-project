function compareArray(arrayOne, arrayTwo) {
  for (element of arrayOne) {
    if (arrayOne[element] !== arrayTwo[element]) {
      return false;
    }
  }
  return true;
}
arrayOne = [1, 2, 3];
arrayTwo = [1, 2, 3];

console.log(compareArray(arrayOne, arrayTwo));
