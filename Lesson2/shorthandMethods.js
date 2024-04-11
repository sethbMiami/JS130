/* eslint-disable no-inner-declarations */
"use strict";

function factory(name, age, gender) {
  return {
    name,
    age,
    gender,
  };
}

let obj2 = {
  name: 'seth',
  age: 34,

  firstMethod() {
    return this.name;
  },

  secondMethod() {
    return this.age;
  }
};

//object destructuring
let obj = {
  foo: "foo",
  bar: "bar",
  qux: 42,
};

/*
let foo = obj.foo;
let bar = obj.bar;
let qux = obj.qux;
*/

let { foo, bar, qux } = obj;
console.log(foo, bar, qux);
let { foo: newFoo, bar: newBar, qux: newQux} = obj;
console.log(newFoo, newBar, newQux);

//array destructuring

let fooArr = [1, 2, 3];
let [ first, second, third ] = fooArr;
console.log(first, second, third, fooArr);
let string = 'yes';
let [fir, sec, thir] = string;
console.log(fir, sec, thir);

{
  let bar = [1, 2, 3, 4, 5, 6, 7];
  let [ first, , , fourth, fifth, , seventh ] = bar;
  console.log(first, fourth, fifth, seventh);
}

{
  let one = 1;
  let two = 2;
  let three = 3;

  let [ num1, num2, num3 ] =  [one, two, three];

  console.log(num1);   // 1
  console.log(num2);   // 2
  console.log(num3);   // 3
}

{
  let foo = [1, 2, 3, 4];
  let [ bar, ...qux ] = foo;
  console.log(bar);   // 1
  console.log(qux);   // [2, 3, 4]
}

{
  function add3(item1, item2, item3) {
    return item1 + item2 + item3;
  }

  let foo = [3, 7, 11];
  add3(foo[0], foo[1], foo[2]); // => 21
  console.log(add3(...foo));
}

{
  // Concatenate arrays
  let foo = [1, 2, 3];
  let bar = [4, 5, 6];
  let qux = [...foo, ...bar];
  console.log(qux);  // => [1, 2, 3, 4, 5, 6]
}

{
  // Create a clone of an object
  let foo = { qux: 1, baz: 2 };
  let bar = { ...foo };
  console.log(bar);         // { qux: 1, baz: 2 }
  console.log(foo === bar); // false -- bar is a new object
}

{
  // Merge objects
  let foo = { qux: 1, baz: 2 };
  let xyz = { baz: 3, sup: 4 };
  let obj = { ...foo, ...xyz };
  console.log(obj);  // => { qux: 1, baz: 3, sup: 4 }
}

// rest syntax
{
  let foo = [1, 2, 3, 4];
  let [ bar, ...otherStuff ] = foo;
  console.log(bar);        // 1
  console.log(otherStuff); // [2, 3, 4]
}

{
  let foo = {bar: 1, qux: 2, baz: 3, xyz: 4};
  let { bar, baz, ...otherStuff } = foo;
  console.log(bar);        // 1
  console.log(baz);        // 3
  console.log(otherStuff); // {qux: 2, xyz: 4}
}