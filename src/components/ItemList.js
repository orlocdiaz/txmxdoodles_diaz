import React from 'react'
import Item from '../components/Item'

const ItemList = ({ listProps }) => {
  return (
    <>
      <h3 className="sectionTitle">Gallery</h3>
      <div className="ItemList">
        {
          listProps.length > 0
          ? listProps.map(prod =>
            <Item
              key={prod.idItem}
              imgLink={prod.imgLink}
              title={prod.title}
            />
          )
          : <strong>Loading...</strong>
        }
      </div>
    </>
  )
}

export default ItemList