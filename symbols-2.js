"use strict"

let person = { };


(function() {
	let name = Symbol.for("name");
	person[name] = "andrew";
})();

console.log("name: " + person[Symbol.for("name")])
