"use strict"

var target = {
	age: 41
}

var proxy = new Proxy(target, {
	get: function(target, property, receiver) {
		if (propery in target) {
			return target[property];
		} else {
			return "Not Found"
		}
	}
});

proxy.name = "andrew";

console.log("target.name: "+ target.name)
console.log("proxy.name: "+ proxy.name)
console.log("target.age: "+ target.age)
console.log("proxy.age: "+ target.age)
