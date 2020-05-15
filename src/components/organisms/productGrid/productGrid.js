import React from 'react'
import PropTypes from 'prop-types'
import Product from '../../molecules/product'
import './productGrid.scss'

const ProductGrid = ({beers}) => {
  return (
    <div className='productGrid'>
      {beers.map((beer) => 
        <Product
          key={beer.id}
          imgUrl={beer['image_url']}
          name={beer.name}
        />
      )}
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