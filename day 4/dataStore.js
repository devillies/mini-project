// @flow
class DataStore {
  obj = {};

  set(key, value) {
    this.obj[key] = value;
  }
  get(key) {
    return this.obj[key];
  }

  forEach(func) {
    for (let key of Object.keys(this.obj)) {
      func(key, this.obj[key]);
    }
  }
}
let d = new DataStore();
d.set('apples', 990);
d.set('banana', 1000);
d.get('banana');

d.forEach((key, value) => {
  console.log(key, ':', value);
});
