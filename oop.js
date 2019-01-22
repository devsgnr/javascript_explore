'use strict';

function Person(name, birthday) {
	this.name = name;
	this.birthday = birthday;
	this.password = '';
	this.encryptedPassword = '';
}

Person.prototype.getAge = function() {
	this.age = new Date().getFullYear() - this.birthday.getFullYear();
};

Person.prototype.birthdayToString = function() {
	this.birthday = this.birthday.toLocaleDateString();
};

Person.prototype.encryptPass = function(password) {
	let _ASCII_, _SHIFTED_, _HASH_;
	let _HASHED_;
	const _KEY_ = 12;
	for (let i = 0; i < password.length; i++) {
		_ASCII_ = password.charCodeAt(i);
		_SHIFTED_ = _ASCII_ + _KEY_;
		_HASH_ = _SHIFTED_.toString(36);

		this.encryptedPassword += _HASH_;
	}
	this.password = password;
};

let emma = new Person('Emmanuel Watila', new Date('1999-12-24'));
emma.getAge();
emma.birthdayToString();
emma.encryptPass('itguru190_');

/* ------------------------ CLASSES ------------------------------- */

class User extends Person {
	constructor(name, birthday) {
		super(name, birthday);
	}
}

let emmanuel = new User('Emmanuel', new Date('1999/12/24'));
emmanuel.getAge();
emmanuel.birthdayToString();
emmanuel.encryptPass('emma');
console.log(emmanuel);
