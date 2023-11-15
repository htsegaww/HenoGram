import { initializeApp } from "firebase/app";
//storage
import { getStorage } from "firebase/storage";
//database
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_API_KEY,
  authDomain: import.meta.env.AUTH_DOMAIN,
  projectId: import.meta.env.REACT_APP_PROJECTED_ID,
  storageBucket: import.meta.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.REACT_APP_REACT_APP_APP_ID,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//initialize storage and database
const projectStorage = getStorage(app);
const db = getFirestore(app);
const timestamp = serverTimestamp();

export { projectStorage, db, timestamp, auth };
