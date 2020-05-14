import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCfgL80u0ohwUICMBnrZtjiIXBQKHGhmoA",
  authDomain: "ben-clothing-db.firebaseapp.com",
  databaseURL: "https://ben-clothing-db.firebaseio.com",
  projectId: "ben-clothing-db",
  storageBucket: "ben-clothing-db.appspot.com",
  messagingSenderId: "392567191650",
  appId: "1:392567191650:web:f782c6eeb17c4695be793b",
  measurementId: "G-KNQ3DCW0K4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;