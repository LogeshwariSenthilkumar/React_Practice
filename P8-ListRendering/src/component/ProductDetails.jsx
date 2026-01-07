import React from 'react'
import PropTypes from 'prop-types'
import { userContext } from './Content'
import { useContext } from 'react'
const ProductDetails = ({deepName,deepDes,deepPrice}) => {
  let {user}=useContext(userContext);
  console.log(user);
  
  return (
    <div>
      <article>
        <h1>UserName:{user.uName}</h1>
      </article>
      <section>
        <h3>Name:{deepName}</h3>
        <h4>Des:{deepDes}</h4>
        <h5>Price:{deepPrice}</h5>
      </section>
    </div>
  )
}

ProductDetails.propTypes = {
  deepName: PropTypes.string.isRequired,
  deepDes: PropTypes.string.isRequired,
  deepPrice: PropTypes.number.isRequired
}

export default ProductDetails
