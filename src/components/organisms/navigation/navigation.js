import React from 'react'
import './navigation.scss'

const Navigation = () => {
  return (
    <nav className='navigation'>
      <ul className='navigation__container'>
        <li className='navigation__link'>
          link 1
        </li>
        <li className='navigation__link'>
          link 2
        </li>
        <li className='navigation__link'>
          link 3
        </li>
      </ul>
    </nav>
  )
}

export default Navigation