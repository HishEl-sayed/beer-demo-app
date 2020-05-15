import React from 'react'
import Icon from '../../atoms/icon'
import './navigation.scss'

const Navigation = () => {
  return (
    <nav className='navigation'>
      <ul className='navigation__container'>
        <li className='navigation__category'>
          <Icon type='coffee' />
        </li>
        <li className='navigation__category'>
          <Icon type='cutlery' />
        </li>
        <li className='navigation__category'>
          <Icon type='percentage' />
        </li>
        <li className='navigation__category'>
          <Icon type='search' />
        </li>
      </ul>
    </nav>
  )
}

export default Navigation