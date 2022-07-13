// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPKw2wrMJNMW3aOUUIW8b53gbso51o7yQ",
  authDomain: "vokabulary-a289c.firebaseapp.com",
  projectId: "vokabulary-a289c",
  storageBucket: "vokabulary-a289c.appspot.com",
  messagingSenderId: "572019012736",
  appId: "1:572019012736:web:c864b7a381c05451de2265",
  measurementId: "G-45NRK1M902"
};

initializeApp(firebaseConfig)
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();
