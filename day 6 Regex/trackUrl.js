let regex = /http[s]?...www\.[a-z]+\.\w{1,3}.+/g;
let url = 'http://www.devillies.com';
let url2 = 'https://www.devillies.com/user';
let result = url.match(regex);
let result2 = url2.match(regex);
console.log(result);
console.log(result2);
