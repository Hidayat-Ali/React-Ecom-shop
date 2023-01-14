import React, { useContext } from "react";
import StripeCheckout from "react-stripe-checkout";
import { CartContext } from "../global/CartContext";

const Cart = () => {
  const { ShoppingCart, TotalPrice, qty, dispatch } = useContext(CartContext);

  return (
    <div className="container  ">
      <div className="cart_details row ">
        {ShoppingCart?.length > 0 ? (
          <div className="col-md-8">
            <p className="multicolortext text-center h5">
              Your Cart is here...
            </p>
            {ShoppingCart.map((cart) => (
              <div className="cart card  text-center" key={cart.id}>
                <div className="card-image  ">
                  <img
                    src={cart.image}
                    alt="image is here"
                    className="img-fluid"
                  />
                </div>
                <div className="card-body cart-body">
                  <div className="card-title ">{cart.name} </div>
                  <div className="text-muted product-qty">{cart.qty} </div>
                  <span
                    onClick={() => dispatch({ type: "INC", id: cart.id, cart })}
                  >
                    <i className="fas fa-plus-circle "></i>
                  </span>
                  <span
                    onClick={() => dispatch({ type: "DEC", id: cart.id, cart })}
                  >
                    <i className="fas fa-minus-circle    "></i>
                  </span>
                  <div className="text-muted product-price">
                    {cart.price * cart.qty}.00
                  </div>
                  <span
                    onClick={() => dispatch({ type: "DELETE", id: cart.id })}
                  >
                    <i className="fas fa-trash "></i>
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="multicolortext text-center ">
            Sorry your cart is currently empty
          </p>
        )}
         {ShoppingCart?.length > 1 ? <div className="  col-md-4">  <div className="card">
          <div className="card-title text-center"> Summary</div>
    
          <div className="card-body text-center">
           
          <p> Total price :Rs {TotalPrice} </p>
          <p> Total quantity : {qty} </p>
          <StripeCheckout
           shippingAddress
           stripeKey="pk_test_51MQ6ZJSJ0olObknq3mCvtxXagpWXWhGotNwCDgdJ6PTvFrC6NCbXUsggQ4ubBPrSkIFpWMuwqtxaEc7fLgasdsVP00PEG562Fy"
           billingAddress
           amount={TotalPrice}
           name ="All products"
          />

        
          </div>
          </div></div> : <div></div>}

      </div>
     
    </div>
  );
};

export default Cart;
