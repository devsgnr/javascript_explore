'use strict';

let range = new Object();

range = {
	from: 1,
	to: 5
};

// Symbol.iterator - provides us with ability create our own iterables
// which we can use "for...of" on

range[Symbol.iterator] = function() {
	return {
		current: this.from,
		last: this.to,
		next() {
			if (this.current <= this.last) {
				return { done: false, value: this.current++ };
			} else {
				return { done: true };
			}
		}
	};
};

for (let num of range) {
	console.log(num);
}
