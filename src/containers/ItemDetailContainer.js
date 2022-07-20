import React, { useEffect, useState } from 'react'
import ItemDetail from '../components/ItemDetail'
import fetchProducts from '../utilities/fetchProducts'
const { products } = require ('../utilities/products')


const ItemDetailContainer = () => {
  const [details, setDesc] = useState([]);

  useEffect(() => {
    fetchProducts(2000, products[0])
      .then(res => setDesc(res))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <ItemDetail descProps={details} />
    </>
  )
}

export default ItemDetailContainer