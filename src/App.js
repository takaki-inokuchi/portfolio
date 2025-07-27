import React, { useEffect, useState } from "react";
import './style/style.css';
import { BrowserRouter , Route, Routes, Navigate } from  "react-router-dom";
import { observeUserAuth } from "./auth";
import Home from "./Home";
import Login from "./Login";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = observeUserAuth(setUser);
    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={user ? <Home user={user} /> : <Navigate to="/login" />}
          />
      </Routes>
    </BrowserRouter>
  );
}
export default App;