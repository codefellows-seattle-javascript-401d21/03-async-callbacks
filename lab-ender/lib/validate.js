'use strict';

const validateArray = (arr) => {
  if (arr.constructor !== Array) return false;
  for (const i in arr) {
    if (typeof(arr[i]) !== 'string') return false
  };
  return true;
}

module.exports = validateArray;