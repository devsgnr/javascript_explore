'use strict';

let encryptPassword = function(password) {
	let _ASCII_, _SHIFTED_, _HASH_, _HASHED_;
	const _KEY_ = 9;
	for (let i = 0; i < password.length; i++) {
		_ASCII_ = password.charCodeAt(i);
		_SHIFTED_ = _ASCII_ + _KEY_;
		_HASH_ = String.fromCharCode(_SHIFTED_);

		_HASHED_ += _HASH_;
	}
	return _HASHED_;
};

let user = {
	name: 'Emmanuel Watila',
	yob: 1999,
	age: null,
	email: 'itguru190@gmail.com',
	username: 'itguru190',
	password: '',
	playlist: null,
	subscribedToPro: false,
	/* 
		 * Function Declaration
		 *
		 * @return {this.value}
	*/
	encryptPassword: function(password) {
		this.password = encryptPassword(password);
	},
	findAge: function() {
		this.age = new Date().getFullYear() - this.yob;
	}
};

user.encryptPassword('&Itguru190&');
user.findAge();

console.log(user);

let shoppingCart = {};

/** 
 * 
 * 
 	* More Object Lessons 
 * 
 * 
*/
alert(shoppingCart);
