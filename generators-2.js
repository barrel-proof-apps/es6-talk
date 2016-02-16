"use strict"

function* generator_ex() {
	yield 1;
	yield 2;
	yield 3;
}

let generator = generator_ex();

console.log(generator.next().value);

//return takes final value to return
console.log(generator.return(22).value)

console.log(generator.next().done)

