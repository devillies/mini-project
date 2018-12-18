import React from 'react';
function getApiUrl(onSuccess, onFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let response = fetch('https://api.github.com/orgs/adobe/repos');
      response ? resolve(response) : reject('error');
    }, 1000);
  });
}
getApiUrl()
  .then((response) => getApiUrl())
  .then((response) => {
    let answer = response.json();
    console.log('success', answer);
    return true;
  })
  .catch((err) => console.log('there was an error: ' + err));
export default getApiUrl;
