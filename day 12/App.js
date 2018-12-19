function getApiUrl(onSuccess, onFail) {
  return new Promise((resolve, reject) => {
    let response = fetch(`https://api.github.com/users/citra-emu/repos`);
    response ? resolve(response) : reject('error fetching');
  });
}
getApiUrl()
  .then((response) => {
    let answer = response.json();
    answer
      .then((citra) =>
        citra.map((repo) => {
          fetch(
            `https://api.github.com/repos/citra-emu/${repo.name}/subscribers`,
          )
            .then((response) => response.json())
            .then((sub) => console.log(`${repo.name}: ${sub.length}`));
        }),
      )
      .catch((error) => console.log('There was an error:', error));
  })
  .catch((err) => console.log('there was an error: ' + err));
export default getApiUrl;
