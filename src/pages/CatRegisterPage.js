import React from 'react'
import { CatRegister } from "../features/catRegister";

export const CatResisterPage = ({ user }) => {
  return (
    <div className="page-container">
      <h1>猫の登録をしよう</h1>
      <CatRegister user={user} />
    </div>
  );
};

export default CatResisterPage;