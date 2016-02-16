"use strict";
//--harmony-destructuring

let [a, ...b] = ["atlanta", "austin", "nashville", "charlotte"];

console.log("a: "+a);
console.log("b: "+Array.isArray(b));
console.log("b: "+b)