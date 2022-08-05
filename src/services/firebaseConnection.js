import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
  apiKey: "AIzaSyDUrB6ZmKzvR9Jfz_z_wjQQ-3caEKmxuvI",
  authDomain: "friendlytasks-cbf7f.firebaseapp.com",
  projectId: "friendlytasks-cbf7f",
  storageBucket: "friendlytasks-cbf7f.appspot.com",
  messagingSenderId: "435128127859",
  appId: "1:435128127859:web:14e73beb9bb0214c59f506",
  measurementId: "G-XP2444H3M9"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase;
