const admin = require('firebase-admin')
const functions = require('firebase-functions');


 module.exports = function(req, res){

     functions.auth.user().onCreate((user) => {
         res.send("USER CREATED!")
    });


 }   


 