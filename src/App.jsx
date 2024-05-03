import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
