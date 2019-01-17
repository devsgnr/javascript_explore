'use strict';

/**
 * 
 *  Date & Time
 *  
 *  It stores the date, time and provides methods for date/time management.
 *  For instance, we can use it to store creation/modification times, 
 * to measure time, or just to print out the current date.
 * 
 */

let now = new Date();
console.log(now);

let date1 = new Date(0);
console.log(date1);

let date2 = new Date(24 * 3600 * 1000);
console.log(date2);

let timestamp = new Date().getTime();
console.log(timestamp);

let date3 = new Date('2019-01-16');
console.log(date3);

let date4 = new Date(2019, 0, 16, 10, 20, 0, 0);
console.log(date4);

console.log(now.getUTCHours());
console.log(now.getHours());

console.log(now.getTimezoneOffset());

let today = new Date();

// Setting Dates
today.setHours(1);
console.log(today);

// Date Autocorrection
let date = new Date(2013, 0, 32);
console.log(date);

date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);

console.log(date);

// Date to Number, date diff
console.log(+date);

// can be used for time measurment
let start = new Date();

for (let i = 0; i < 1000000; i++) {
	let doSomething = i * i * i;
}

let end = new Date();

console.log(`The loop took ${end - start} ms`);

/**
 * 
 *  Benchmarking
 * 
 *  If we want a reliable benchmark of CPU-hungry function
 *  we should be careful
 * 
 */
function diffSubtract(date1, date2) {
	return date2 - date1;
}

function diffGetTime(date1, date2) {
	return date2.getTime() - date1.getTime();
}

function bench(cal) {
	let date1 = new Date(0);
	let date2 = new Date();

	let start = Date.now();
	for (let i = 0; i < 100000; i++) cal(date1, date2);
	return Date.now - start;
}

console.log('Time of diffSubtract: ' + bench(diffSubtract) + ' ms');
console.log('Time of diffGetTime: ' + bench(diffGetTime) + ' ms');
