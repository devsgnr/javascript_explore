'use strict';

let user = new Object();

user = {
	name: 'Emmanuel Watila',
	yob: 1999,
	age: null,
	username: 'itguru190',
	password: '',
	hashPassword: function(password) {
		/* Function for hashing password : more things to be added*/
		let _ASCII_, _SHIFTED_, _HASHED_;
		const _KEY_ = 6;
		for (let i = 0; i < password.length; i++) {
			_ASCII_ = password.charCodeAt(i);
			_SHIFTED_ = _ASCII_ + _KEY_;
			_HASHED_ = String.fromCharCode(_SHIFTED_);

			this.password += _HASHED_;
		}
	},
	findAge: function() {
		this.age = new Date().getFullYear() - this.yob;
	},
	playlist: 0,
	subscribedToPro: false
};

user.hashPassword('@Itguru190_');
user.findAge();

console.log(user);
