import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCe0D80XIUXvSJckBR78EfFxNy31X4iQJQ",
  authDomain: "auth-d4b39.firebaseapp.com",
  projectId: "auth-d4b39",
  storageBucket: "auth-d4b39.appspot.com",
  messagingSenderId: "699287387629",
  appId: "1:699287387629:web:e98ad54a947fcdd42afbe4",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { app, storage, db };
