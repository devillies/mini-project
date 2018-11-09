function doubleNumber (numbers){
  let blankArr = [];
  for (let i  of numbers){
      blankArr.push(i * 2);
  }

  // numbers.map((num) => {
  //   blankArr.push(num * 2);
  // })
  return 'the number is ' + blankArr ;
}
let result = doubleNumber([2,4,6,8])
console.log(result)
