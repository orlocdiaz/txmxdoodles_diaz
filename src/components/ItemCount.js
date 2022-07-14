import React, { useState } from 'react'

const ItemCount = () => {
  const [addedCart, setCart] = useState(1);
  const addOne = () => {
    if (addedCart < 5) {
      setCart(addedCart + 1)
    }
  }
  const removeOne = () => {
    if (addedCart > 1) {
      setCart(addedCart - 1)
    }
  }
  return (
    <>
        <div className="modifyQuantity">
          <button onClick={removeOne} >-</button>
          {addedCart}
          <button onClick={addOne}>+</button>
        </div>
    </>
  )
}

export default ItemCount;