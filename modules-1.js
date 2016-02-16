"use strict"

import {auth, cityResource} from "mymodule";


console.log("loaded")
// console.log(m.auth);
auth.login().then(function() {
	console.log("successfully logged in");
});
