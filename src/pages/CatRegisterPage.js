import React from 'react'
import { CatResister } from "..features/catRegister";

export const CatResisterPage = ({ user }) => {
  return (
    <div className="page-container">
      <h1>猫の登録をしよう</h1>
      <CatResister user={user} />
    </div>
  );
};

export default CatResisterPage;