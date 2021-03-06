import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../organisms/header'
import Navigation from '../../organisms/navigation'
import './default.scss'

const Default = ({children}) => {
  return (
    <div className='default'>
      <div className='default__headings'>
        <Header text='Demo App'/>
        <Navigation />
      </div>
      {children}
    </div>
  )
}

Default.propTypes = {
  children: PropTypes.node.isRequired
}

export default Default