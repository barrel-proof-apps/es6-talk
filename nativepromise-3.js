"use strict"

var co = require("co")
var  myservice = {
	connect: function(param) {
		console.log("returning connect() in 4 seconds");
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve(null)
			},4000)
		})
	},
	getCity: function(param) {
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve({id:1, name: "atlatna"})
			},100)
		})
	},
	update: function(param) {
		console.log("returning update() in 3s");
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve(param)
			},3000)
		})
	},
}

co(function*() {
	yield myservice.connect();
	console.log("connected")
	var city = yield myservice.getCity(1);
	console.log("city is "+JSON.stringify(city))
	city.name = city.name + "?"
	var updated = yield myservice.update(city);
	console.log("updated city to "+JSON.stringify(updated))
})
