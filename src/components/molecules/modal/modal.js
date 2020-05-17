import React from 'react'
import { createPortal } from 'react-dom'

import './modal.scss'

const Modal = ({ isVisible, hide, beerDetails }) => {
  console.log(beerDetails)
  return (
    isVisible ? createPortal(
      <React.Fragment>
        <div className="modal-overlay"/>
        <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
          <div className="modal">
            <div className="modal-header">
              <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <p>
              Hello, I'm a modal.
            </p>
          </div>
        </div>
      </React.Fragment>, document.getElementById('modal')
    ) : null
  )
}

export default Modal