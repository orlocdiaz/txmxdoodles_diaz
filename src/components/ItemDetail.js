import React from 'react'
import Item from '../components/Item'

const ItemDetail = ({ descProps }) => {
  return (
    <>
      <h3 className="sectionTitle">Description</h3>
      <div className="ItemDetail">
        {
          descProps.idItem
            ?
            <Item
              key={descProps.idItem}
              idItem={descProps.idItem}
              imgLink={descProps.imgLink}
              title={descProps.title}
              description={descProps.description}
              artist={descProps.artist}
              price={descProps.price}
              stock={descProps.stock}
            />
            :
            <div>
            <strong>Loading...</strong>
            </div>
        }
      </div>
    </>
  )
}

export default ItemDetail