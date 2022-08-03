import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../images/cart.png'
import { CartContext } from './CartContext'

const CartWidget = () => {
  const cartItemsCount = useContext(CartContext)

  return (
    <Link to='/cart'><div className='cartWidgetContainer'>
      <img src={CartIcon} width='40' heigth='40' alt="cart" />
      {
        cartItemsCount.totalItems > 0 &&
        <p className="bg-primary">{cartItemsCount.totalItems}</p>
      }
      </div></Link>
  )
}

export default CartWidget