import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [cartItemQty, setCartItemQty] = useState(0);

  const addToCart = (item, qty) => {
    cartList.find(element => element.idItem === item.idItem) ? 
      console.log("Ya estaba en cart") : 
      setCartList([...cartList, item]);

    cartItemQty+qty > item.stock ? 
      setCartItemQty(item.stock) :
      setCartItemQty(cartItemQty + qty)
      
    cartItemQty+qty > item.stock ? 
      alert (`We currently only have ${item.stock} items in stock for this product.\nWe've added all of them to your cart`) :
      alert (`We've added ${qty} item(s) to your cart`)
  }

  const deleteFromCart = (it) => {
    setCartList(cartList.filter(element => element.idItem !== it.idItem))
    console.log(cartList)
    console.log("se borro " + it.idItem);
  }

  return (
    <CartContext.Provider value={ {cartList, cartItemQty, addToCart, deleteFromCart} }>
      { children }
    </CartContext.Provider>
  )
}

export default CartContextProvider