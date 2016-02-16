"use strict"

class Person {
	constructor(name) {
		this.name = name
	}
	sayName() {
		console.log(`im ${this.name}`)
	}
}

var person = new Person("andrew")

person.sayName()