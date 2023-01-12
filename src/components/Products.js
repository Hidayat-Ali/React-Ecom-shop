import React from "react";
import { useContext } from "react";
import { CartContext } from "../global/CartContext";
import { ProductsContext } from "../global/ProductContextsProvider";
import Banner from "./Banner";

const Products = () => {
  const { products } = useContext(ProductsContext);
  const { dispatch } = useContext(CartContext);

  return (
    <div className="container ">
      <Banner />
      <div className="products row  ">
        {products.map((product) => (
          <div
            className="product card col-md-4 shadow-large py-5 mt-5 "
            key={product.id}
          >
            <div className="cover">
              <div className="product-image  mx-5">
                <img src={product.image} alt="not found" />
              </div>
              <div className="card-body  text-center">
                <p className="h2 "> {product.name} </p>
                <span className="text-muted"> $ {product.price}</span>
                <div className="cart mt-5">
                  <button
                    className="btn btn-lg add_to_cart"
                    onClick={() =>
                      dispatch({
                        type: "Add_to_Cart",
                        id: product.id,
                        product: product,
                      })
                    }
                  >
                    Add to cart
                  </button>
                </div>
              </div>

              {product.status === "hot" ? (
                <div className="hot">{product.status}</div>
              ) : (
                <div className="new">{product.status}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
