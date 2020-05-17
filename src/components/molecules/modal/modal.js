import React, { Fragment } from 'react'
import { createPortal } from 'react-dom'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'

import Image from '../../atoms/image'

import './modal.scss'

const Modal = ({ isVisible, hide, selectedBeer }) => {
  const handleClick = (event) => {
    const isParentElement = event.target.className === 'modal'
    if (!isParentElement) {
      return
    }
    hide()
  }
  const imgUrl = selectedBeer['image_url']
  const isKeg = imgUrl && !!imgUrl.includes('keg')
  const largeProduct = isKeg ? 'modal__image--large' : ''
  return (
    isVisible ? createPortal(
      <Fragment>
        <div className='modal' onClick={(event) => handleClick(event)} aria-modal aria-hidden tabIndex={-1} role='dialog'>
          <div className='modal__body'>
            <button type='button' className='modal__close' data-dismiss='modal' aria-label='Close' onClick={hide}>
              Close
            </button>
            <div className='modal__test'>
              <h3>
                {selectedBeer.name}
              </h3>
              <p>
                {selectedBeer.tagline}
              </p>
              <p>
                <span className='modal__bold'>ABV</span>: {selectedBeer.abv}
              </p>
              <p>
                {selectedBeer.description}
              </p>
              <p>
                <span className='modal__bold'>Pairs With</span>:{selectedBeer['food_pairing']}
              </p>
              <div className={`modal__image ${largeProduct}`}>
                <Image imgUrl={imgUrl} />
              </div>
            </div>
          </div>
        </div>
      </Fragment>, document.getElementById('modal-root')
    ) : null
  )
}

Modal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired
}

Modal.defaultProps = {
  isVisible: false
}

const mapStateToProps = state => ({
  selectedBeer: state.buyModal.selectedBeer
})

export default connect(mapStateToProps)(Modal)
