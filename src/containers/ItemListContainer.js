import React, { useEffect, useState } from 'react'
import ItemList from '../components/ItemList'
import fetchProducts from '../utilities/fetchProducts'
const { products } = require ('../utilities/products')

const ItemListContainer = () => {
  const [listProds, setList] = useState([]);

  useEffect(() => {
    fetchProducts(2000, products)
      .then(res => setList(res))
      .catch(err => console.log(err))
  }, [])
  return (
    <>
      <ItemList listProps={listProds}/>
    </>
  )
}

export default ItemListContainer