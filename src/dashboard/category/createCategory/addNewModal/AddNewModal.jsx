import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './addModal.scss';

function AddNewModal({showAddModal, handleAddModalHide, addModalImageSrc, handleAddModalFileChange }) {
  return (
    <Modal className='add-modal add-new' show={showAddModal} onHide={handleAddModalHide}>
        <Modal.Header closeButton>
            <Modal.Title>Add Business category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form action="">
                <div className="input-container img-container">
                    <span className='uploaded-img'>{addModalImageSrc && <img src={addModalImageSrc} alt="Uploaded" />}</span>
                    <div className='d-flex flex-column ml-auto' style={{width: 'calc(100% - 110px)'}}>
                        <label htmlFor="">Enter Name</label>
                        <input type="text" placeholder='Add Category Name' />
                    </div>
                </div>

                <div className="input-container">
                    
                    <label htmlFor="">Add Icon</label>
                    <input type="file" onChange={handleAddModalFileChange} />
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleAddModalHide}>
            Cancel
            </Button>
            <Button variant="primary" onClick={handleAddModalHide}>
            Submit
            </Button>
        </Modal.Footer>
    </Modal>
  )
}

export default AddNewModal
