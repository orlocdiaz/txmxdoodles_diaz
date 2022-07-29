import React, { useContext }  from 'react'
import Item from '../components/Item'
import ItemCount from './ItemCount'
import { CartContext } from './CartContext';


const ItemDetail = ({ descProps }) => {
  const cartItems = useContext(CartContext)

  const handleClick = (itemQuantity, setItemQuantity) => {
    cartItems.addToCart(descProps, itemQuantity)
    setItemQuantity(true)
  }

  return (
    <>
      <h3 className="sectionTitle">Description</h3>
      <div className="ItemDetail">
        {
          descProps.idItem
            ?
            <>
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
              <ItemCount
                stockCount={descProps.stock}
                handleClick={handleClick}
              />
            </>
            :
            <div className='carga'>
              <img src="https://tradinglatam.com/wp-content/uploads/2019/04/loading-gif-png-4.gif" alt="gifCarga"/>
            </div>
        }
      </div>
    </>
  )
}

export default ItemDetail