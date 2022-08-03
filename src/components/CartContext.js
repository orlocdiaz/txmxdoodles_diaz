import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [totalItems, setTotalItems] = useState(0)
  const [totalPrice, setTotalPrice] = useState (0)

  const addToCart = (item, qty) => {
    let foundInCart = cartList.find(element => element.itemID === item.idItem)

    if (foundInCart === undefined) {
      setCartList([...cartList, {
        itemID: item.idItem,
        itemTitle: item.title,
        itemImg: item.imgLink,
        itemPrice: item.price,
        itemQty: qty,
        itemSubTotal: item.price * qty
      }])
      alert(`We've added ${qty} item(s) to your cart`)
      setTotalItems(totalItems + qty)
      setTotalPrice(totalPrice + (item.price * qty))
    } else if (foundInCart.itemQty + qty > item.stock) {
      foundInCart.itemQty = item.stock
      foundInCart.itemSubTotal = foundInCart.itemPrice * item.stock
      alert(`You've selected more items than we have in stock for this product.\nStock: ${item.stock}\nWe've added all of them to your cart`)
      setTotalItems(cartList.map(item => (item.itemQty)).reduce((prev, curr) => prev + curr, 0));
      setTotalPrice(cartList.map(item => (item.itemSubTotal)).reduce((prev, curr) => prev + curr, 0));
    } else {
      foundInCart.itemQty += qty
      foundInCart.itemSubTotal = foundInCart.itemPrice * (foundInCart.itemQty + qty)
      alert(`We've added ${qty} item(s) to your cart`)
      setTotalItems(cartList.map(item => (item.itemQty)).reduce((prev, curr) => prev + curr, 0));
      setTotalPrice(cartList.map(item => (item.itemSubTotal)).reduce((prev, curr) => prev + curr, 0));
    }
  }

  const deleteFromCart = (it) => {
    setCartList(cartList.filter(element => element.itemID !== it.itemID))
    setTotalItems(cartList.map(item => (item.itemQty)).reduce((prev, curr) => prev + curr, 0) - it.itemQty);
    setTotalPrice(cartList.map(item => (item.itemSubTotal)).reduce((prev, curr) => prev + curr, 0) - it.itemSubTotal);

  }

  const emptyCart = () => {
    setCartList([])
    setTotalItems(0)
    setTotalPrice(0)
  }

  return (
    <CartContext.Provider value={{ cartList, totalItems, totalPrice, addToCart, deleteFromCart, emptyCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider