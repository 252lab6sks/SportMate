const functions = require('firebase-functions');
const admin  = require('firebase-admin')
const serviceAccount = require('./service_account.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sportmate-9e1cf.firebaseio.com"
});


exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});



