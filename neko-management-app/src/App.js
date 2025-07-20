
import React,{useState} from "react";
import{db} from "./firebase";
import {collection,addDoc} from "firebase/firestore";

function App(){
  const [catName, setCatName] = useState('');
  const [contact, setContact] = useState({
    name:'',
    email:'',
    message:'',
  });
  const [contactSent, setContactSent] = useState(false);

const handleCatSubmit = async (e) => {
  e.preventDefault();//ページの動きを止めながらデータを送信する関数
  try{
    await addDoc(collection(db, "cats"),{
      name: catName,
      createdAt: new Date(),
    });
    alert("猫の情報を登録しました！");
    setCatName('');//入力フォームを空にする
  } catch(error){
    alert("登録中にエラーが発生しました：" + error);
  }
};

const handleContactChange = (e) =>{//処理が行われたとき
  setContact({...contact,[e.target.name]: e.target.value});
};

const handleContactSubmit = (e) =>{
  e.preventDefault();

  setContactSent(true);
};

return(
  <div>
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

    <form
      id="contact-form"
      action="https://formspree.io/f/mzzvdeee"
      method="POST"
      onSubmit={handleContactSubmit}
    >
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
// const form = document.querySelector("#cat-form");//cat-formの情報をformへ
// const nameInput = document.querySelector("#cat-name");

// form.addEventListener("submit", async(e) =>{
//   e.preventDefault();

//   const name = nameInput.value;

//   try{
//     await addDoc(collection(db, "cats"),{
//       name: name,
//       createdAt: new Date(),
//     });

//     alert("猫の情報を登録しました！");
//     form.reset();
//   } catch(error){
//     alert("登録中にエラーが発生しました：" + error);
//   }
// });