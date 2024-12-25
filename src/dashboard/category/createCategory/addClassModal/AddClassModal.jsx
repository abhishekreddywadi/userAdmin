import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './addClassModal.scss'

function AddClassModal({showAddClassModal, handleAddClassModalHide, addModalClassImageSrc, handleAddClassModalFileChange, addTitle, addNameLabel, departmentLabel}) {
  return (
    <Modal className='add-modal sub-cat-modal' show={showAddClassModal} onHide={handleAddClassModalHide}>
        <Modal.Header closeButton>
            <Modal.Title>{addTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form action="">
                <div className="row" style={{gap: '25px 0'}}>
                    <div className="col-12 col-md-6">
                        <div className="input-container img-container">
                            <span className='uploaded-img'>{addModalClassImageSrc && <img src={addModalClassImageSrc} alt="Uploaded" />}</span>
                            <div className='d-flex flex-column ml-auto' style={{width: 'calc(100% - 110px)'}}>
                                <label htmlFor="">{addNameLabel}</label>
                                <input type="text" placeholder='Add Category Name' />
                            </div>
                            <input type="file" onChange={handleAddClassModalFileChange} className='w-100' />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="input-container">
                            <label htmlFor="">{departmentLabel}</label>
                            <textarea placeholder='Add Department Name' style={{resize: 'none'}}></textarea>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="input-container">
                            <label htmlFor="">Your Authorized Signature Key</label>
                            <input type="password" placeholder='Add Authorized Signature Key' />
                        </div>
                    </div>
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleAddClassModalHide}>
            Cancel
            </Button>
            <Button variant="primary" onClick={handleAddClassModalHide}>
            Save
            </Button>
        </Modal.Footer>
    </Modal>
  )
}

export default AddClassModal
