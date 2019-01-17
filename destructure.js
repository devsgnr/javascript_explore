'use strict';

/**
 *  Destructuring Assignment
 * 
 *  Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, 
 *  as sometimes they are more convenient. Destructuring also works great with complex functions that have a lot of parameters, 
 *  default values, and soon we’ll see how these are handled too.
 * 
 * 
 */

/**
 * 
 *  Array Destructuring
 * 
 */

let arr = [ 'Emmanuel', 'Watila' ];

let [ firstName, surname ] = arr;
console.log(`${firstName} ${surname}`);

let name = 'Emmanuel Watila';

let [ fName, sName ] = name.split(' ');
console.log(`${fName} ${sName}`);

// Ignoring / skipping elements in the array : by extra commas

let [ , , title ] = [ 'Emmanuel', 'Watila', 'Front-End', 'Developer' ];
console.log(title);

// Working with any iterable

let [ a, b, c ] = 'abc';
console.log(`${a} ${b} ${c}`);

let [ one, two, three ] = new Set([ 1, 2, 3 ]);
console.log(`${one} ${two} ${three}`);

// Working with any assignables

let user = new Object();

[ user.name, user.surname ] = 'Emmanuel Watila'.split(' ');
console.log(user);

// Looping with Oject.entries(obj)

let newUser = new Object();

newUser = {
	name: 'John Doe',
	age: 30
};

for (let [ key, value ] of Object.entries(newUser)) {
	console.log(`${key} : ${value}`);
}

// Looping with Map.entries()

let aUser = new Map();

aUser.set('name', 'Emmanuel');
aUser.set('age', '19');

for (let [ key, value ] of aUser.entries()) {
	console.log(`${key} : ${value}`);
}

// rest "..." - when we want not only to get the first element but all that follows
// as well

let [ name1, name2, ...rest ] = [ 'Emmanuel', 'Jonathan', 'Zanif', 'Jane', 'John' ];

console.log(name1);
console.log(name2);

console.log(rest);
console.log(rest[0]);

// Default values

// results in "undefined" since no element is provided in right hand array
let [ firstname, lastname ] = [];
console.log(firstname);

// overrding default elements
let [ namE = 'Emmanuel', isAdmin = true ] = [ 'Jonathan', false ];

console.log(namE);
console.log(isAdmin);

// Object Destructuring

let options = {
	repeat: false,
	lastPlay: 120,
	song: 'One Call Away'
};

let { repeat, lastPlay, song } = options;
console.log(repeat, lastPlay, song);

let { repeat: rpt, lastPlay: lastDur, ...all } = options;
console.log(rpt, lastDur, song);

let staffOption = {
	executive: false,
	lowLevel: true,
	admin: false
};

let executive, lowLevel, admin;

({ executive, lowLevel, admin } = staffOption);
console.log(executive, lowLevel, admin);

/**
 * 
 *  Nested Destructuring
 * 
 *  If an object or an array contain other objects and arrays, 
 *  we can use more complex left-side patterns to extract deeper portions.
 * 
 *  & being to extract what we need from that complex object or array
 * 
 */

options = {
	size: {
		width: 100,
		height: 200
	},
	items: [ 'Cake', 'Donut' ],
	extra: true
};

let { size: { width, height }, items: [ item1, item2 ], titled = 'Menu' } = options;

console.log(item1);

let { size } = options;
console.log(size);

/**
 * 
 *  Smart Function Parameters
 * 
 *  There are times when a function may have many parameters, most of which are optional. 
 *  That’s especially true for user interfaces. Imagine a function that creates a menu. 
 *  It may have a width, a height, a title, items list and so on.
 * 
 */

options = {
	myTitle: 'My Menu',
	items: [ 'Bread', 'Choco' ]
};

function createMenu({ title = '', width = 200, height = 200, items = [] }) {
	console.log(title, width, height, items);
}
createMenu(options);

function showMenu({ title = 'Undefined', width: w = 100, height: h = 200, items: [ item1, item2 ] }) {
	console.log(title, w, h);
	console.log(item1, item2);
}
showMenu(options);

/**
 * 
 * 
 *  Exercises
 * 
 */
console.log('-------Exercises--------');
/**
 * 
 * 
 * Exercises
 * 
 */

// Exercise 1

let person = { personName: 'Emmanuel', personAge: 19 };

let { personName, personAge, personIsAdmin = false } = person;
console.log(personName, personAge, personIsAdmin);

// Exercise 2

let salaries = {
	John: 100,
	Pete: 300,
	Mary: 250
};

function topSalaries(obj) {
	let max = 0,
		maxName = null;
	for (let [ name, salary ] of Object.entries(obj)) {
		if (max < salary) {
			max = salary;
			maxName = name;
		}
	}
	return maxName;
}

console.log(topSalaries(salaries));

// Personal Exercise
console.log('----Personal Exercise-----');
// Personal Exercise

let likers = [ 'hi_tech_guru', 'jjmish', 'zayslash', 'wandersinc' ];

let [ first, ...remainingLikers ] = likers;
let theNumberofLikes = remainingLikers.length;

console.log(`Liked by ${first} and ${theNumberofLikes} others`);
