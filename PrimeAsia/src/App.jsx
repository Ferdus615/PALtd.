import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Blogs from "./Pages/Blogs/Blogs";
import News from "./Pages/News/News";
import Products from "./Pages/Products/Products";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/blogs" element={<Blogs />} />

        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
  );
}

export default App;
