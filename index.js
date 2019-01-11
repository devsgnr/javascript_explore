'use strict';

/*
	* Using Function Objects
	*
	* A Constructor Function
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
	this.password = '';
	this.yearOfBirth = yearOfBirth;
	this.age = new Date().getFullYear() - this.yearOfBirth;
	this.dateJoined = new Date();
	this.allowAccess = this.age >= 18 ? true : false;
	this.subscribed = true;

	this.sayName = function() {
		return this.name;
	};

	this.encryptPassword = function(password) {
		let _ASCII_, _SHIFTED_, _HASH_;
		let _HASHED_;
		const _KEY_ = 9;
		for (let i = 0; i < password.length; i++) {
			_ASCII_ = password.charCodeAt(i);
			_SHIFTED_ = _ASCII_ + _KEY_;
			_HASH_ = _SHIFTED_.toString(26);

			this.password += _HASH_;
		}
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
		this.password = '';
		this.yearOfBirth = yearOfBirth;
		this.age = new Date().getFullYear() - yearOfBirth;
		this.dateJoined = new Date();
		this.allowAccess = this.age >= 18 ? true : false;
		this.subscribed = true;
	}

	sayName() {
		return this.name;
	}
	encryptPassword(password) {
		let _ASCII_, _SHIFTED_, _HASH_;
		const _KEY_ = 9;
		for (let i = 0; i < password.length; i++) {
			_ASCII_ = password.charCodeAt(i);
			_SHIFTED_ = _ASCII_ + _KEY_;
			_HASH_ = _SHIFTED_.toString(36);

			this.password += _HASH_;
		}
	}
}

var jjMish = new User('Jonathan James', 1998);
jjMish.encryptPassword('jjmish98_');

var emmaWat = new Person('Emmanuel Watila', 1999);
emmaWat.encryptPassword('Itguru190@_');

console.table([ emmaWat, jjMish ]);

/*
	* Chek function for mocha & chai testing
	*
 	* @param {type} to be checked
	* @return {boolean} result of check
	*
	*
 */
function checkTypeStr(type) {
	let result = typeof type;
	return result;
}
