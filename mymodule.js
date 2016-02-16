"use strict"


var cityResource {
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
}

var auth {
	login:function() {
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve()
			},100)
		})
	},
}

export var auth = auth;
export var cityResource = cityResource;