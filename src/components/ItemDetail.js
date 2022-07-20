import React from 'react'
import Item from '../components/Item'

const ItemDetail = ({ descProps }) => {
  return (
    <>
      <h3 className="sectionTitle">Description</h3>
      <div className="ItemDetail">
        {
          descProps.id
            ?
            <Item
              key={descProps.id}
              imgLink={descProps.imgLink}
              title={descProps.title}
              description={descProps.description}
              artist={descProps.artist}
              price={descProps.price}
              stock={descProps.stock}
            />
            :
            <div>
            <strong>Cargando...</strong>
            </div>
        }
      </div>
    </>
  )
}

export default ItemDetail