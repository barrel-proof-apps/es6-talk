"use strict"

var person = {
	name: "andrew",
	sayName: function() {
		console.log(`hello i'm ${this.name}`);
	}
}

person.sayName();