"use strict";

import { bar } from "./JSmodule3.js";

let xyz = 1; // not exported

export function foo() {
  console.log(xyz);
  xyz += 1;
  bar();
}