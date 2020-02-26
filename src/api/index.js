import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAuic-g_hPAKRUuz0SoVP7rOLdlkCQqvFY",
  authDomain: "discord-2-1024e.firebaseapp.com",
  databaseURL: "https://discord-2-1024e.firebaseio.com",
  projectId: "discord-2-1024e",
  storageBucket: "discord-2-1024e.appspot.com",
  messagingSenderId: "292513746259",
  appId: "1:292513746259:web:590469f2d80adfe27665a6",
  measurementId: "G-Y838SQMNGW"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
