import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBjivnml88GAQtZSYppeXYryiL9Wbj8COc",
    authDomain: "todo-en-punta.firebaseapp.com",
    projectId: "todo-en-punta",
    storageBucket: "todo-en-punta.appspot.com",
    messagingSenderId: "729039629511",
    appId: "1:729039629511:web:076a1fb95e196bb69d22e2",
    measurementId: "G-QPWSN69LLJ"
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export { firestore };