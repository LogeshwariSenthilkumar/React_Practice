import React from 'react'
import PropTypes from 'prop-types'

const ProductDetails = ({deepName,deepDes,deepPrice}) => {
  return (
    <div>
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
