import React from 'react'
import Icon from '../../atoms/icon'
import SubNavigation from '../../molecules/subNavigation'
import './navigation.scss'

const Navigation = () => {
  return (
    <nav className='navigation'>
      <ul className='navigation__container'>
        <li className='navigation__category navigation__category--active'>
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
      <SubNavigation />
    </nav>
  )
}

export default Navigation