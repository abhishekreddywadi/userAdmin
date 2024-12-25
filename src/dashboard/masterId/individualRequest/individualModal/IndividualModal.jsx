import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './individualModal.scss'

function IndividualModal({show, handleClose, heading, modalBody}) {
  return (
    <Modal show={show} onHide={handleClose} className='individual-modal'>
        <Modal.Header closeButton>
          <Modal.Title>{heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {modalBody}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Reject</Button>
          <Button variant="primary" onClick={handleClose}>Approve</Button>
        </Modal.Footer>
      </Modal>
  )
}

export default IndividualModal
