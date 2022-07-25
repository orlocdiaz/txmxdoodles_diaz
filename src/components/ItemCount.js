import React, { useState } from 'react'
import AddToCart from './AddToCart';
import { Link } from 'react-router-dom'

const ItemCount = ({ stockCount }) => {
  const [addedCart, setCart] = useState(0);
  const addOne = () => {
    if (addedCart < stockCount) {
      setCart(addedCart + 1)
    }
  }
  const removeOne = () => {
    if (addedCart > 0) {
      setCart(addedCart - 1)
    }
  }

  const handleClick = () => {
    addedCart > 1 ?
      alert(`${addedCart} productos se han añadido al carrito.`) :
      alert(`${addedCart} producto se ha añadido al carrito.`)
    setCart(true)
  }
  return (
    <>
      {
        addedCart === true ?
          <div className='buttonsCart'>
            <Link to="/Cart"><button className="btn btn-primary">Checkout</button></Link>
            <Link to="/"><button className="btn btn-dark">Gallery</button></Link>
          </div>
          :
          <div className='buttonsCart'>
            <AddToCart addedCart={addedCart} handleClick={handleClick} />
            <div className="modifyQuantity">
              <button className="btn btn-danger" onClick={removeOne} >-</button>
              {addedCart}
              <button className="btn btn-success" onClick={addOne}>+</button>
            </div>
          </div>
      }
    </>
  )
}

export default ItemCount;