import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './addDepartmentModal.scss'

function AddDepartmentModal({showDepartmentModal, handleDepartmentModalHide, departmentModalImageSrc, handleDepartmentModalFileChange, business }) {
  return (
    <Modal className='add-modal department-modal' show={showDepartmentModal} onHide={handleDepartmentModalHide}>
        <Modal.Header closeButton>
            <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {business != "Business" ? (
                <form action="">
                    <div className="row" style={{gap: '25px 0'}}>
                        <div className="col-12 col-md-6">
                            <div className="input-container img-container">
                                <span className='uploaded-img'>{departmentModalImageSrc && <img src={departmentModalImageSrc} alt="Uploaded" />}</span>
                                <div className='d-flex flex-column ml-auto' style={{width: 'calc(100% - 110px)'}}>
                                    <label htmlFor="">Enter Name</label>
                                    <input type="text" placeholder='Add Category Name' />
                                </div>
                                <input type="file" onChange={handleDepartmentModalFileChange} className='w-100' />
                            </div>
                        </div>

                        {/* <div className="col-12 col-md-4">
                            <div className="input-container">
                                <label htmlFor="">Department Class</label>
                                <input type="text" name="" id="" placeholder='Add Department Class' />
                            </div>
                        </div> */}

                        <div className="col-12 col-md-6">
                            <div className="input-container">
                                <label htmlFor="">Department Name</label>
                                <input type="text" placeholder='Add Department Name' />
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="input-container">
                                <label htmlFor="">Country</label>
                                <select name="" id="">
                                    <option value="">Australia</option>
                                    <option value="">Bharat</option>
                                    <option value="">Japan</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="input-container">
                                <label htmlFor="">City</label>
                                <select name="" id="">
                                    <option value="">Australia</option>
                                    <option value="">Bharat</option>
                                    <option value="">Japan</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="input-container">
                                <label htmlFor="">State</label>
                                <select name="" id="">
                                    <option value="">Australia</option>
                                    <option value="">Bharat</option>
                                    <option value="">Japan</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="input-container">
                                <label htmlFor="">Street Address</label>
                                <input type="text" placeholder='Add Street Address' />
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="input-container check">
                                <label htmlFor="">Who can Register</label>
                                <div className="row">
                                   
                                    <div className="col-4 d-flex align-items-center" style={{gap: 5}}>
                                        <input type="checkbox" name="" id="mbi" />
                                        <label className='mb-0' htmlFor="mbi">MBI</label>
                                    </div>
                                    <div className="col-4 d-flex align-items-center" style={{gap: 5}}>
                                        <input type="checkbox" name="" id="mb" />
                                        <label className='mb-0' htmlFor="mb">MB</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="input-container">
                                <label htmlFor="">Postcode/ZIP</label>
                                <div className='d-flex align-items-center'>
                                    <input type="number" placeholder='Add Postcode/ZIP' />
                                    <span className='ml-3'>Enter ZIP for city and state</span>
                                </div>
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
            ) : (
                <form action="">
                    <div className="row" style={{gap: '25px 0'}}>
                        <div className="col-12 p-0">
                            <div className="col-12 col-md-6">
                                <div className="input-container">
                                    <label htmlFor="">Select Parent Business</label>
                                    <select name="" id="">
                                        <option value="">Individual</option>
                                        <option value="">Business</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="input-container img-container">
                                <span className='uploaded-img'>{departmentModalImageSrc && <img src={departmentModalImageSrc} alt="Uploaded" />}</span>
                                <div className='d-flex flex-column ml-auto' style={{width: 'calc(100% - 110px)'}}>
                                    <label htmlFor="">Category</label>
                                    <input type="text" placeholder='Information Technology' />
                                </div>
                                
                                <input type="file" onChange={handleDepartmentModalFileChange} />
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="input-container">
                                <label htmlFor="">Select Department</label>
                                <select name="" id="">
                                    <option value="">IT Department</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </form>
            )}
            
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleDepartmentModalHide}>
            Cancel
            </Button>
            <Button variant="primary" onClick={handleDepartmentModalHide}>
            Save
            </Button>
        </Modal.Footer>
    </Modal>
  )
}

export default AddDepartmentModal
