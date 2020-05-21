import React from 'react'
import './subNavigation.scss'

import { useHistory } from 'react-router-dom'

const SubNavigation = () => {
  let history = useHistory()
  const handleClick = (category) => {
    history.push(category)
  }
  return (
    <ul className='subNavigation'>
      <li onClick={category => handleClick(category = '/beer-demo-app')} className='subNavigation__item subNavigation__item--active'>
        All
      </li>
      <li onClick={category => handleClick(category = '/beer-demo-app/pizza')} className='subNavigation__item'>
        Pizza
      </li>
      <li onClick={category => handleClick(category = '/beer-demo-app/steak')} className='subNavigation__item'>
        Steak
      </li>
    </ul>
  )
}

export default SubNavigation