import React from 'react'

const AddToCart = (props) => {


  return (
    <>
      <div className="btnContainer">
        {props.addedCart === 0 ?
          <button className="btn btn-dark" disabled>Add to Cart</button>
          :
          <button className="btn btn-primary" onClick={props.handleClick}>Add to Cart</button>
        }
      </div>
    </>
  )
}

export default AddToCart