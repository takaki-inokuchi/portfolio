import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";//認証モジュール
import { onAuthStateChanged } from "firebase/auth";

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

const db = getFirestore(app);//firestoreのインスタンス作成

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const observeUserAuth = (callback) => {
  return onAuthStateChanged(auth, callback);
}

export { db, auth, provider };
export default app;