import React from 'react'
import PropTypes from 'prop-types'

import Product from '../../molecules/product'
import Modal from '../../molecules/modal'
import useModal from '../../../hooks/useModal'

import './productGrid.scss'

const ProductGrid = ({ beers }) => {
  const {isVisible, toggle} = useModal()
  return (
    <div className='productGrid'>
      {beers.map((beer) => 
        <Product
          key={beer.id}
          handleClick={toggle}
          imgUrl={beer['image_url']}
          name={beer.name}
        />
      )}
      <Modal
        isVisible={isVisible}
        hide={toggle}
      />
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