"use strict";

let key = {
	m: "mykey"
}

var weakmap = new WeakMap();
weakmap.set(key, "value");
console.log("weakmap.key: " + weakmap.get(key))
key = null;
setTimeout(function() {
	console.log("weakmap.key: " + weakmap.get(key))
}, 1000)
