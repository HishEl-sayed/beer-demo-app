import React from 'react'
import './subNavigation.scss'

const SubNavigation = () => {
  return (
    <ul className='subNavigation'>
      <li className='subNavigation__item subNavigation__item--active'>
        All
      </li>
      <li className='subNavigation__item'>
        Pizza
      </li>
      <li className='subNavigation__item'>
        Steak
      </li>
    </ul>
  )
}

export default SubNavigation