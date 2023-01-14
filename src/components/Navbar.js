import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../global/CartContext";

const Navbar = () => {
  const {qty} = useContext(CartContext);
  return (
    <nav>
      <ul className="left">
        <li>
       <Link to= "/">Ecom</Link>
        </li>
      </ul>
      <ul className="right">
        <li>
       <Link to= '/cart'>
            <span className="shopping-cart">
              <i className="fa-solid fa-cart-plus"></i>
            </span>
            <span className="cart-count">{qty}</span>
          </Link>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
