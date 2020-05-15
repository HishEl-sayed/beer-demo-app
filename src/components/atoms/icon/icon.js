import React from 'react'
import PropTypes from 'prop-types'
import Search from './svg/search'
import Coffee from './svg/coffee'
import Cutlery from './svg/cutlery'
import Percentage from './svg/percentage'


const icons = {
  search: 'search',
  coffee: 'coffee',
  cutlery: 'cutlery',
  percentage: 'percentage'
}

const Icon = ({ type, fill }) => {
  switch (type) {
    case icons.coffee: return <Coffee fill={fill} />
    case icons.cutlery: return <Cutlery fill={fill} />
    case icons.percentage: return <Percentage fill={fill} />
    default:
    case icons.search: return <Search fill={fill} />
  }
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  fill: PropTypes.string,
  stroke: PropTypes.string
}

Icon.defaultProps = {
  type: ''
}

export default Icon
