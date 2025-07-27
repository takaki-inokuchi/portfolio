import React, { useEffect, useState } from "react";
import './style/style.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from  "react-router-dom";
import { observeUserAuth } from "./firebase";
import Home from "./Home";
import Login from "./Login";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = observeUserAuth(setUser);
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={user ? <Home user={user} /> : <Navigate to="/login" />}
          />
      </Routes>
    </Router>
  );
}
export default App;