import React from 'react'
import Icon from '../../atoms/icon'
import './navigation.scss'

const Navigation = () => {
  return (
    <nav className='navigation'>
      <ul className='navigation__container'>
        <li className='navigation__link'>
          <Icon type='coffee' />
        </li>
        <li className='navigation__link'>
          <Icon type='cutlery' />
        </li>
        <li className='navigation__link'>
          <Icon type='percentage' />
        </li>
        <li className='navigation__link'>
          <Icon type='search' />
        </li>
      </ul>
    </nav>
  )
}

export default Navigation