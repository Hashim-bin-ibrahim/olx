import firebase from 'firebase' ;
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCxkJxJrq9Su4TTD5rGHKFm2LFU6yKBiJs",
    authDomain: "olxdemo-a97ff.firebaseapp.com",
    projectId: "olxdemo-a97ff",
    storageBucket: "olxdemo-a97ff.appspot.com",
    messagingSenderId: "676555198313",
    appId: "1:676555198313:web:78b84a0778b392946577f8",
    measurementId: "G-QYPE1KFL26"
  };


  export default firebase.initializeApp(firebaseConfig)