import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDrStQz9fp1r5kmNL15SsKk6RbKmpZhy8I",
    authDomain: "marioplan-e261a.firebaseapp.com",
    databaseURL: "https://marioplan-e261a.firebaseio.com",
    projectId: "marioplan-e261a",
    storageBucket: "marioplan-e261a.appspot.com",
    messagingSenderId: "408545186687"
}
firebase.initializeApp(config)
const _firestoreSettings = {
    timestampsInSnapshots: true
}
firebase.firestore().settings(_firestoreSettings)

export default firebase
