"use strict";

//1.
function filter(array, callback) {
  let returnArray = [];
  for (let idx = 0; idx < array.length; idx++) {
    if (callback(array[idx])) {
      returnArray.push(array[idx]);
    }
  }
  return returnArray;
}

let numbers2 = [1, 2, 3, 4, 5];
console.log(filter(numbers2, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers2, number => number < 0)); // => []
console.log(filter(numbers2, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values2 = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values2, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]

console.log('---------------');

//2.

function map(array, callback) {
  let returnArray = [];
  for (let idx = 0; idx < array.length; idx++) {
    returnArray.push(callback(array[idx]));
  }
  return returnArray;
}

let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]
console.log('---------------');


