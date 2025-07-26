  import { auth, provider } from "./firebase";
  import { signInWithRedirect, signOut, signInWithPopup } from "firebase/auth";

  const isMobile = () => {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  };
  
  export const loginWithGoogle = () => {
  if (isMobile()) {
    return signInWithRedirect(auth, provider);
  } else {
    return signInWithPopup(auth, provider)
      .then((result) => {
        console.log("ポップアップログイン成功:", result.user);
      })
      .catch((error) => {
        console.error("ポップアップログイン失敗:", error);
      });
  }
};

  
  // export const loginWithGoogle = () => {
  //   return setPersistence(auth, browserLocalPersistence)
  //   .then(() => {
  //     return signInWithPopup(auth, provider);
  //   })
  //   .catch((error) =>{
  //     console.error("ログイン失敗",error);
  //     throw error;
  //   });
  // };

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