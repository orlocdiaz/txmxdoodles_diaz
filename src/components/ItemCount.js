import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemCount = ({ stockCount, handleClick }) => {
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
            <div className="btnContainer">
              {addedCart <= 0 ?
                <button className="btn btn-dark" disabled>Add to Cart</button>
                :
                <button className="btn btn-primary" onClick={() => handleClick(addedCart, setCart)}>Add to Cart</button>
              }
            </div>
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