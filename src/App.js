import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserList } from "./components/UserList";
import { UserDetails } from "./components/UserDetails";
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
