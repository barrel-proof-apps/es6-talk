"use strict"

let trip = {
	stops: ["atlanta", "nashville", "memphis", "new orleans", "houston"],
	nextIndex: 0,
	[Symbol.iterator]: function() {
		return {
			stops: this.stops,
			nextIndex: this.nextIndex,
			next: function() {
				if (this.nextIndex < this.stops.length) {
					return {
						value: this.stops[this.nextIndex++],
						done: false
					};
				} else {
					return {
						done: true
					}
				}
			}
		}
	}
};

let iterable = trip[Symbol.iterator]();

console.log(iterable.next().value);
console.log(iterable.next().value);
console.log(iterable.next().value);
console.log(iterable.next().value);
console.log(iterable.next().value);
console.log(iterable.next().done);