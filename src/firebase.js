import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; 
 
const firebaseConfig = {
  apiKey: "AIzaSyCzA7LNfquAeoedS2UoxITJZuHV-leeiNY",
  authDomain: "vardaan-47fed.firebaseapp.com",
  projectId: "vardaan-47fed",
  storageBucket: "vardaan-47fed.firebasestorage.app",
  messagingSenderId: "898311938541",
  appId: "1:898311938541:web:3528716b1207d3256b47e4",
  measurementId: "G-L5HQ66DGBR"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app); 
export default app;