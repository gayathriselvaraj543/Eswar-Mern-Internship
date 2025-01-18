//import logo from './logo.svg';

//import ChildComponent from './child1';
//import ParentComponent from './parent1';
/*
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Portfolio from './portfolio';
import './portfolio.css'
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Portfolio</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/languages">Languages Known</Link>
            </li>
            <li>
              <Link to="/certifications">Certifications</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Portfolio section="portfolio" />} />
          <Route path="/about" element={<Portfolio section="about" />} />
          <Route path="/languages" element={<Portfolio section="languages" />} />
          <Route path="/certifications" element={<Portfolio section="certifications" />} />
          <Route path="/contact" element={<Portfolio section="contact" />} />
        </Routes>
      </div>
    </Router>
  );
}
*/
/*
import React, { useState } from "react";
import ShoppingCart from './cart';
import ProductList from './product';

const App = () => {
  const [cartItems, setCartItems] = useState([]);


  const addToCart = (itemName) => {
    setCartItems((prevItems) => [...prevItems, itemName]); 
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ShoppingCart items={cartItems} />
      <ProductList addToCart={addToCart} />
    </div>
  );
};

export default App;
*/
/*
import React from 'react';
import Form from './form';

function App() {
    return (
        <div >
            <Form />
        </div>
    );
}
export default App;
*/
import React from "react";
import Portfolio from "./portfolio"

function App() {
  return (
    <div>
      <Portfolio />
    </div>
  );
}

export default App;

