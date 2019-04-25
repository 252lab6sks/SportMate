const functions = require("firebase-functions");
const admin = require("firebase-admin");
const serviceAccount = require("./service_account.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://sportmate-9e1cf.firebaseio.com"
});

exports.helloWorld = functions.https.onRequest((request, response) => {
	response.send("Hello from Firebase!");
});

exports.authChanged = functions.https.onCall((data, context) => {
	return admin
		.auth()
		.getUserByEmail(data.email)
		.then(user => {
			return {
				message: `welcome ${user.email}`
			};
		});
});

exports.dataGet = functions.https.onCall((data, context) => {
	var events = [];

	return admin
		.database()
		.ref("events/")
		.once("value", snapshot => {
			let id = 0;
			var eventsObj = snapshot.val();
			Object.keys(eventsObj).forEach((key, index) => {
				id += 1;
				let row = {
					id: id,
					sport: eventsObj[key].sport,
					location: eventsObj[key].location,
					capacity: eventsObj[key].capacity,
					time: eventsObj[key].time,
					host: eventsObj[key].host,
					people: eventsObj[key].people,
					eid: eventsObj[key].eid
				};

				events.push(row);
			});
		})
		.then(() => {
			return {
				events: events
			};
		});
});

exports.joined = functions.https.onCall((data, context) => {
	return admin
		.database()
		.ref("events/" + data.data + "/people/")
		.push(data.email)
		.then(() => {
			return {
				success: data.data
			};
		});
});

exports.delete = functions.https.onCall((data, context) => {
	return admin
		.database()
		.ref("events/" + data.data + "/")
		.remove()
		.then(() => {
			return {
				success: "Removed!"
			};
		});
});
