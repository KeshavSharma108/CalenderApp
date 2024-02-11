import firebase from  'firebase/compat/app'
import 'firebase/compat/auth' ;
import 'firebase/compat/firestore'


 const FirebaseConfig ={
  apiKey: "AIzaSyBOFkvYfeD-GngR7hCzuirTIcKzzR3iNcY",
  authDomain: "calendar-427d2.firebaseapp.com",
  projectId: "calendar-427d2",
  storageBucket: "calendar-427d2.appspot.com",
  messagingSenderId: "138636921158",
  appId: "1:138636921158:web:47273c4e0f77b61d437d47",
  measurementId: "G-EBEG60CK9T"
}


if(!firebase.apps.length){
    firebase.initializeApp(FirebaseConfig)
}


export default FirebaseConfig