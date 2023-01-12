import React, { useReducer } from 'react'
import { createContext } from 'react'
import { CartReducer } from './CartReducer';

export const CartContext = createContext();
const CartContextProvider = (props) => {
   const [cart, dispatch] = useReducer(CartReducer,{ShoppingCart:[],TotalPrice:0,qty:0})
  return (
    <div>
      <CartContext.Provider value={{...cart , dispatch}}>
        {props.children}
      </CartContext.Provider>
    </div>
  )
}

export default CartContextProvider
