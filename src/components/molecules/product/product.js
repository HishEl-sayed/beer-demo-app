import React  from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { selectBeer } from '../../../actions/buyModalActions'

import Image from '../../atoms/image'

import './product.scss'

const Product = ({selectBeer, beerData, toggle}) => {

  const handleClick = () => {
    selectBeer(beerData)
    toggle()
  }

  const { name } = beerData
  const imgUrl = beerData['image_url']
  const hasImgUrl = !!imgUrl ? 'product__image--border' : 'product__image--placeholder'
  const isKeg = imgUrl && !!imgUrl.includes('keg')
  const largeProduct = isKeg ? 'product__image--large' : ''

  return (
    <div className='product'>
      <div onClick={() => (handleClick(beerData))} className={`product__image ${hasImgUrl} ${largeProduct}`}>
        <Image imgUrl={imgUrl} />
      </div>
      <p className='product__name'>
        {name}
      </p>
    </div>
  )
}

Product.propTypes = {
  imgUrl: PropTypes.string,
  beerData: PropTypes.object.isRequired
}

Product.defaultProps = {
  imgUrl: '',
  beerData: {}
}

const mapDispatchToProps = (dispatch) => ({
  selectBeer: (beerData) => {
    dispatch(selectBeer(beerData))
  }
})

export default connect(null, mapDispatchToProps)(Product)