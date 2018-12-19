import React from 'react';
function getApiUrl(onSuccess, onFail) {
  return new Promise((resolve, reject) => {
    let response = fetch('https://api.github.com/orgs/citra-emu/repos');
    response ? resolve(response) : reject('error');
  });
}
getApiUrl()
  .then((response) => {
    let answer = response.json();
    answer
      .then((item) => item.map((elm) => console.log(elm.name)))
      .catch((error) => console.log('cannot receive JSON'));
  })
  .catch((err) => console.log('there was an error: ' + err));
export default getApiUrl;
