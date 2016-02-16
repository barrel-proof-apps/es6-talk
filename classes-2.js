"use strict"

var _ = require("underscore")

function Person(name) {
	this.name = name;
}
Person.prototype.sayName = function() {
	console.log(`hello im ${this.name}`);
}

var person1 = new Person("andrew");
var person2 = new Person("john");

person1.sayName();
person2.sayName();