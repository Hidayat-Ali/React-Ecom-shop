import React, { useContext } from "react";
import { CartContext } from "../global/CartContext";

const Cart = () => {
  const { ShoppingCart, TotalPrice, qty, dispatch } = useContext(CartContext);

  return (
    <div className="container ">
      <div className="cart_details ">
        {ShoppingCart.length > 0 ? (
          <div className="row ">
            <p className="multicolortext text-center h5">Your Cart is here...</p>
            {ShoppingCart.map((cart) => (
              <div className="cart card col-md-4 text-center" key={cart.id} >
                <div className="card-image  ">
                  <img
                    src={cart.image}
                    alt="image is here"
                    className="img-fluid"
                  />
                </div>
                <div className="card-body">
                  <div className="card-title">{cart.name} </div>
                  <div className="text-muted product-qty">{cart.qty} </div>
                  <span>
                    <i class="fas fa-plus-circle    "></i>
                  </span>
                  <span>
                    <i class="fas fa-minus-circle    "></i>
                  </span>
                  <div className="text-muted product-price">50000 </div>
                  <span>
                    <i class="fas fa-trash    "></i>
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="multicolortext text-center ">Sorry your cart is currently empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
