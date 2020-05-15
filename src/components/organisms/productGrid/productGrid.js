import React from 'react'
import PropTypes from 'prop-types'
import './productGrid.scss'

const ProductGrid = ({beers}) => {
  return (
    <div className='productGrid'>

    </div>
  )
}

ProductGrid.propTypes = {
  beers: PropTypes.array.isRequired
}

ProductGrid.defaultProps = {
  beers: []
}

export default ProductGrid