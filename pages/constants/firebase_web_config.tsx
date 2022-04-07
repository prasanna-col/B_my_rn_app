// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW3XWmTFkwV6uBmKV1XOpLa-DgsgVr3-0",
  authDomain: "demotest-68868.firebaseapp.com",
  projectId: "demotest-68868",
  storageBucket: "demotest-68868.appspot.com",
  messagingSenderId: "739257118657",
  appId: "1:739257118657:web:305a1e9c929fecd62a0940",
  measurementId: "G-2NH5M6WLFP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);