/* eslint-disable no-inner-declarations */
"use strict";

{
  function foo(bar, qux, baz) {
    return {
      bar: bar,
      baz: qux,
      qux: baz,
    };
  }
}

{
  function foo(bar, baz, qux) {
    return {
      bar,
      baz,
      qux,
    };
  }

  let { baz, qux, bar } = foo(1, 2, 3);
  console.log(baz, qux, bar);
}

{
  const arr = [1, 2, 3];
  const obj = { a: 'a', b: 'b', c: 'c' };

  let [one, two, three] = arr;
  console.log(one, two, three);
  let { a, b, c } = obj;
  console.log(a, b, c);
  let spreadArray = [1, 2, 3];
  let [first, ...other] = spreadArray;
  console.log(first, other);
}

{
  let on = true;
  let off = false;
  console.log(`on is ${on}, and off is ${off}`);

  [on, off] = [off, on];
  console.log(`on is ${on}, and off is ${off}`);
}

{
  const arr = [1, 2, 3];
  let [, second, ] = arr;
  console.log(second);
}

{
  const obj = { a: 'a', b: 'b', c: 'c' };
  let { c: tail, ...obj2} = obj;
  console.log(obj2, tail);
}