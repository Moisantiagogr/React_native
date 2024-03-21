import { initializeApp, getApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBKOgiU-qWtNFFrDP9g-3clnhPsx9RfpFU",
  authDomain: "restauranteb-ca3eb.firebaseapp.com",
  projectId: "restauranteb-ca3eb",
  storageBucket: "restauranteb-ca3eb.appspot.com",
  messagingSenderId: "1057410981744",
  appId: "1:1057410981744:web:23964152f330611d41b9b5"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

const db = getFirestore(app);
const storage = getStorage(app)
export { app, auth, db, storage };