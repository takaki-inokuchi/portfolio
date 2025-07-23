  import { auth, provider } from "./firebase";
  import { signInWithPopup, signOut } from "firebase/auth";
  
  export const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      console.log("ログイン成功", result.user);
    })
    .catch((error) => {
      console.error("ログイン失敗", error);
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