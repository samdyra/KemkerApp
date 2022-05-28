import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB1pcMdR28myk8jk4W4XDjKNTNgdxqFBRI",
  authDomain: "kemkerapp.firebaseapp.com",
  projectId: "kemkerapp",
  storageBucket: "kemkerapp.appspot.com",
  messagingSenderId: "1043345476411",
  appId: "1:1043345476411:web:7d59c6fa7ab4a7f30d851e",
  measurementId: "G-BJL3J3B44M",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
