import React, { useState } from 'react'
import './subNavigation.scss'

import { useHistory } from 'react-router-dom'

const SubNavigation = () => {
  let history = useHistory()
  const handleClick = (category = '') => {
    const categoryUrl = `${process.env.PUBLIC_URL}/${category}`
    console.log(categoryUrl)
    history.push(categoryUrl)
  }
  const [active, setActive] = useState(null)
  const activeClass = active ? 'subNavigation__item--active' : ''
  return (
    <ul className='subNavigation'>
      <li onClick={() => handleClick()} className={`subNavigation__item`}>
        All
      </li>
      <li onClick={() => handleClick('pizza')} className={`subNavigation__item`}>
        Pizza
      </li>
      <li onClick={() => handleClick('steak')} className={`subNavigation__item`}>
        Steak
      </li>
    </ul>
  )
}

export default SubNavigation