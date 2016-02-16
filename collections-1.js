"use strict";

var s = new Set();
s.add("hello").add("goodbye").add("hello");
console.log("set size: " + s.size);
console.log("set has hello: " + s.has("hello"));
