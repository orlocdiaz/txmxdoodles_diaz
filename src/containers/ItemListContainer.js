import React, { useEffect, useState } from 'react';
import ItemList from '../components/ItemList';
import { useParams } from 'react-router-dom';
import { firestoreFetchGallery } from '../utilities/firestoreFetch';
/* import fetchProducts from '../utilities/fetchProducts'
const { products } = require('../utilities/products') */


const ItemListContainer = () => {
  const [listProds, setList] = useState([]);
  const { idList } = useParams();

  useEffect(() => {
    /*if (idList === undefined) {
        fetchProducts(1000, products)
          .then(res => setList(res))
          .catch(err => console.log(err))
      } else {
        fetchProducts(1000, products.filter(item => item.categoryId
          .find(catId => { return catId === parseInt(idList) }) === parseInt(idList)))
            .then(res => setList(res))
            .catch(err => console.log(err))
        } */

    firestoreFetchGallery(idList)
      .then(res => setList(res))
      .catch(err => console.log(err))
  }, [idList])
  return (
    <>
      <ItemList listProps={listProds} />
    </>
  )
}

export default ItemListContainer