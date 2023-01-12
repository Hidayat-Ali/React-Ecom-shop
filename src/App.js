import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Banner from "./components/Banner";
import ProductContextsProvider from "./global/ProductContextsProvider";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Notfound from "./components/Notfound";
import CartContextProvider from "./global/CartContext";

const App = () => {
  return (
    <div>
      <ProductContextsProvider>
        <CartContextProvider>
          <Router>
            <Navbar />

            <Routes>
              <Route exact path="/" element={<Products />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route path="*" element={<Notfound />} />
            </Routes>
          </Router>
        </CartContextProvider>
      </ProductContextsProvider>
    </div>
  );
};

export default App;
