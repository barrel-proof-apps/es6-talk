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
class User  extends Person {
	constructor(name, username) {
		super(name)
		this._username = username
	}
	checkin() {
		console.log("checked in @"+this._username)
	}
}


var user = new User("andrew", "az")

console.log(user.name)
user.checkin()