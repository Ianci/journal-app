import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAmijgm6A_pqR_2kCc78cZt4AmkdouFtyE",
    authDomain: "journalapp-58d2b.firebaseapp.com",
    databaseURL: "https://journalapp-58d2b.firebaseio.com",
    projectId: "journalapp-58d2b",
    storageBucket: "journalapp-58d2b.appspot.com",
    messagingSenderId: "523091865751",
    appId: "1:523091865751:web:f932e8564b4b2ea0e1b9d2"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  const faceAuthProvider = new firebase.auth.FacebookAuthProvider();
  
  
  export { db, googleAuthProvider, firebase, faceAuthProvider}