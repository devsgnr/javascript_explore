'use strict';

let user = new Object();

user = {
	name: 'Emmanuel Watila',
	yob: 1999,
	username: 'itguru190',
	password: '',
	hashPassword: function(password) {
		/* Function for hashing password : more things to be added*/
		let _ASCII_, _SHIFTED_, _HASHED_;
		for (let i = 0; i < password.length; i++) {
			_ASCII_ = password.charCodeAt([ i ]);
			_SHIFTED_ = _ASCII_ + 3;
			_HASHED_ = String.fromCharCode(_SHIFTED_);

			this.password += _HASHED_;
		}
	},
	playlist: 0,
	subscribedToPro: false
};

user.hashPassword('emmanuel99');

console.log(user);
