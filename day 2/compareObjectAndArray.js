// @flow

import compareArray from './compareArray';
import compareObject from './compareObject';
function compare(input1, input2) {
  if (Array.isArray(input1) && Array.isArray(input2)) {
    compareArray(input1, input2);
  }
  if (
    function isObject(input1, input2) {
      if (input1 === null && input2 === null) {
        return false;
      }
      return (
        (typeof input1 === 'function' && typeof input2 === 'function') ||
        (typeof input1 === 'object' && typeof input2 === 'object')
      );
    }
  )
    compareObject(input1, input2);
}
let array1 = [1, 2, 3];
let array2 = [2, 1, 3];
compare(array1, array2);
