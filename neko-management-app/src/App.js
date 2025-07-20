import{db} from "./firebase";
import {collection,addDoc} from "firebase/firestore";
import "../styles/style.css";

const form = document.querySelector("#cat-form");//cat-formの情報をformへ
const nameInput = document.querySelector("#cat-name");

form.addEventListener("submit", async(e) =>{
  e.prebentDefault();

  const name = nameInput.value;

  try{
    await addDoc(collection(db, "cats"),{
      name: name,
      createdAt: new Date(),
    });

    alert("猫の情報を登録しました！");
    form.reset();
  } catch(error){
    alert("登録中にエラーが発生しました：" + error);
  }
});