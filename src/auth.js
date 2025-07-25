  import { auth, provider } from "./firebase";
  import { signInWithRedirect, signOut, setPersistence, browserLocalPersistence} from "firebase/auth";
  
  export const loginWithGoogle = () => {

    return setPersistence(auth, browserLocalPersistence)
    .then(() => {
      return signInWithRedirect(auth,provider);
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