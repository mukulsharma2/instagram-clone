import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyDALNySwYmppwMoScnnAAgGSbmavRyavq0",
  authDomain: "instagram-clone-cadc8.firebaseapp.com",
  projectId: "instagram-clone-cadc8",
  storageBucket: "instagram-clone-cadc8.appspot.com",
  messagingSenderId: "753281919150",
  appId: "1:753281919150:web:7ad3e67fe70f032ab0653f",
  measurementId: "G-4C4M6JRDND"
}

const firebase = Firebase.initializeApp(config)
const { FieldValue } = Firebase.firestore
export {firebase, FieldValue};