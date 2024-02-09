import firebase from  'firebase/compat/app'
import 'firebase/compat/auth' ;
import 'firebase/compat/firestore'


 const FirebaseConfig ={
    apiKey: "AIzaSyDOuDs8vqVfrUKRYHEb0ZTWUBTi6ecSCfM",
  authDomain: "calender-dd2ed.firebaseapp.com",
  projectId: "calender-dd2ed",
  storageBucket: "calender-dd2ed.appspot.com",
  messagingSenderId: "453486579719",
  appId: "1:453486579719:web:376c427cbe5283fc959aa2",
  measurementId: "G-Y0KDRNRY0S"
}


if(!firebase.apps.length){
    firebase.initializeApp(FirebaseConfig)
}


export default FirebaseConfig