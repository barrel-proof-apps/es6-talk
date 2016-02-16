"use strict";

let person = null;
let fullName = null;

(function() {
	let name = Symbol();
	fullName = name;
	person = {
		[name]: "andrew"
	}
	console.log("name: " + person[name])
	console.log(person[name] == person[fullName])
})();

console.log("fullName: " + person[fullName])