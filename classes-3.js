"use strict"

var _ = require("underscore")

var person = {
	name: "andrew",
	sayName: function() {
		console.log(`hello im ${this.name}`);
	}
}

var user = _.extend({
	checkin: function() {
		console.log("checked in")
	}
}, person)


user.sayName();
user.checkin();