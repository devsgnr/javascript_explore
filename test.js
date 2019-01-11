'use strict';

mocha.setup('bdd');
let assert = chai.assert;

// Testing...
describe('typeCheck', function() {
	//Check if string values are {true}
	describe('stringCheck', function() {
		it('should be a string', function() {
			assert.equal(checkTypeStr(Person.name), 'string');
		});

		it('should be a string', function() {
			assert.equal(checkTypeStr(User.name), 'string');
		});
	});
});

mocha.run();
