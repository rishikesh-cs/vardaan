import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // apiKey: "AIzaSyCzA7LNfquAeoedS2UoxITJZuHV-leeiNY",
  // authDomain: "vardaan-47fed.firebaseapp.com",
  // projectId: "vardaan-47fed",
  // storageBucket: "vardaan-47fed.firebasestorage.app",
  // messagingSenderId: "898311938541",
  // appId: "1:898311938541:web:3528716b1207d3256b47e4",
  // measurementId: "G-L5HQ66DGBR"
  apiKey: "AIzaSyCEUQLjFDPqa8O1OdQAKSadcIzHnJePlEo",
  authDomain: "vardaan-6fc1a.firebaseapp.com",
  projectId: "vardaan-6fc1a",
  storageBucket: "vardaan-6fc1a.firebasestorage.app",
  messagingSenderId: "938237187666",
  appId: "1:938237187666:web:726c16460ab1d34a5cf18b",
  measurementId: "G-F3VYN1T0J4"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;