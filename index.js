'use strict';

/*
	* Using Function Objects
	*
	* Returns the {Person} Object
	*
	* @param {string} name - Name of person
	* @param {number} yearOfBirth - Year of Birth of Person
	* @return {object} Person - Returns new Person object
	*
*/
function Person(name, yearOfBirth) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.age = new Date().getFullYear() - this.yearOfBirth;
	this.dateJoined = new Date();
	this.allowAccess = this.age >= 18 ? true : false;
	this.subscribed = true;

	this.sayName = function() {
		return this.name;
	};
}

/*
	* Using ES6 Classes
	*
	* Returns the {User} Object
	*
	* @param {string} name - Name of User
	* @param {number} yearOfBirth - Year of Birth of User
	* @return {object} User - Returns new User object
	*
	*
*/
class User {
	constructor(name, yearOfBirth) {
		this.name = name;
		this.yearOfBirth = yearOfBirth;
		this.age = new Date().getFullYear() - yearOfBirth;
		this.dateJoined = new Date();
		this.allowAccess = this.age >= 18 ? true : false;
		this.subscribed = true;
	}

	sayName() {
		return this.name;
	}
}

var janeDoe = new User('Jonathan James', 1998);
var johnDoe = new Person('Emmanuel Watila', 1999);

console.table([ johnDoe, janeDoe ]);

/*
	* Chek function for mocha & chai testing
	*
 	* @param {type} to be checked
	* @return {boolean} result of check
 */
function checkTypeStr(type) {
	let result = typeof type;
	return result;
}
