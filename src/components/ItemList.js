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
                idItem={prod.idItem}
              />
            )
            :
            <div className='carga'>
              <img src="https://tradinglatam.com/wp-content/uploads/2019/04/loading-gif-png-4.gif" alt="gifCarga"/>
            </div>
        }
      </div>
    </>
  )
}

export default ItemList