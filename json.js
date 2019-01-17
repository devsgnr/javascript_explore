'use strict';

/**
 * 
 *  JSON - JavaScript Object Notation
 * 
 *  The JSON (JavaScript Object Notation) is a general format to represent values and objects. 
 *  It is described as in RFC 4627 standard. Initially it was made for JavaScript, but many other 
 *  languages have libraries to handle it as well. So it’s easy to use JSON for data exchange 
 *  when the client uses JavaScript and the server is written on Ruby/PHP/Java/Whatever.
 * 
 *  JSON methods, toJSON
 * 
 *  Two methods  :
 *  
 *  JSON.stringify - to convert objects into JSON
 *  JSON.parse - to convert JSON back into an object
 * 
 */

let student = {
	name: 'Emmanuel',
	age: 19,
	isAdmin: true,
	courses: [ 'html5', 'css3', 'sass', 'js', 'react' ],
	wife: null
};

let json = JSON.stringify(student);
console.log(json);

/**
 *  
 *  The resulting json string is a called "JSON-encoded or serialized" or 
 *  "stringified or marshalled object". We are ready to send it over the 
 *  wire or put into a plain data store.
 * 
 *  JSON is data-only cross-language specification, so some JavaScript-specific 
 *  object properties are skipped by JSON.stringify.
 *  
 *  Namely:
 *  Function properties (methods).
 *  Symbolic properties.
 *  Properties that store undefined.
 * 
 */

let user = {
	sayHi: function() {
		console.log('hello');
	},
	[Symbol('id')]: 123,
	something: undefined
};

console.log(JSON.stringify(user));

/* -------------------------------------------------------------------------------------- */

let meetup = {
	title: 'JAMStack Conf',
	room: {
		number: 23,
		participants: [ 'Emmanuel', 'Zay' ]
	}
};

let meetupJson = JSON.stringify(meetup);
console.log(meetupJson);

/**
 * 
 *  Excluding and transforming: replacer
 * 
 *  The full syntax of JSON.stringify is :
 * 
 *  let json = JSON.stringify(value[, replacer, space]);
 *  
 *  value - a value to encode
 *  replacer - array of properties to encode or a mapping function "function(key, value)"
 *  space - amount of space to use for formatting
 * 
 */

let room = {
	number: 23
};

meetup = {
	title: 'JAMStack Conf',
	participants: [ { name: 'Emmanuel' }, { name: 'Zay' } ],
	place: room,
	date: new Date(2018, 0, 17)
};

room.occupiedBy = meetup;

console.log(
	JSON.stringify(meetup, function replacer(key, value) {
		console.log(`${key} : ${value}`);
		return key == 'occupiedBy' ? undefined : value;
	})
);

/**
 * 
 *  Spacer - are used to prettifier for JSON, if spacer = 2,
 *  then we tell it display all nested objects & array on a new line
 *  with and indebt of 2'=
 * 
 */

let studentJson = JSON.stringify(student, null, 2);
console.log(studentJson);

/**
 * 
 *  JSON.parse - to decode a JSON-dtring, we need and another intern
 *  
 *  The full JSON.parse syntax : 
 * 
 *  let value = JSON.parse(str[, reviver]);
 *  str - JSON-string to parse.
 * reviver - Optional function(key,value) that will be called for each (key, value) pair and can transform the value.
 * 
 */

let studentObj = JSON.parse(studentJson);
console.log(studentObj);
