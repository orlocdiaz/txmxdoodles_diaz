import React from 'react'
import ItemCount from './ItemCount'

const Item = (props) => {
  return (
    <>
      <div className="item">
        <img src={props.imgLink} width="280" height="300" alt="GalleryItem" />
        <h5>{props.title}</h5>
        <strong>About this:</strong>
        <p>{props.description}</p>
        <strong>Artist:</strong>
        <p>{props.artist}</p>
        <strong>Price:</strong>
        <p>{props.price}</p>
        <strong>Products in stock:</strong>
        <p>{props.stock}</p>


        <div className="btnContainer">
          <button class="btn btn-primary">Add to Cart</button>
        </div>
        <ItemCount />
      </div>
    </>
  )
}

export default Item