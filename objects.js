'use strict';

let user = new Object();

user = {
	name: 'Emmanuel Watila',
	yob: 1999,
	username: 'itguru190',
	password: '',
	hashPassword: function(password) {
		/* Function for hashing password : more things to be added*/
		this.password = password;
	},
	playlist: 0,
	subscribedToPro: false
};

user.hashPassword('emmanuel99');

console.log(user);
