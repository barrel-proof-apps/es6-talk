"use strict"


let trip = {
	stops: ["atlanta", "nashville", "memphis", "new orleans", "houston"],
	nextIndex: 0,
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
};


console.log(trip.next().value);
console.log(trip.next().value);
console.log(trip.next().value);
console.log(trip.next().value);
console.log(trip.next().value);
console.log(trip.next().done);