import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import { Link } from 'react-router-dom'
import { serverTimestamp, doc, collection, setDoc, updateDoc, increment } from 'firebase/firestore'
import { db } from '../utilities/firebaseConfig'

const Cart = () => {
  const cartItems = useContext(CartContext)
  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  const createOrder = () => {

    let orderedItems = cartItems.cartList.map (item => ({
      id: item.itemID,
      title: item.itemTitle,
      price: item.itemPrice,
      qty: item.itemQty
    }))

    let order = {
      buyer: {
        email: "email@email.com",
        name: "Jose Pedro",
        phone: " 3332221234"
      },
      date: serverTimestamp(),
      items: orderedItems,
      total: formatter.format(cartItems.totalPrice * 1.22)
    }
    
    const setOrderFirestore = async () => {
      const newOrderRef = doc (collection(db, "orders"))
      await setDoc(newOrderRef, order)
      return newOrderRef
    }

    setOrderFirestore ()
    .catch(err => console.log(err))
    .then(res => alert(`Your order has been created.\nOrder ID:${res.id}`))

    cartItems.cartList.forEach(async (item) => {
      const itemRef = doc (db, "products", item.itemID)
      await updateDoc(itemRef, {
        stock: increment(-item.itemQty)
      })
    })

    cartItems.emptyCart()
  }

  return (
    <>
      <div className='container cartContainer'>
        {
          cartItems.cartList.length > 0 ?
            cartItems.cartList.map(item => (
              <div className="cartList" key={item.itemID}>
                <img src={item.itemImg} width="70" height="75" alt="cartItem" />
                <h5>{item.itemTitle}</h5>
                <strong>Selected Items: {item.itemQty}</strong>
                <strong>Price for Each: {formatter.format(item.itemPrice)}</strong>
                <strong>{formatter.format(item.itemSubTotal)}</strong>
                <div className="deleteButton">
                  <button className="btn btn-danger" onClick={() => cartItems.deleteFromCart(item)}>Remove</button>
                </div>
              </div>
            )) :
            <>
              <h4>Your Cart is Empty</h4>
              <Link to="/"><button className="btn btn-dark">Go to Gallery</button></Link>
            </>
        }
        {
          cartItems.cartList.length > 0 &&
          <div className="totalPrice">
            <strong>Subtotal: {formatter.format(cartItems.totalPrice)}</strong>
            <strong>Taxes: {formatter.format(cartItems.totalPrice * 0.22)}</strong>
            <h3>Total: {formatter.format(cartItems.totalPrice * 1.22)}</h3>
            <div>
              <button className="btn btn-danger" onClick={() => cartItems.emptyCart()}>Remove All</button>
              <button className='btn btn-success' onClick={createOrder}>Pay Now</button>
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default Cart