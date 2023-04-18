var user = require('../model/user');
console.log("[userController] loaded);]");

var users = [];

let Adam = user.createUser("Adam", "Brock", "adam.brock1@marist.edu", "letmein");
var user2 = user.createUser("John", "Doe", "john.doe@marist.edu", "letmein");
var user3 = user.createUser("Marissa", "Adamo", "Marissa.adamo@hotmail.com", "swimmingISfunLOLXD");
var user4 = user.createUser("Katie", "Sailer", "katie.sailer1@yahoo.com", "crosswordSLUT");
var user5 = user.createUser("Max", "Gripdrop", "gripdrop@hotmail.com", "iLoveToGripDrop")

users.push(Adam);
users.push(user2);
users.push(user3);
users.push(user4);
users.push(user5);




exports.getAllUsers = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(users);
}

exports.saveUser = function(req, res) {
	let newUser = user.createUser(req.body.firstName, req.body.lastName, req.body.email, req.body.password);
	users.push(newUser);
	res.setHeader('Content-Type', 'application/json');
	res.send(users);
}

exports.getUser = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
  res.send(users[req.params.userId]);
}

exports.deleteUser = function(req, res) {
	users.splice(req.params.userId, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(users);
}

exports.updateUser = function(req, res) {
	// get the existing user from the array
	var updatedUser = users[req.params.userId];

	// check to see what has been passed and update the local copy
	console.log(req.body.firstName);
	if(req.body.firstName)

		updatedUser.firstName = req.body.firstName;
	if(req.body.lastName)
		updatedUser.lastName = req.body.lastName;
	
        if(req.body.email)
		updatedUser.email = req.body.email;
	if(req.body.password)
		updatedUser.password = req.body.password;

	// save the local copy of the user back into the array
	users[req.params.userId] = updatedUser;

	res.setHeader('Content-Type', 'application/json');
	res.send(users[req.params.userId]);
}