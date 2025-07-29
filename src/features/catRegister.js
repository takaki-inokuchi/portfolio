import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const CatRegister = ({ user }) => {
  const [catName, setCatName] = useState("");

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
      setCatName("");
    } catch (error) {
      alert("登録エラー：" + error.message);
    }
  };

  return (
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
  );
};

export default CatRegister;
