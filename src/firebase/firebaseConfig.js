import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBg3Srs5xa2LuPOadoZeT3Gdwp8F9rsV4o",
  authDomain: "kemahkerja-bb8a1.firebaseapp.com",
  projectId: "kemahkerja-bb8a1",
  storageBucket: "kemahkerja-bb8a1.appspot.com",
  messagingSenderId: "76788250437",
  appId: "1:76788250437:web:76b3915c0d09fa79c5b02c",
  measurementId: "G-BQ2Z7Y0975"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
