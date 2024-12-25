import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './addCourseCategory.scss'

function AddCourseCategory({showAddCourseModal, handleAddCourseModalHide, addModalCourseImageSrc, handleAddCourseModalFileChange}) {
  return (
    <Modal className='add-modal sub-cat-modal' show={showAddCourseModal} onHide={handleAddCourseModalHide}>
        <Modal.Header closeButton>
            <Modal.Title>Add Class Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form action="">
                <div className="row" style={{gap: '25px 0'}}>
                    <div className="col-12 col-md-6">
                        <div className="input-container img-container">
                            <span className='uploaded-img'>{addModalCourseImageSrc && <img src={addModalCourseImageSrc} alt="Uploaded" />}</span>
                            <div className='d-flex flex-column ml-auto' style={{width: 'calc(100% - 110px)'}}>
                                <label htmlFor="">Class Category Name</label>
                                <input type="text" placeholder='Add Category Name' />
                            </div>
                            <input type="file" onChange={handleAddCourseModalFileChange} className='w-100' />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="input-container">
                            <label htmlFor="">Department Name</label>
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
            <Button variant="secondary" onClick={handleAddCourseModalHide}>
            Cancel
            </Button>
            <Button variant="primary" onClick={handleAddCourseModalHide}>
            Save
            </Button>
        </Modal.Footer>
    </Modal>
  )
}

export default AddCourseCategory
