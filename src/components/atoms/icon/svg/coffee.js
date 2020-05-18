import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Coffee = ({ fill }) => (
  <Fragment>
	  <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 511.988 511.988">
      <path d="M394.655 202.654H95.988c-17.643 0-32 14.357-32 32v21.333c0 76.117 42.048 145.152 109.717 180.16 5.227 2.688 11.669.661 14.379-4.587 2.688-5.227.661-11.669-4.587-14.379-60.544-31.317-98.176-93.077-98.176-161.195v-21.333c0-5.888 4.779-10.667 10.667-10.667h298.667c5.888 0 10.667 4.779 10.667 10.667v21.333c0 68.117-37.632 129.877-98.197 161.173-5.248 2.709-7.275 9.152-4.587 14.379a10.69 10.69 0 009.493 5.781c1.664 0 3.328-.384 4.885-1.195 67.691-34.987 109.739-104 109.739-180.139v-21.333c0-17.641-14.358-31.998-32-31.998z"></path>
      <path d="M489.865 422.558c-1.664-3.989-5.547-6.592-9.856-6.592H10.676c-4.309 0-8.192 2.603-9.856 6.592a10.643 10.643 0 002.304 11.627l23.915 23.936c14.123 14.101 32.853 21.867 52.8 21.867h330.965c19.947 0 38.699-7.765 52.843-21.867l23.915-23.936a10.644 10.644 0 002.303-11.627zm-41.322 20.48c-10.069 10.069-23.488 15.616-37.717 15.616H79.839c-14.229 0-27.648-5.547-37.717-15.616l-5.717-5.717H454.26l-5.717 5.717zm42.816-190.016c-28.736-18.475-74.645 1.579-79.787 3.904-5.355 2.453-7.744 8.768-5.291 14.144a10.657 10.657 0 0014.144 5.291c10.283-4.672 43.264-15.744 59.392-5.355 7.275 4.672 10.837 13.739 10.837 27.648 0 42.709-86.144 68.523-119.403 74.88l-7.552 1.493c-5.781 1.131-9.536 6.741-8.405 12.523 1.003 5.077 5.461 8.597 10.453 8.597.683 0 1.365-.064 2.069-.213l7.488-1.472c5.589-1.067 136.683-26.773 136.683-95.808.001-21.461-6.953-36.8-20.628-45.632zM328.372 113.31c17.344-21.675 17.344-55.616 0-77.291a10.634 10.634 0 00-14.997-1.664 10.655 10.655 0 00-1.664 14.997c10.987 13.717 10.987 36.907-.021 50.667-17.365 21.675-17.365 55.616 0 77.291a10.626 10.626 0 008.341 4.011c2.325 0 4.693-.768 6.656-2.347 4.608-3.691 5.355-10.411 1.664-14.997-11.008-13.718-11.008-36.907.021-50.667zm-64.085 0c17.365-21.675 17.365-55.616 0-77.291-3.669-4.608-10.389-5.355-14.997-1.664-4.608 3.691-5.355 10.411-1.664 14.997 11.008 13.717 11.008 36.907-.021 50.667-17.344 21.675-17.344 55.616 0 77.291a10.626 10.626 0 008.341 4.011c2.325 0 4.672-.768 6.656-2.347a10.655 10.655 0 001.664-14.997c-10.987-13.718-10.987-36.907.021-50.667zm-63.915.021c17.344-21.675 17.344-55.616 0-77.291a10.632 10.632 0 00-14.997-1.664c-4.587 3.669-5.333 10.389-1.664 14.976 10.987 13.717 10.987 36.907-.021 50.667-17.365 21.675-17.365 55.616 0 77.291a10.626 10.626 0 008.341 4.011 10.72 10.72 0 006.656-2.325c4.608-3.691 5.355-10.411 1.664-14.997-11.008-13.74-11.008-36.908.021-50.668z"></path>
    </svg>
  </Fragment>
)

Coffee.propTypes = {
  fill: PropTypes.string,
}

Coffee.defaultProps = {
  fill: '#ffffff',
}

export default Coffee