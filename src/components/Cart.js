import React, { useContext } from 'react'
import { CartContext } from './CartContext'

const Cart = () => {
  const cartItems = useContext(CartContext)
  const cartItemsQty = useContext(CartContext)
  console.log(cartItems.cartList);
  console.log(cartItemsQty.cartItemQty);

  const handleDelete = (it) => {
    cartItems.deleteFromCart(it)
  }

  return (
    <>
      <div>
        {
          cartItems.cartList.length > 0 ? cartItems.cartList.map(item => (
            <div className="cartList" key={item.idItem}>
              <img src={item.imgLink} width="280" height="300" alt="cartItem" />
              <h5>{item.title}</h5>
              <strong>Price:</strong>
              <p>{item.price}</p>
              <strong>Selected Items:</strong>
              <p>{cartItemsQty.cartItemQty}</p>
              <div className="deleteButton">
                <button className="btn btn-danger" onClick={() => handleDelete(item)}>Remove from Cart</button>
              </div>
            </div>
          ))
            :
            <>
              <div>Empty Cart</div>
            </>
        }
      </div>
    </>
  )
}

export default Cart