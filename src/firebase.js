


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyDa07YaK378Y7UiIdlS9w-AZl18fiJ0FKQ",
    authDomain: "arcana-app.firebaseapp.com",
    projectId: "arcana-app",
    storageBucket: "arcana-app.appspot.com",
    messagingSenderId: "778639434190",
    appId: "1:778639434190:web:f4522ee3b1410ed8b28b9f"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

export { auth, firestore, analytics, firebase };