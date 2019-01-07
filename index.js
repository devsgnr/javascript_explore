function Person(name, yearOfBirth) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.year = new Date().getFullYear();
	this.age = this.year - this.yearOfBirth;
	this.dateJoined = new Date();
	this.allowAccess = this.age >= 18 ? true : false;
}

var johnDoe = new Person('John Doe', 1988),
	jamesDoe = new Person('James Doe', 2004),
	janeDoe = new Person('Jane Doe', 1960);

console.table([ johnDoe, jamesDoe, janeDoe ]);
