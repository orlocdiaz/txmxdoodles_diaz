import React, { useContext } from 'react'
import { CartContext } from './CartContext'

const Cart = () => {
  const cartItems = useContext(CartContext)

  return (
    <>
      <div className ='container cartContainer'>
        {
          cartItems.cartList.length > 0 ? cartItems.cartList.map(item => (
            <div className="cartList" key={item.itemID}>
              <img src={item.itemImg} width="70" height="75" alt="cartItem" />
              <h5>{item.itemTitle}</h5>
              <strong>Selected Items: {item.itemQty}</strong>
              <strong>Price (EA): {item.itemPrice}</strong>
              <div className="deleteButton">
                <button className="btn btn-danger" onClick={() => cartItems.deleteFromCart(item)}>Remove</button>
              </div>
            </div>
          ))
            :
            <>
              <h4>Your Cart is Empty</h4>
            </>
        }
        {
          cartItems.cartList.length > 0 &&
            <div className=''>
              <button className="btn btn-danger" onClick={() => cartItems.emptyCart()}>Empty your Cart</button>
            </div>
        }
      </div>
    </>
  )
}

export default Cart