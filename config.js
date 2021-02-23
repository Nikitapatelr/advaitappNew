import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBvAgXp-EQCUkbfdomlcGtZjWBZhgbwvrY",
  authDomain: "advaitapp-4d62f.firebaseapp.com",
  projectId: "advaitapp-4d62f",
  storageBucket: "advaitapp-4d62f.appspot.com",
  messagingSenderId: "110649567354",
  appId: "1:110649567354:web:77afa719749692accbf3c3",
  measurementId: "G-8E3GJJGJMN"

  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
