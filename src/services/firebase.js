// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZp-dJqMWo97szCe6nbqOYNPlnwdYBHQ4",
  authDomain: "myfitnessgym-8a53d.firebaseapp.com",
  projectId: "myfitnessgym-8a53d",
  storageBucket: "myfitnessgym-8a53d.appspot.com",
  messagingSenderId: "356158953622",
  appId: "1:356158953622:web:5c6c469c8c10381e7c8ab7",
  measurementId: "G-4GF7BFCR6R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth ,GoogleAuthProvider,signInWithPopup,signInWithPhoneNumber} from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgocb_Z-A08cZUFk4DtCLLqjQULbjych8",
  authDomain: "chat-app-2308b.firebaseapp.com",
  projectId: "chat-app-2308b",
  storageBucket: "chat-app-2308b.appspot.com",
  messagingSenderId: "1092770908408",
  appId: "1:1092770908408:web:10cd32c98a699d6eda530d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleAuthProvider = new GoogleAuthProvider()
// export const db = getFirestore(app)


export const googleSignIn = () =>
{
  signInWithPopup(auth,googleAuthProvider).then((data)=>
  {
    console.log(data.user.photoURL)
    localStorage.setItem('Profile', data.user.photoURL);

  }).catch((error)=>console.log(error)) 
}