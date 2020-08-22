import firebase from "firebase/app";
import auth from "firebase/auth"
import db from "firebase/database"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE__lrr5mRiFcBBVd4_qiVTpmNqanW9RA",
  authDomain: "fire-hooks-ea33f.firebaseapp.com",
  databaseURL: "https://fire-hooks-ea33f.firebaseio.com",
  projectId: "fire-hooks-ea33f",
  storageBucket: "fire-hooks-ea33f.appspot.com",
  messagingSenderId: "909312763349",
  appId: "1:909312763349:web:f17506bd0b72b7d17fc95c",
  measurementId: "G-H0BLV6C0L6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
