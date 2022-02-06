import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDbLGyZHSsSAIhLCOYChEW9b4gs34ThTsQ",
    authDomain: "muso-ninjas-40f3a.firebaseapp.com",
    projectId: "muso-ninjas-40f3a",
    storageBucket: "muso-ninjas-40f3a.appspot.com",
    messagingSenderId: "46345943512",
    appId: "1:46345943512:web:24b7984e26f702c1f39aad"
};

// Init Firebase 
firebase.initializeApp(firebaseConfig)

// Init Services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//Timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectFirestore, projectAuth, timestamp}