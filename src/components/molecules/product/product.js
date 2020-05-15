import React from 'react'
import PropTypes from 'prop-types'

import Image from '../../atoms/image'

import './product.scss'

const Product = ({name, imgUrl}) => {
  const hasImgUrl = !!imgUrl ? 'product__image--border' : 'product__image--placeholder'
  const isKeg = imgUrl && !!imgUrl.includes('keg')
  const largeProduct = isKeg ? 'product__image--large' : ''
  return (
    <div className='product'>
      <div className={`product__image ${hasImgUrl} ${largeProduct}`}>
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
  imgUrl: ''
}

export default Product