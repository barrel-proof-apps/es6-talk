"use strict"

var co = require("co"),
	_ = require("underscore");


var  myservice = {
	connect: function(param) {
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve(null)
			},100)
		})
	},
	getCities:function() {
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve(["atlanta", "houston", "nashville"])
			},100)
		})
	},
	update: function(param) {
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve(param)
			},100)
		})
	},
}


co(function*() {
	yield myservice.connect();
	console.log("connected")
	var cities = yield myservice.getCities();
	console.log("cities are "+JSON.stringify(cities));
	var updated = yield Promise.all(_.map(cities, function(city){
		return myservice.update({
			name: city + "!!!"
		})
	} ))
	console.log("updated cities: "+JSON.stringify(updated))
})
