import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Blogs from "./Pages/Blogs/Blogs";
import News from "./Pages/News/News";
import Products from "./Pages/Products/Products";
import Home from "./Pages/Home";
import FullArticle from "./Components/FullArticle/FullArticle";

const GoToAbout = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const navbarHeight =
          document.querySelector(".navlink")?.offsetHeight || 0;

        // Calculate the position considering the navbar height offset
        const elementPosition =
          targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <Navbar />
      <GoToAbout />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/blogs" element={<Blogs />} />

        <Route path="/news" element={<News />} />

        <Route path="/article" element={<FullArticle />} />
      </Routes>
    </Router>
  );
}

export default App;
