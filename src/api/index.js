import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAECIVao8ukspv1CWhh63FuHx-Mj5MXX7A",
  authDomain: "anything-for-pizza.firebaseapp.com",
  databaseURL: "https://anything-for-pizza.firebaseio.com",
  projectId: "anything-for-pizza",
  storageBucket: "anything-for-pizza.appspot.com",
  messagingSenderId: "623291146383",
  appId: "1:623291146383:web:5bf6dbb18acc5cf08c10fa",
  measurementId: "G-TM9N65CQ2W"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
