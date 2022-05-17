// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID,
// };
const firebaseConfig = {
    apiKey: "AIzaSyAS2nNQo-bSjLcaRUX22PchOSIX8oXq1zA",
    authDomain: "doctors-portal-36af8.firebaseapp.com",
    projectId: "doctors-portal-36af8",
    storageBucket: "doctors-portal-36af8.appspot.com",
    messagingSenderId: "863225230360",
    appId: "1:863225230360:web:2850c1b3a4a817160aff6d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
