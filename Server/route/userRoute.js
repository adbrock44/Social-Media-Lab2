var userController = require('../controller/userController');
console.log("[userRoute] loaded");

let userRoutes = require("../controller/userController");
// require the express library
var express = require('express');
// create chainable route handlers for a path by using app.route()
// see https://expressjs.com/en/guide/routing.html
var router = express.Router();
// all users routes
router.route('/')
.get( ( req, res ) => {
  userController.getAllUsers( req, res );
})
.post( ( req, res ) => {
  userController.saveUser( req, res );
});

// user by array index route
router.route('/:userId')
.get( ( req, res ) => {
  userController.getUser( req, res );
})
.put( ( req, res ) => {
  userController.updateUser( req, res );
})
.patch( ( req, res ) => {
  userController.updateUser( req, res );
})
.delete( ( req, res ) => {
  userController.deleteUser( req, res );
});

// find user by email route
router.route('/find/:email')
.get( ( req, res ) => {
  userController.getUserByEmail( req, res );
});

module.exports = router;