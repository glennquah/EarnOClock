// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCasOJY7eeVOBuc3QYrn_yuWozhjbLjCrU",
    authDomain: "earn-o-clock.firebaseapp.com",
    projectId: "earn-o-clock",
    storageBucket: "earn-o-clock.appspot.com",
    messagingSenderId: "1017920633142",
    appId: "1:1017920633142:web:ce19eaec86b52ee3679b97"
  };
  
// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const firestore = firebase.firestore();
const auth = firebase.auth();

export { firestore };
export { auth };