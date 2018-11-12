//@flow
function createCounter() {
  let count = 0;
  let increment = () => {
    count = count + 1;
    console.log(count);
  };
  let decrement = () => {
    count = count - 1;
    console.log(count);
  };
  let getCounter = () => {
    return count;
  };

  return {
    inc: increment,
    dec: decrement,
    getCount: getCounter,
  };
}
let output = createCounter();
output.inc();
output.inc();
output.dec();
console.log(output.getCount());
