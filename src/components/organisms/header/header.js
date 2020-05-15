import React from 'react'
import PropTypes from 'prop-types'
import './header.scss'

const Header = ({text}) => {
  return (
    <header className='header'>
      <h1 className="header__text">
        {text}
      </h1>
    </header>
  )
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Header