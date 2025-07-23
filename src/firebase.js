import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";//認証モジュール

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBFLG5RN_aM8V7Jf5NziCJiaPLB6AnR9s",
  authDomain: "neko-management-app.firebaseapp.com",
  projectId: "neko-management-app",
  storageBucket: "neko-management-app.firebasestorage.app",
  messagingSenderId: "91628694494",
  appId: "1:91628694494:web:94d92f2749727b0dac0b4f",
  measurementId: "G-ZSLH4F4DM9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);//firestoreのインスタンス作成

export { db };
export default app;

export const auth = getAuth();
export const provider = new GoogleAuthProvider();