  import React, { useState } from "react";
  import { logout } from "./auth";
  import { db } from "./firebase";
  import { collection, addDoc } from "firebase/firestore";
  import './style/style.css';

  export const Home = ({ user }) => {
    const [catName, setCatName] = useState('');
    const [contact, setContact] = useState({ name: '', email: '', message: '' });
    const [contactSent, setContactSent] = useState(false);

    const handleCatSubmit = async (e) => {
      e.preventDefault();
      if (!catName.trim()) {
        alert("猫の名前を入力してください");
        return;
      }
      try {
        await addDoc(collection(db, "cats"), {
          name: catName,
          createdAt: new Date(),
          userId: user.uid,
        });
        alert("猫の情報を登録しました！");
        setCatName('');
      } catch (error) {
        alert("登録中にエラーが発生しました：" + error.message);
      }
    };

    const handleContactChange = (e) => {
      setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleContactSubmit = async (e) => {
      e.preventDefault();
      try {
        await addDoc(collection(db, "contacts"), {
          ...contact,
          createdAt: new Date(),
        });
        alert("送信完了！");
        setContact({ name: '', email: '', message: '' });
        setContactSent(true);
      } catch (error) {
        alert("送信エラー：" + error.message);
      }
    };

    return (
      <div className="home-container">
        <p>ようこそ、{user.displayName}さん！</p>
        <img src="img/S__5234697.jpg" alt="猫写真" width="100" />
        <br />
        <button onClick={logout}>ログアウト</button>

        <h1>猫登録アプリ</h1>

        <form onSubmit={handleCatSubmit}>
          <label htmlFor="cat-name">猫の名前</label>
          <input
            type="text"
            id="cat-name"
            value={catName}
            onChange={(e) => setCatName(e.target.value)}
            required
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
          />

          <button type="submit">送信</button>
          {contactSent && <p>送信が完了しました！</p>}
        </form>
      </div>
    );
  };

  export default Home;
