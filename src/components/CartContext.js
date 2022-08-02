import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item, qty) => {
    let foundInCart = cartList.find(element => element.itemID === item.idItem)
    if (foundInCart === undefined) {
      setCartList([...cartList, {
        itemID: item.idItem,
        itemTitle: item.title,
        itemImg: item.imgLink,
        itemPrice: item.price,
        itemQty: qty
      }])
      alert(`We've added ${qty} item(s) to your cart`)
    } else {
      if (foundInCart.itemQty + qty > item.stock){
        foundInCart.itemQty = item.stock
        alert(`You've selected more items than we have in stock for this product.\nStock: ${item.stock}\nWe've added all of them to your cart`)
      } else {
        foundInCart.itemQty += qty
        alert(`We've added ${qty} item(s) to your cart`)
      }
    }
  }

  const deleteFromCart = (it) => {
    setCartList(cartList.filter(element => element.itemID !== it.itemID))
  }

  const emptyCart = () => {
    setCartList([])
  }

  return (
    <CartContext.Provider value={{ cartList, addToCart, deleteFromCart, emptyCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider