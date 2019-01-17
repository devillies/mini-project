// import 'isomorphic-fetch';
import fetch from 'node-fetch';
function* getUserRepos(userID) {
  yield {type: 'WAIT', ms: 200};
  let repos = yield {
    type: 'FETCH',
    url: `https://api.github.com/users/${userID}/repos`,
  };
  console.log(repos);
  yield {type: 'WAIT', ms: 300};
  console.log(repos);
  return repos.map((repos) => repos.name);
}
// simon's way
function run(action) {
  function processNextResult(data, resolve) {
    let {value, done} = action.next(data);
    if (value && !done) {
      switch (value.type) {
        case 'WAIT': {
          setTimeout(() => {
            processNextResult(undefined, resolve);
          }, value.ms);
          break;
        }
        case 'FETCH': {
          fetch(value.url)
            .then((res) => res.json())
            .then((data) => processNextResult(data, resolve));
          break;
        }
      }
    } else {
      resolve(value);
    }
  }
  return new Promise((resolve) => {
    processNextResult(undefined, resolve);
  });
}

let promise = run(getUserRepos('devillies'));
// promise.then((result) => console.log(result));
console.log(promise);
