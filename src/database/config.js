import * as firebase from 'firebase'

var config = {
  apiKey: "AIzaSyB4VTWSzBX3fZuWcEdugSy1pIbw2y5U3U0",
  authDomain: "varietypics-53469.firebaseapp.com",
  databaseURL: "https://varietypics-53469.firebaseio.com",
  projectId: "varietypics-53469",
  storageBucket: "varietypics-53469.appspot.com",
  messagingSenderId: "637085485826"
};

firebase.initializeApp(config)

const database = firebase.database()

export {database}

