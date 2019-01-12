'use strict';

// Creating an Array using "new Array()"
let arr = new Array();

arr = [ 'Emmanuel', 'Watila', 'Jonathan', 'James' ];

for (let item of arr) {
	console.log(item);
}

// .splice - get position and adds element 'and' to the Array
arr.splice(2, 0, 'and');
console.log(arr);

// .slice - returns and array sliced from a string
let name = arr[0];
console.log(name.slice(0, 7));

// .concat -
let arrayLike = {
	0: 'something',
	1: 'else',
	// Symbol.isConcatSpreadable - if "true"
	// enables object to be copied as an array
	// giving the output
	// => ["Emmanuel", "Watila", "and", "Jonathan", "James", "something", "else"]
	//
	// else it copies the object as a whole
	// giving the output
	// => [ 'Emmanuel', 'Watila', 'Jonathan', 'James', {...} ]
	[Symbol.isConcatSpreadable]: true,
	length: 2
};

arr = arr.concat(arrayLike);
console.log(arr);

// .forEach - allows to run a function for every element of the array
arr.forEach((item, index) => {
	console.log(`${index} : ${item}`);
	if (item.includes('James') || item.includes('Watila')) {
		console.log(`${item} : true`);
	}
});

console.log(arr.indexOf('James'));
console.log(arr.includes('Watila'));

// .find - locates an element in an array with a specific condition
let users = [ { id: 1, name: 'Emmanuel' }, { id: 2, name: 'Jonathan' } ];
let user = users.findIndex((item) => item.name == 'Emmanuel');

console.log(user.name);
//
