import React, { createContext, useState } from "react";
import dslr from "../assets/dslr.jpg";
import headphones from "../assets/headphones.jpg";
import iphone from "../assets/iphone.jpg";
import perfumes from "../assets/perfumes.jpg";
import rings from "../assets/rings.jpg";
import shoes from "../assets/shoes.jpg";
export const ProductsContext = createContext();

const ProductContextsProvider = (props) => {
  const [products] = useState([
    { id: 1, name: "DSLR", price: 35000, image: dslr, status: "hot" },
    { id: 2, name: "Headphones", price: 350, image: headphones, status: "new" },
    { id: 3, name: "Iphone", price: 35000, image: iphone, status: "hot" },
    { id: 4, name: "perfumes", price: 350, image: perfumes, status: "new" },
    { id: 5, name: "rings", price: 3500, image: rings, status: "new" },
    { id: 6, name: "shoes", price: 350, image: shoes, status: "hot" },
  ]);
  return (
    <ProductsContext.Provider value={{ products: [...products] }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductContextsProvider;
