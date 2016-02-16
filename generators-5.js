"use strict"

function* generator_ex1() {
	yield "a";
	yield "b";
}

function* generator_ex2() {
	yield 1;
	yield* generator_ex1();
	yield* [2,3];
}


let generator = generator_ex2();

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().done);
