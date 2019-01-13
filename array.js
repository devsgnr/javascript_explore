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
	0: 'are',
	1: 'something',
	2: 'else',
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
<<<<<<< HEAD

// .map - it calls the function for each element of the array
// and returns the array results.
let people = arr.map((item) => item.length);
//console.log(people);

//.sort - reorder the arrangements in an array
// we can pass in "ordering function" as an
// argument....

function compareNumeric(a, b) {
	if (a > b) return 1;
	if (a == b) return 0;
	if (a < b) return -1;
}

people.sort(compareNumeric);
console.log(people);

function checkMod(a) {
	if (a % 2 == 0) return -1;
	if (a == 2) return 0;
	if (a % 2 != 0) return 1;
}

people.sort(checkMod);
console.log(people);

// .split - splits a string into an array followed
// by a delimeter (string) which is the .split argument
// .split (delim);
//
// NB : Delimeter should march delimeter used in string
let names = 'John, Jane, Mike, Doe',
	namesArr = names.split(', ');

for (let name of namesArr) {
	console.log(`A message to ${name}`);
}

// .join - does the opposite of .split
// It creates a string from an array of elements
// and glues them by the seperator provided
let joined = arr.join('::');
console.log(joined);

// .reduce / .reduceRight - are used to caluculate a single
// value based on the array

let totalLen = people.reduce((sum, current) => sum + current, 0);
console.log(totalLen);

let totalLen2 = people.reduceRight((sum, current) => sum + current);
console.log(totalLen2);

// Array.isArray - arrays and object aren't distinguishable in the language
// so "typeof" will return "object" for both an array & an object
// so Array.isArray is used to determine the existance of an array

console.log(Array.isArray(arrayLike));
console.log(Array.isArray(people));

// thisArg

let useR = {
	age: 18,
	younger(otherUser) {
		return otherUser.age < this.age;
	}
};

let userS = [ { age: 12 }, { age: 16 }, { age: 32 } ];
let youngsters = userS.filter(useR.younger, useR);

console.log(youngsters.length);

