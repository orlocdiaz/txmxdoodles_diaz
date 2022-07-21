import React from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

const Item = ({idItem, imgLink, title, stock, price, description, artist}) => {
  return (
    <>
      <div className="item">
        {/* <Link to={`/item/${idItem}`} style={{textDecoration:'none', textAlign:'center'}}> */}
          <img src={imgLink} width="280" height="300" alt="GalleryItem" />
          <h5>{title}</h5>
        {/* </Link> */}
        <strong>About this:</strong>
        <p>{description}</p>
        <strong>Artist:</strong>
        <p>{artist}</p>
        <strong>Price:</strong>
        <p>{price}</p>
        <strong>Products in stock:</strong>
        <p>{stock}</p>

        <div className="btnContainer">
          <button className="btn btn-primary">Add to Cart</button>
        </div>
        <ItemCount />
      </div>
    </>
  )
}

export default Item