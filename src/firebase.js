// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import getAuth to access auth object


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnG_Oozf5-XaUTGo6wqVO3F77EyOsLb-I",
  authDomain: "clone-1ea33.firebaseapp.com",
  projectId: "clone-1ea33",
  storageBucket: "clone-1ea33.appspot.com",
  messagingSenderId: "167267223907",
  appId: "1:167267223907:web:8e6d07e72c0a80c2fbab56",
  measurementId: "G-BNR9DDZ9WZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = app.db;
const analytics = getAnalytics(app);
const auth = getAuth(app); // Access auth object using getAuth function

export { db,auth };