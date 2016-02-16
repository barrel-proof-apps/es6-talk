"use strict"
//--harmony_modules
//fails

import {auth, cityResource} from "mymodule";

auth.login().then(function() {
	console.log("successfully logged in");
});
