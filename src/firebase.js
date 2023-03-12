import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOQZ4lqP9JPSG6Co5dBc5cJIchYFIO5EE",
    authDomain: "hingeme-aafd1.firebaseapp.com",
    projectId: "hingeme-aafd1",
    storageBucket: "hingeme-aafd1.appspot.com",
    messagingSenderId: "644372458041",
    appId: "1:644372458041:web:e09c8b8642d69105e2bbe8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;