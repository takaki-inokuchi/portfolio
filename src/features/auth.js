  import { auth, provider } from "../firebase";
  import { signInWithRedirect, signOut, signInWithPopup, getRedirectResult, onAuthStateChanged } from "firebase/auth";

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

  export const observeUserAuth = (callback) => {
  // リダイレクト結果の確認
  getRedirectResult(auth)
    .then((result) => {
      if (result?.user) {
        console.log("リダイレクトログイン成功:", result.user);
        callback(result.user);
      }
    })
    .catch((error) => {
      console.error("リダイレクトエラー:", error);
    });

  // ログイン状態の監視
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      console.log("現在のログイン状態:", currentUser);
      callback(currentUser);
    } else {
      console.log("ログアウト状態");
      callback(null);
    }
  });

  return unsubscribe;
};