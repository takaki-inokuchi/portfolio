// src/pages/Home.jsx
import React from "react";
import { logout } from "../auth";

export const Home = ({ user }) => {
  return (
    <div className="home-container">
      <p>ようこそ、{user.displayName}さん！</p>
      <img src="img/S__5234697.jpg" alt="猫写真" width="100" />
      <br />
      <button onClick={logout}>ログアウト</button>
    </div>
  );
};

export default Home;
