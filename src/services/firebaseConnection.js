import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';
import { REACT_APP_API_KEY, REACT_APP_AUTH_DOMAIN } from "@env";

let firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
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
