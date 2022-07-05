import React from 'react'
import ItemListContainer from '../components/ItemListContainer'
import txmx1 from '../images/txmx1.jpg'
import txmx2 from '../images/txmx2.jpg'
import txmx3 from '../images/txmx3.jpg'
import txmx4 from '../images/txmx4.jpg'
import txmx5 from '../images/txmx5.jpg'
import txmx6 from '../images/txmx6.jpg'
import txmx7 from '../images/txmx7.jpg'
import txmx8 from '../images/txmx8.jpg'
import txmx9 from '../images/txmx9.jpg'
import txmx10 from '../images/txmx10.jpg'
import txmx11 from '../images/txmx11.jpg'
import txmx12 from '../images/txmx12.jpg'

const GalleryContainer = () => {
  return (
    <>
    <h3 className="sectionTitle">Gallery</h3>
      <div className="galleryContainer">
        <ItemListContainer
          imgLink={txmx1}
          title="Super Bunny"
        />
        <ItemListContainer
          imgLink={txmx2}
          title="Tiana"
        />
        <ItemListContainer
          imgLink={txmx3}
          title="Music Rhinno"
        />
        <ItemListContainer
          imgLink={txmx4}
          title="Music Hippo"
        />
        <ItemListContainer
          imgLink={txmx5}
          title="Believe in Yourself"
        />
        <ItemListContainer
          imgLink={txmx6}
          title="Hiking Deer"
        />
        <ItemListContainer
          imgLink={txmx7}
          title="Bunny Picnic"
        />
        <ItemListContainer
          imgLink={txmx8}
          title="Vacation Dracula"
        />
        <ItemListContainer
          imgLink={txmx9}
          title="Riding a Pidgeon"
        />
        <ItemListContainer
          imgLink={txmx10}
          title="Flower Girl"
        />
        <ItemListContainer
          imgLink={txmx11}
          title="Grandma's Dog"
        />
        <ItemListContainer
          imgLink={txmx12}
          title="Glass Girl"
        />

      </div>
    </>
  )
}

export default GalleryContainer