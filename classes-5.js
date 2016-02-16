"use strict"

class Person {
	constructor(name) {
		this._name = name
	}
	set name(name) {
		this._name = name;
		console.log("set "+this._name)
	}
	get name() {
		console.log("getting "+this._name)
		return this._name
	}
}

var person = new Person("andrew")

person.name = "joe"
console.log(person.name)