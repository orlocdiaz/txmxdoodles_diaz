import React, { useState } from 'react'

const ItemListContainer = (props) => {
  const [addedCart, setCart] = useState(1);
  const addOne = () => {
    if (addedCart == 5) {
      setCart(addedCart + 0)
    } else { setCart(addedCart + 1) }
  }
  const removeOne = () => {
    if (addedCart == 1) {
      setCart(addedCart - 0)
    } else { setCart(addedCart - 1) }
  }
  return (
    <div className="gallery">
      <img src={props.imgLink} width="280" height="300" alt="Gallery Image" />
      <h5>{props.title}</h5>

      <div className="btnContainer">
        <a href="#" class="btn btn-primary">Add to Cart</a>
      </div>
      <div className="modifyQuantity">
        <button onClick={removeOne} >-</button>
        {addedCart}
        <button onClick={addOne}>+</button>
      </div>
    </div>
  )
}

export default ItemListContainer;