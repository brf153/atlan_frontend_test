import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import MyAI from "./pages/MyAI";
import Chat from "./pages/Chat";
import Favourite from "./pages/Favourite";


function App() {
  return (
<Router>
  <Routes>
    <Route path="/myai" element={<MyAI />} />
    <Route path="/chat" element={<Chat />} />
    <Route path="/favourite" element={<Favourite />} />
    <Route path="*" element={<Home />} />
  </Routes>
</Router>

  );
}

export default App;
