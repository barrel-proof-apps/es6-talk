var  myservice = {
	connect: function(param, cb) {
		setTimeout(function() {
			cb(null)
		},1000)
	},
	getCity: function(param, cb) {
		setTimeout(function() {
			cb(null, {id:1, name: "atlatna"})
		},1000)
	},
	update: function(param, cb) {
		setTimeout(function() {
			cb(null)
		},1000)
	},
}


//implementation
myservice.connect({user: "az",pass: "pwd"}, function(err) {
	if (err) {
		//handle error
		console.log("ERROR connect")
	} else {
		myservice.getCity(1, function(err, result){
			if (err) {
				//handle error
				console.log("ERROR getCity")
			} else {
				result.name = "Atlanta";
				myservice.update(result, function(err){
					if (err) {
						//hanlde error
						console.log("ERROR update")
					} else {
						console.log("success!!!")
					}
				});
			}
		});
	}
});