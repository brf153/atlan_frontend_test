import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import MyAI from "./pages/MyAI";
import Chat from "./pages/Chat";


function App() {
  return (
<Router>
  <Routes>
    <Route path="/myai" element={<MyAI />} />
    <Route path="/chat" element={<Chat />} />
    <Route path="*" element={<Home />} />
  </Routes>
</Router>

  );
}

export default App;
