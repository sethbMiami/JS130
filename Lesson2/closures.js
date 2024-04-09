"use strict";

function makeMultipleLister(number) {
  return function() {
    let multiple = number;
    while (multiple < 100) {
      if (multiple < 100) {
        console.log(multiple);
      }
      multiple += number;
    }
  };
}

let lister = makeMultipleLister(17);
lister();

console.log('------------------');

let num = 0;

function add(number) {
  num += number;
  return num;
}

function subtract(number) {
  num -= number;
  return num;
}

console.log(add(1));       // 1
console.log(add(42));      // 43
console.log(subtract(39)); // 4
console.log(add(6));       // 10

console.log('------------------');


function foo(start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
}

let bar = foo(2);
let result = bar(3); //6
result += bar(4);  // 14
result += bar(5); // 24
console.log(result); // 24

console.log('------------------');

function later(callback, message) {
  return function() {
    callback(message);
  };
}

const logger = message => console.log(message);
let logWarning = later(logger, "The system is shutting down!");
logWarning(); // The system is shutting down!

console.log('------------------');

function later2(func, message) {
  return function(time) {
    func(message, time);
  };
}

const notify = function(message, when) {
  console.log(`${message} in ${when} minutes!`);
};

let shutdownWarning = later2(notify, "The system is shutting down");
shutdownWarning(30); // The system is shutting down in 30 minutes!

console.log('------------------');

function bind(object, callback) {
  return () => callback.call(object);
}

let obj = {};
let boundFunc = bind(obj, function() {
  this.foo = "bar";
});

boundFunc();
console.log(obj); // { foo: 'bar' }