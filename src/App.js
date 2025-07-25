import React, { useEffect,useState } from "react";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import './style/style.css';
import {loginWithGoogle ,logout} from "./auth";
import { getRedirectResult, onAuthStateChanged, setPersistence, browserLocalPersistence} from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [catName, setCatName] = useState('');
  const [contact, setContact] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [contactSent, setContactSent] = useState(false);
  const [user, setUser] = useState(null);

  const handleCatSubmit = async (e) => {
    e.preventDefault();//ページの動きを止めながらデータを送信する関数

    if(!catName.trim()){
      alert("猫の名前を入力して下さい。");
      return;
    }

    try {//addDocはfirestoreに新しいデータを追加する関数
      await addDoc(collection(db, "cats"), {//dbのcatsコレクションを指定→なくてもこれで作成される
        name: catName,//nameという名前で猫名を登録　→　表示は　name : モネ
        createdAt: new Date(),//現在の日時をcreatedAt
        userId: user.uid,//ログインしている人だけが持つ「ユーザーID」で、Firestoreのデータと結びつけるために使う
      });
      alert("猫の情報を登録しました！");
      setCatName('');//入力フォームを空にする
      setContactSent(true);
    } catch (error) {
      alert("登録中にエラーが発生しました：" + error);
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await addDoc(collection(db, "contacts"),{
        name: contact.name,
        email: contact.email,
        message:contact.message,
        createdAt:new Date(),
      });
      alert("送信完了！");
      setContact({
        name: '',
        email: '',
        message: '',
      });
      setContactSent(true);
    } catch (error){
      console.error("送信エラー：",error);
    }
    };

  useEffect(() => {
    getRedirectResult(auth)
    .then((result) => {
      if(result?.user){
        console.log("リダイレクトログイン成功：",result.user);
        setUser(result.user);
      }else{
        console.log("リダイレクト結果なし(null)");
      }
    })
    .catch((error) => {
      console.error("リダイレクトエラー", error);
    });

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if(currentUser){
        console.log("現在のログイン状態:",currentUser);
        setUser(currentUser);
      } else{
        console.log("ログアウト状態");
        setUser(null);
      }
    });
    return () => unsubscribe();
  },[]);

  const handleContactChange = (e) => {//処理が行われたとき
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      {!user ?(<button onClick={loginWithGoogle}>Googleログイン</button>
      ):(
        <div>
          <p>ようこそ、{user.displayName}さん！</p>
          <img src="img/S__5234697.jpg" alt="猫写真" width="100" />
          <br />
          <button onClick = {logout}>ログアウト</button>
        </div>
      )}
      <h1>猫登録アプリ</h1>
      <p>猫との大切な時間をメモリに残そう！</p>
      <p>まずは猫の情報を登録してみよう</p>

      <form onSubmit={handleCatSubmit}>
        <label htmlFor="cat-name">猫の名前</label>
        <input
          type="text"
          id="cat-name"
          value={catName}
          onChange={(e) => setCatName(e.target.value)}//入力欄に何か実行されたら発動するイベント
          required//必ず入力して下さいという意味
        />
        <button type="submit">登録する</button>
      </form>

      <form onSubmit={handleContactSubmit}>
        <label>名前</label>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={handleContactChange}
          required
        />
        <label>メールアドレス：</label>
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={handleContactChange}
          required
        />
        <label>メッセージ</label>
        <textarea
          name="message"
          value={contact.message}
          onChange={handleContactChange}
          required
        ></textarea>

        <button type="submit">送信</button>
        {contactSent && <p>送信が完了しました！</p>}
      </form>
    </div>
  );
}

export default App;