import firebase from  'firebase/compat/app'
import 'firebase/compat/auth' ;
import 'firebase/compat/firestore'


 const FirebaseConfig ={
  apiKey: "AIzaSyDla2PvPN73NDNGl6zmUlDHCZgZK_xKIi0",
  authDomain: "calendar-c44fa.firebaseapp.com",
  projectId: "calendar-c44fa",
  storageBucket: "calendar-c44fa.appspot.com",
  messagingSenderId: "814644687371",
  appId: "1:814644687371:web:1eb90490cce7a0a2e18d0e",
  measurementId: "G-R1L5V225J3"
}


if(!firebase.apps.length){
    firebase.initializeApp(FirebaseConfig)
}


export default FirebaseConfig