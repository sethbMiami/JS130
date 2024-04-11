"use strict";

{
  let sum = (function(num) {
    return num + 5;
  })(5);

  let arrowSum = ((num1, num2) => num1 * num2)(7, 6);

  console.log(sum, arrowSum);
}

//private scope

console.log((function(array) {
  let largest = -Infinity;
  for (let index = 0; index < array.length; index += 1) {
    if ((array[index] % 2) === 0 && (array[index] > largest)) {
      largest = array[index];
    }
  }

  return largest;
})([5, 10, 12, 7, 9, 6, 24, -10, -200, 37]));

{
  let array = [5, 10, 12, 7, 9, 6, 24, -10, -200, 37];
  let largest = -Infinity;
  for (let index = 0; index < array.length; index += 1) {
    if ((array[index] % 2) === 0 && (array[index] > largest)) {
      largest = array[index];
    }
  }
  console.log(largest); // 24
}

var sum = 0;
sum += 10;
sum += 31;

let numbers = [1, 7, -3, 3];

sum += (function sum(arr) {
  return arr.reduce((sum, number) => {
    sum += number;
    return sum;
  }, 0);
})(numbers);

console.log(sum);

(function countdown(num) {
  if (num >= 0) {
    console.log(num);
    num--;
    return countdown(num);
  }
  return null;
})(7);
