// src/components/ContactForm.jsx
import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export const ContactForm = () => {
  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const [contactSent, setContactSent] = useState(false);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contacts"), {
        ...contact,
        createdAt: new Date(),
      });
      alert("送信完了！");
      setContact({ name: "", email: "", message: "" });
      setContactSent(true);
    } catch (error) {
      alert("送信エラー：" + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>名前</label>
      <input type="text" name="name" value={contact.name} onChange={handleChange} required />

      <label>メールアドレス</label>
      <input type="email" name="email" value={contact.email} onChange={handleChange} required />

      <label>メッセージ</label>
      <textarea name="message" value={contact.message} onChange={handleChange} required />

      <button type="submit">送信</button>
      {contactSent && <p>送信が完了しました！</p>}
    </form>
  );
};

export default ContactForm;
