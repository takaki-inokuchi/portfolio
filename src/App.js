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

  return (
    <HashRouter basename="/portfolio">
      <Header />
      <Routes>
        <Route path="/login" element={<Login user={user} />} />
        <Route
          path="/" element={user ? <Home user={user} /> : <Navigate to="/login" />} />
      </Routes>
    </HashRouter>
  );
}
export default App;