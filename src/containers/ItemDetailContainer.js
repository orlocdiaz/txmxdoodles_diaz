import React, { useEffect, useState } from 'react'
import ItemDetail from '../components/ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../utilities/firebaseConfig'
/* import fetchProducts from '../utilities/fetchProducts'
const { products } = require('../utilities/products') */

const ItemDetailContainer = () => {
  const [details, setDesc] = useState([]);
  const { idDetail } = useParams();

  useEffect(() => {
    /*       fetchProducts(1000, products.find(item => item.idItem === parseInt(idDetail)))
            .then(res => setDesc(res))
            .catch(err => console.log(err)) */

    const firestoreFetch = async () => {
      const docRef = doc(db, "products", idDetail);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setDesc({
          idItem: docSnap.id, 
          ...docSnap.data()
        });
      } else {
        console.log("No such document!");
      }
    }
    firestoreFetch()
    }, [idDetail])
    
  return (
    <>
      <ItemDetail descProps={details} />
    </>
  )
}

export default ItemDetailContainer