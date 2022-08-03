import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemCount = ({ stockCount, handleClick }) => {
  const [quantityPerItem, setQuantityPerItem] = useState(0);
  const addOne = () => {
    if (quantityPerItem < stockCount) {
      setQuantityPerItem(quantityPerItem + 1)
    }
  }
  const removeOne = () => {
    if (quantityPerItem > 0) {
      setQuantityPerItem(quantityPerItem - 1)
    }
  }

  return (
    <>
      {
        quantityPerItem === true ?
          <div className='buttonsCheckout'>
            <Link to="/"><button className="btn btn-dark">Gallery</button></Link>
            <Link to="/Cart"><button className="btn btn-primary">Checkout</button></Link>
          </div>
          :
          <div className='buttonsCart'>
            <div className="btnContainer">
              {quantityPerItem <= 0 ?
                <button className="btn btn-dark" disabled>Add to Cart</button>
                :
                <button className="btn btn-primary" onClick={() => handleClick(quantityPerItem, setQuantityPerItem)}>Add to Cart</button>
              }
            </div>
            <div className="modifyQuantity">
              {quantityPerItem <= 0 ?
                <button className="btn btn-danger" disabled>-</button> :
                <button className="btn btn-danger" onClick={removeOne} >-</button>
              }
              {quantityPerItem}
              {quantityPerItem >= stockCount ?
                <button className="btn btn-success" disabled>+</button>:
                <button className="btn btn-success" onClick={addOne}>+</button>
              }
            </div>
          </div>
      }
    </>
  )
}

export default ItemCount;