// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence, getAuth, GoogleAuthProvider } from "firebase/auth";
// import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeSjRtNTJlhqfdRecXx3aCGzgufw7C1TA",
  authDomain: "app-hyffin-db.firebaseapp.com",
  projectId: "app-hyffin-db",
  storageBucket: "app-hyffin-db.appspot.com",
  messagingSenderId: "70093456937",
  appId: "1:70093456937:web:2f28e5abc55dec79d27e38",
};

// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// });



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
// // export const firebaseAuth = getAuth();
// // export const storage = getStorage(app);
// export const googleProvider = new GoogleAuthProvider();


// const app = initializeApp(firebaseConfig);
// initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// });
// const auth = getAuth(app);
// const db = getFirestore(app);

// export { auth, db };