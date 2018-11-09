 let array = [1,2,3,4];
 let arrayCopy =  array
console.log( array === arrayCopy);
//mutating
 arrayCopy.push(5);
 console.log(arrayCopy);
 console.log(array === arrayCopy);
// reassigning
 arrayCopy = [...array,5];
console.log(arrayCopy);
console.log(array === arrayCopy)
