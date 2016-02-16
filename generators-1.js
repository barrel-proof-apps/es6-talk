"use strict"

function* trip() {
	yield "atlanta";
	yield "nashville";
	yield "memphis";
	yield "new orleans";
	yield "houston";
}

let generator = trip();

console.log(generator.next().value);
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().done)

generator = trip();
let iterable = generator[Symbol.iterator]();

console.log(iterable.next().value);
console.log(iterable.next().value)
console.log(iterable.next().value)
console.log(iterable.next().value)
console.log(iterable.next().value)
console.log(iterable.next().done)