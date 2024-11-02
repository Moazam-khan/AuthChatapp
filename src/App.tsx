import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import "@/styles/App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppLayout from "@/components/AppLayout";
import { auth } from "./pages/firebase";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import { User } from "firebase/auth"; // Import Firebase User type if using Firebase Authentication

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); // Set the current user or null
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  return (
    <Router>
      <AppLayout>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              {/* If user is logged in, redirect to Profile; otherwise, go to Login */}
              <Route path="/" element={user ? <Navigate to="/profile" /> : <Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
            {/* Toast notifications */}
            <ToastContainer />
          </div>
        </div>
      </AppLayout>
    </Router>
  );
}

export default App;
