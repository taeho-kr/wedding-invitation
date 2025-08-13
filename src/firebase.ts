import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvAaJoaEGET4WVS9JM5aoX0qfLp-FZgBA",
  authDomain: "wedding-invitation-2b359.firebaseapp.com",
  projectId: "wedding-invitation-2b359",
  storageBucket: "wedding-invitation-2b359.firebasestorage.app",
  messagingSenderId: "458941226855",
  appId: "1:458941226855:web:4ffa0a2be78b4303aa99c2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);