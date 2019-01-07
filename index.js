function person(name, yearOfBirth) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.year = new Date().getFullYear();
	this.age = this.year - this.yearOfBirth;
	this.dateJoined = new Date();
	this.allowAccess = this.age >= 18 ? true : false;
}

var emma = new person('Emmanuel Watila', 1999);
console.log(emma);

var johnDoe = new person('John Doe Anonymous', 1998);
console.log(johnDoe);
