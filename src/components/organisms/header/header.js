import React from 'react'
import PropTypes from 'prop-types'
import './header.scss'

const Header = ({text}) => {
  return (
    <header className='header'>
      {text}
    </header>
  )
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Header