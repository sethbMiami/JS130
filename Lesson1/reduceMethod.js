"use strict";

function reduce(array, callback, initialValue) {
  let idx = 0;
  let accumalator = initialValue;
  if (!initialValue) {
    idx = 1;
    initialValue = array[0];
  }
  for (idx; idx < array.length; idx++) {
    accumalator = callback(accumalator, array[idx]);
  }
  return accumalator;
}

let numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
console.log(reduce([], (accum, number) => accum + number));
// => undefined
console.log('----------------');

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));
// => ["Curly", "Larry", "Mo"]

console.log('----------------');

//2. create a filter method using reduce

function reduceFilter(array, callback, initialValue = []) {
  let idx = 0;
  let accumalator = initialValue;
  // if (!initialValue) {
  //   idx = 1;
  //   initialValue = array[0];
  // }
  for (idx; idx < array.length; idx++) {
    if (callback(array[idx])) {
      accumalator.push(array[idx]);
    }
   //accumalator = callback(accumalator, array[idx]);
  }
  return accumalator;
}

let numbers2 = [1, 2, 3, 4, 5];
console.log(reduceFilter(numbers2, number => number > 3)); // => [ 4, 5 ]
console.log(reduceFilter(numbers2, number => number < 0)); // => []
console.log(reduceFilter(numbers2, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values2 = [1, "abc", null, true, undefined, "xyz"];
console.log(reduceFilter(values2, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]


function map(array, callback) {
  return array.reduce((mappedItems, value) => {
    mappedItems.push(callback(value));
    return mappedItems;
  }, []);
}

let numbers3 = [1, 2, 3];
console.log(map(numbers3, number => number * number));