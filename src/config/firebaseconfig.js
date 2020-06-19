import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBrj3NnxH3T11WVEWimuwYM4U7qUPwGqdc",
    authDomain: "project-manager-2dabf.firebaseapp.com",
    databaseURL: "https://project-manager-2dabf.firebaseio.com",
    projectId: "project-manager-2dabf",
    storageBucket: "project-manager-2dabf.appspot.com",
    messagingSenderId: "234961766295",
    appId: "1:234961766295:web:ae579abb8542a40e4ba6d2"
  };
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  // firebase.firestore().settings({timestampsInSnapshots:true});
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const firestore = firebaseApp.firestore();
  export default firebase;

  