"use strict"
var _ = require("underscore");

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
	getCity: function(param) {
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve({id:1, name: "atlatna"})
			},100)
		})
	},
	update: function(param) {
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve()
			},100)
		})
	},
}

myservice.connect({user: "az",pass: "pwd"}).then(function(result) {
	return myservice.getCities();
}).then(function(cities){
	var updates = _.map(cities, function(city){
		return myservice.update({
			city: city + " !!!"
		});
	})
	return Promise.all(updates)
}).then(function(result){
	console.log("success!!!")
}).catch(function(err){
	console.log("ERROR" + err)
})