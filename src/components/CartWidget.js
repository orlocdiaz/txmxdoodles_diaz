import React from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../images/cart.png'

const CartWidget = () => {
  return (
    <div>
      <Link to='/cart'><img src={CartIcon} width='40' heigth='40' alt="cart"/></Link>
    </div>
  )
}

export default CartWidget