  import { auth, provider } from "./firebase";
  import { setPersistence, signOut, signInWithPopup, browserLocalPersistence } from "firebase/auth";
  
  export const loginWithGoogle = () => {
    return setPersistence(auth, browserLocalPersistence)
    .then(() => {
      return signInWithPopup(auth, provider);
    })
    .catch((error) =>{
      console.error("ログイン失敗",error);
      throw error;
    });
  };

  export const logout = () => {
    return signOut(auth)
    .then(() => {
      console.log("ログアウト成功");
    })
    .catch((error) => {
      console.error("ログアウト失敗", error);
      throw error;
    });
  };