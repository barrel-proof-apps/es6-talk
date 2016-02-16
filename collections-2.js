"use strict"

// Maps
let key = "key"
var m = new Map();
m.set("hello", 42);
m.set(key, 34);
console.log("map[key]: "+m.get(key))
console.log("map['hello']: "+m.get("hello"))
