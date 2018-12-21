import readdir from 'fs';
function toPromise(fn) {
  return new Promise((resolve, reject) => {
    let promisefn = fn;
    promisefn ? resolve(promisefn) : reject('there was an error:');
  });
}

toPromise(readdir)
  .then((result) => console.log('readdir is now a promise', typeof readdir))
  .catch((error) => console.log('there was and error:' + error));
