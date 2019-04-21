const functions = require('firebase-functions');
const admin  = require('firebase-admin')
const serviceAccount = require('./service_account.json')
const createUser = require('./CreateUser.js')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sportmate-9e1cf.firebaseio.com"
});

var firebase = require('firebase');


exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

exports.CreateUser = functions.https.onRequest(createUser)


