'use strict';

// Map - a map is a collection of keyed data items just like an object
// only difference is Map allows key of any type...

/** 
 *  The main Map.methods() are :
 * 
 *  new Map() - creates the map
 *  map.set(key, value) - stores valie by the key
 *  map.get(key) - return the values by the key, returns "undefined" if value doesn't exist
 *  map.has(key) - returns true, if the Map contains the provided key, otherwise returns false
 *  map.delete(key) - deletes / removes the value by the key
 *  map.clear() - clears the map
 *  map.size - return the current element count of the Map (in other words length)
*/

let map = new Map();

map.set('1', 'str1').set(1, 'num1').set(true, 'bool1');

console.log(map.get(1));
console.log(map.get('1'));
console.log(map.get(true));

console.log(map.size);

// Map can also take objects as keys

let john = { name: 'John' };
let visitsCountMap = new Map();

visitsCountMap.set(john, 123);
console.log(visitsCountMap.get(john));

// Map from Object

map = new Map([ [ '1', 'str1' ], [ 1, 'num1' ], [ true, 'bool1' ] ]);
console.log(map.get(1));

// Object.entries() - returns an array of key/value pairs for an object
// exactly in that format...

let map2 = new Map(
	Object.entries({
		name: 'Emmanuel',
		age: 19
	})
);

console.log(map2);

/**
 *  Iteration over Map
 * 
 * For looping over a map, there are 3 methods()
 * 
 * @return map.keys() - returns an iterable for keys
 * @return map.values() - returns an iterable for values
 * @return map.entries() - returns an iterable for entries [key, value], it's used by default in "for..of"
 * 
 */

let recipeMap = new Map([ [ 'cucumber', 500 ], [ 'tomatoes', 350 ], [ 'onion', 50 ] ]);

for (let vegetable of recipeMap.keys()) {
	console.log(vegetable);
}

for (let amount of recipeMap.values()) {
	console.log(amount);
}

for (let entry of recipeMap) {
	console.log(entry);
}

/**
 * 
 *  The iteration goes in the same order as the values were inserted. 
 *  Map preserves this order, unlike a regular Object.
 * 
 *  Besides that, Map has a built-in "forEach" method, similar to Array
 * 
 */

recipeMap.forEach((value, key, map) => {
	console.log(`${key} : N ${value}`);
});

recipeMap.clear();
console.log(recipeMap);

/**
 *  Set - a set is a collection of values, where each value may occur
 *  only once..
 * 
 *  It's main main methods are ;
 * 
 *  new Set(iterable) - creates the set, optionally from an array of values (any iterable will do)
 *  @return set.add(value) - adds a value, returns the set itself.
 *  @return set.delete(value) - removes the value, returns "true" if value existed at the time of the call otherwise returns "false"
 *  @return set.has(value) - returns "true" if the value exists in the set, otherwise false
 * 			set.clear() - removes everything from he set.
 * 			set.size - is the elements count
 * 
 */

let set = new Set();

let emmanuel = { name: 'Emmanuel', handle: 'itguru190' };
let jonathan = { name: 'Jonathan', handle: 'jjmish66' };

set.add(emmanuel);
set.add(jonathan);
set.add(emmanuel);

console.log(set.size);

// We can loop over a set either with "for..of" or using "forEach":

for (let user of set) {
	console.log(user);
	console.log(`${user.name} : @${user.handle}`);
}

set.forEach((value, valueAgain, set) => {
	console.log(value);
});

/**
 *  The same methods Map has for iterators are also supported:
 * 
 *  @return .keys() - returns an iterable object for values
 *  @return .values() - same as set.keys, for compatibility with Map
 *  @return .entries() - returns an iterable object for entries [value, value] exits for compatibility with Map
 * 
 */

console.log(set.keys());
console.log(set.values());
console.log(set.entries());

set.clear();
console.log(set);

/**
 * WeakMap & WeakSet
 * 
 * WeakSet - is a sepcial kind of "Set" that does not prevent JavaScript from removing its items from memory.
 * WeakMap - is the same thing for "Map"
 * 
 * 
 */

let weakMap = new WeakMap();
let obj = new Object();

weakMap.set(obj, 'OK');
//weakMap.set('TEST', 'WHOOPS!!');

/**
 *  WeakMap - does not support iteration and methods "keys(), values(), entries()", so there's
 *  no way to get all keys or values from it
 * 
 *  WeakMap has only the following methods :
 * 
 *  weakMap.get(key)
 *  weakMap.set(key, value)
 *  weakMap.delete(key, value)
 *  weakMap.has(key)
 * 
 *  WeakSet behaves similarly:
 * 
 *  WeakSet may only work with Objects (not primitives)
 *  An object exists in the set while it is reachable from somewhere else
 *  Like Set, it supports add(), has(), and delete(), but not size and keys() and no iterations.
 * 
 *  for instance,, it can be used to keep track of whether a message is read :
 * 
 */

let messages = [
	{ text: 'Hello', from: 'John' },
	{ text: 'How goes?', from: 'John' },
	{ text: 'See you soon', from: 'Alice' }
];

let unreadSet = new WeakSet(messages);
console.log(unreadSet.has(messages[1]));

unreadSet.delete(messages[1]);
messages.shift();

console.log(messages);

/**
 *  Object.keys, Object.values, Object.entries
 * 
 *  @return Object.keys(obj) - returns an array of keys.
 *  @return Object.values(obj) - returns an array of values.
 *  @return Object.entries(obj) - returns an array of [key, value] pairs
 * 
 * 	@return Object.keys(obj) - return a "real" Array, while map.keys() - returns an iterable
 */

let admin = {
	name: 'Emmanuel Watila',
	age: 19
};

console.log(Object.keys(admin));
console.log(Object.values(admin));
console.log(Object.entries(admin));

for (let value of Object.values(admin)) {
	console.log(value);
}

// To return only symbolic keys
console.log(Object.getOwnPropertySymbols(admin));

// To return all keys
console.log(Reflect.ownKeys(admin));

// Exercise --- 1 -- find total sum of salaries in the "salaries" object

let salaries = {
	John: 100,
	Pete: 300,
	Mary: 250
};

function sumSalaries(obj) {
	let sum = 0;
	for (let salary of Object.values(obj)) {
		sum += salary;
	}
	return sum;
}

console.log(sumSalaries(salaries));

// Exercise -- 2 -- Write a function count(obj) that returns the number of properties in the object

let person = {
	name: 'Emmanuel',
	age: 19
};

function count(obj) {
	let keys = Object.keys(obj);

	let length = keys.length;
	return length;
}

console.log(count(salaries));
