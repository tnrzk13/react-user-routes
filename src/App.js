import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Users, UserDetail } from "./Users";
import "./App.css";

function App() {
  const users = [
    { id: 1, name: "tony", email: "tony@email.com" },
    { id: 2, name: "kevin", email: "kevin@email.com" },
    { id: 3, name: "stockguard", email: "stockguard@email.com" },
  ];

  return (
    <Router>
      <div>
        <header>
          <Link to="/" className="header-link">
            Home
          </Link>
          <Link to="/users" className="header-link">
            Users
          </Link>
        </header>
        <Routes>
          <Route path="/users" element={<Users users={users} />} />
          <Route path="/users/:id" element={<UserDetail users={users} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

