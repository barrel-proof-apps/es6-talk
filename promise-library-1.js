var when = require("when")

var  myservice = {
	connect: function(param) {
		return when.promise(function(resolve, reject, notify) {
			setTimeout(function() {
				resolve(null)
			},1000)
		})
	},
	getCity: function(param, cb) {
		return when.promise(function(resolve, reject, notify) {
			setTimeout(function() {
				resolve({id:1, name: "atlatna"})
			},1000)
		})
	},
	update: function(param, cb) {
		return when.promise(function(resolve, reject, notify) {
			setTimeout(function() {
				resolve()
			},1000)
		})
	},
}

myservice.connect({user: "az",pass: "pwd"}).then(function(result) {
	return myservice.getCity(1);
}).then(function(result){
	result.name = "Atlanta";
	return myservice.update(result)
}).then(function(result){
	console.log("success!!!")
}).catch(function(err){
	console.log("ERROR")
})