function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout((didSuccess) => {
      didSuccess = ms;
      didSuccess ? resolve(didSuccess) : reject(console.log('error'));
    }, ms);
  });
}
sleep(200)
  .then((result) => {
    result = 1000;
    sleep(result);
  })
  .catch((error) => console.log(error));
