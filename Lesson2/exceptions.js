"use strict";

{
  function div(first, second) {
    return first / second;
  }

  let result = div(1, 0);
  console.log(result); // => Infinity
}

{
  function div(first, second) {
    if (second === 0) {
      throw new Error("Divide by zero!");
    }
  
    return first / second;
  }
  
  let result = div(1, 0); // Error: Divide by zero!
  console.log(result);    // not run
}