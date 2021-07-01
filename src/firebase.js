import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAZbxQanIuc3MdxpbE7vMAGh2vACYfZkWM",
  authDomain: "clone-1-4e299.firebaseapp.com",
  projectId: "clone-1-4e299",
  storageBucket: "clone-1-4e299.appspot.com",
  messagingSenderId: "905293710046",
  appId: "1:905293710046:web:9b13012fb8c62e5035b84f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
