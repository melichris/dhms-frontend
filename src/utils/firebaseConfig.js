// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyA57wYHM9XI_upBwOpNb8H_OegtkIkf4TE",
  authDomain: "dhms-fdc63.firebaseapp.com",
  projectId: "dhms-fdc63",
  storageBucket: "dhms-fdc63.appspot.com",
  messagingSenderId: "1049421847719",
  appId: "1:1049421847719:web:92fc69e66d244c7e16cf82",
  measurementId: "G-YBDJVSWB6X"
};

// Initialize Firebase
const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export {
    firebaseApp
}