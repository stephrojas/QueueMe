// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// 🔥 Replace below with your own config:
const firebaseConfig = {
  apiKey: "AIzaSyCWPwmRFVYvcDYddUwcBcHErgGeRed35sw",
  authDomain: "queueme-a1f5e.firebaseapp.com",
  projectId: "queueme-a1f5e",
  storageBucket: "queueme-a1f5e.firebasestorage.app",
  messagingSenderId: "273361016051",
  appId: "1:273361016051:web:234c27fa58d05f46f61386"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
