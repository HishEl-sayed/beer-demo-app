import React from 'react'
import PropTypes from 'prop-types'
import './image.scss'

const Image = ({imgUrl}) => {
  const hasUrl = !!imgUrl ? imgUrl : 'https://via.placeholder.com/500?text=Image+Unavailable'
  return (
    <img className='image' alt='' src={hasUrl} />
  )
}

Image.propTypes = {
  imgUrl: PropTypes.string
}

Image.defaultProps = {
  imgUrl: ''
}

export default Image