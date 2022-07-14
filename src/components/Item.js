import React from 'react'
import ItemCount from './ItemCount'

const Item = (props) => {
  return (
    <>
      <div className="item">
        <img src={props.imgLink} width="280" height="300" alt="GalleryItem" />
        <h5>{props.title}</h5>

        <div className="btnContainer">
          <a href="#" class="btn btn-primary">Add to Cart</a>
        </div>
        <ItemCount />
      </div>
    </>
  )
}

export default Item