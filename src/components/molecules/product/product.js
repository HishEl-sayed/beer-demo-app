import React from 'react'
import PropTypes from 'prop-types'

import Image from '../../atoms/image'

import './product.scss'

const Product = ({name, imgUrl}) => {
  return (
    <div className='product'>
      <div className='product__image'>
        <Image imgUrl={imgUrl} />
      </div>
      <p className='product__name'>
        {name}
      </p>
    </div>
  )
}

Product.propTypes = {
  imgUrl: PropTypes.string
}

Product.defaultProps = {
}

export default Product