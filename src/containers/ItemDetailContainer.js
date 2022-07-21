import React, { useEffect, useState } from 'react'
import ItemDetail from '../components/ItemDetail'
import fetchProducts from '../utilities/fetchProducts'
import { useParams } from 'react-router-dom'
const { products } = require('../utilities/products')


const ItemDetailContainer = () => {
  const [details, setDesc] = useState([]);
  const { idDetail } = useParams();

  useEffect(() => {
      fetchProducts(2000, products.find(item => item.idItem === parseInt(idDetail)))
        .then(res => setDesc(res))
        .catch(err => console.log(err))
  }, [idDetail])
  return (
    <>
      <ItemDetail descProps={details} />
    </>
  )
}

export default ItemDetailContainer