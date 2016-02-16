"use strict"

function* generator_ex() {
	try {
		yield 1;
	} catch (e) {
		console.log("1st exception: "+e)
	}
	try {
		yield 2;
	} catch (e) {
		console.log("2nd exception: "+e)
	}
}

let generator = generator_ex();

console.log(generator.next().value);

//return takes final value to return
console.log(generator.throw("error 1").value)
console.log(generator.throw("error 2").done)
