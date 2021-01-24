import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyDv7n0C4IlyxZD3ltt6d5ArUTZLtpDZ3bM',
  authDomain: 'your-store-4333f.firebaseapp.com',
  projectId: 'your-store-4333f',
  storageBucket: 'your-store-4333f.appspot.com',
  messagingSenderId: '624614058818',
  appId: '1:624614058818:web:41e7ec3d85bea68259f6db',
  measurementId: 'G-ZY4RGXPVZW',
};

//linking our firbase variable(line 1) with google firebase || initialising firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
