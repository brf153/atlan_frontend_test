import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import MyAI from "./pages/MyAI";
import Chat from "./pages/Chat";


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myai" element={<MyAI />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
    </Router>
  );
}

export default App;
