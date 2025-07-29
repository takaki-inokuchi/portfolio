 import React, { useEffect, useState } from "react";
import './style/style.css';
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import { observeUserAuth } from "./features/auth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header";
import CatRegisterPage from "./pages/CatRegisterPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsubscribe = observeUserAuth(setUser);
    return () => unsubscribe();
  }, []);

  if (user === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login user={user} />} />
        <Route path="/" element={user ? <Home user={user} /> : <Navigate to="/login" />} />
        <Route path="/cat-register" element={user ? <CatRegisterPage user={user} /> : <Navigate to="/login" />} />
        <Route path="/contact" element={<ContactPage />} />
 <Route path="/register.js" element={<Navigate to="/register" />} />
      </Routes>
    </HashRouter>
  );
}

export default App;