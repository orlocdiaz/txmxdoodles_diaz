import React from 'react'
import Item from '../components/Item'

const ItemList = ({ listProps }) => {
  return (
    <>
      <h3 className="sectionTitle">Gallery</h3>
      <div className="ItemList">
        {
          listProps.map(prod =>
            <Item
              key={prod.id}
              imgLink={prod.imgLink}
              title={prod.title}
            />
          )
        }
      </div>
    </>
  )
}

export default ItemList