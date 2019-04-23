const functions = require('firebase-functions');
const admin  = require('firebase-admin')
const serviceAccount = require('./service_account.json')
const authChanged = require('./AuthChanged.js')


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sportmate-9e1cf.firebaseio.com"
});


exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

exports.authChanged = functions.https.onRequest((request, response) => {
    
    functions.auth.user().onCreate(function(user, context) {
  
  var uid = user.uid;
  var displayName = user.displayName;

   response.send(user)

 // return sendEmail(uid, displayName);
});
  
});


