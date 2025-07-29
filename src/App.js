import React, { useEffect, useState } from "react";
import './style/style.css';
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import { observeUserAuth } from "./auth";
import Home from "./Home";
import Login from "./Login";
import Header from "./Header";

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
        <Route
          path="/" element={user ? <Home user={user} /> : <Navigate to="/login" />} />
      </Routes>
      <Route path="/register.js" element={<Navigate to="/register" />} />???????????????????????????????????????????修正中
    </HashRouter>
  );
}
export default App;