"use strict";

let calcFee = (amount, rate) => {
	let fee = amount * rate;
	return fee
}

let result = calcFee(100, 0.23)
console.log(result)
