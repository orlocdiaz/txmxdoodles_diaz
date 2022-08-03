import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
  const cartItems = useContext(CartContext)
  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

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
              <button className='btn btn-success'>Pay Now</button>
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default Cart