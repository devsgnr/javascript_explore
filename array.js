'use strict';

let arr = new Array();

arr = [
	'Apple',
	{ name: 'Emmanuel' },
	true,
	function() {
		alert('hello');
	}
];

arr.shift();
arr.unshift('Apple');
arr.push([], {});

for (let i in arr) {
	let type = typeof arr[i];
	console.log(type);
}

for (let item of arr) {
	console.log(item);
}
