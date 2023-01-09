import './index.css';

import Home from "./routes/Home";
import About from "./routes/About";
import Product from './routes/Product';
import Contact from "./routes/Contact";

import { Route, Routes} from "react-router-dom";

import React from "react";



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;
