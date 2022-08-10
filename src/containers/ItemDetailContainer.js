import React, { useEffect, useState } from 'react'
import ItemDetail from '../components/ItemDetail'
import { useParams } from 'react-router-dom'
import { firestoreFetchItem } from '../utilities/firestoreFetch';
/* import fetchProducts from '../utilities/fetchProducts'
const { products } = require('../utilities/products') */

const ItemDetailContainer = () => {
  const [details, setDesc] = useState([]);
  const { idDetail } = useParams();

  useEffect(() => {
    /*fetchProducts(1000, products.find(item => item.idItem === parseInt(idDetail)))
        .then(res => setDesc(res))
        .catch(err => console.log(err)) */

    firestoreFetchItem(idDetail)
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