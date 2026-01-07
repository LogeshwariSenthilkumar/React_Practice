import React from 'react'
import { useState } from 'react'
import ProductList from './ProductList'

const Shop = () => {
    let [products,setProducts]=useState({
        name:"Samsung",
        des:"8GB RAM",
        price:10000
    })
  return (
    <div>
      <ProductList products={products}/>
    </div>
  )
}

export default Shop
