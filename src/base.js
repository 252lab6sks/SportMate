import firebase from 'firebase/app';
import * as env from "./Constants";
import 'firebase/auth';
import 'firebase/database'

const config = {
    apiKey: env.REACT_APP_API_KEY,
    authDomain: "sportmate-9e1cf.firebaseapp.com",
    databaseURL: "https://sportmate-9e1cf.firebaseio.com",
    projectId: "sportmate-9e1cf",
    storageBucket: "sportmate-9e1cf.appspot.com",
    messagingSenderId: "629833329562"
};

const app = firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.database(app);
