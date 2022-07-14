import React, { useState } from 'react'
import Item from '../components/Item'
import { products } from '../utilities/products'

const ItemList = () => {

  const [listProds, setList] = useState([{title: "Loading", imgLink: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"}]);
  const listProm = (prodSet) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(setList(prodSet))
      }, 2000);
      setTimeout(() => {
        rej('ERROR WHILE LOADING!')
      }, 2500);
    })
  }

  listProm(products)
    .then()
    .catch(err => console.log(err))

  return (
    <>
      <h3 className="sectionTitle">Gallery</h3>
      <div className="ItemList">
        {
          listProds.map(prod =>
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