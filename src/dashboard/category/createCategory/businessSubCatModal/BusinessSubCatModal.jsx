import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './businessSubCatModal.scss'

function BusinessSubCatModal({showBusinessCatModal, handleBusinessCatModalHide, businessCatModalImageSrc, handleBusinessCatModalFileChange, business }) {
  return (
    <Modal className='add-modal sub-cat-modal' show={showBusinessCatModal} onHide={handleBusinessCatModalHide}>
        <Modal.Header closeButton>
            <Modal.Title>Add {business} Sub Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {business == "Dipatement" ? (
                <form action="">
                    <div className="row" style={{gap: '25px 0'}}>
                        <div className="col-12 col-md-6">
                            <div className="input-container img-container">
                                <span className='uploaded-img'>{businessCatModalImageSrc && <img src={businessCatModalImageSrc} alt="Uploaded" />}</span>
                                <div className='d-flex flex-column ml-auto' style={{width: 'calc(100% - 110px)'}}>
                                    <label htmlFor="">Enter Name</label>
                                    <input type="text" placeholder='Add Category Name' />
                                </div>
                                <input type="file" onChange={handleBusinessCatModalFileChange} className='w-100' />
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
                                        <input type="checkbox" name="" id="mu" />
                                        <label className='mb-0' htmlFor="mu">Master User</label>
                                    </div>
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
            ) : business == "Business" ? (
                <form action="">
                    <div className="row" style={{gap: '25px 0'}}>
                        <div className="col-12 col-md-4">
                            <div className="input-container">
                                <label htmlFor="">Parent Business</label>
                                <input type="text" placeholder='Individual' disabled />
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="input-container">
                                <label htmlFor="">Category</label>
                                <input type="text" placeholder='Information Technology' disabled />
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="input-container">
                                <label htmlFor="">Department</label>
                                <input type="text" placeholder='IT Department' disabled />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="input-container img-container">
                                <span className='uploaded-img'>{businessCatModalImageSrc && <img src={businessCatModalImageSrc} alt="Uploaded" />}</span>
                                <div className='d-flex flex-column ml-auto' style={{width: 'calc(100% - 110px)'}}>
                                    <label htmlFor="">Enter Sub Category Name</label>
                                    <input type="text" placeholder='' />
                                </div>
                                
                                <input type="file" onChange={handleBusinessCatModalFileChange} />
                            </div>
                        </div>
                    </div>
                </form>
            ):
            (
                <form action="">
                    <div className="row" style={{gap: '25px 0'}}>
                        <div className="col-12 col-md-6">
                            <div className="input-container">
                                <label htmlFor="">Select Parent Category</label>
                                <select name="" id="">
                                    <option value="">FITNESS</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="input-container">
                                <label htmlFor="">Description</label>
                                <textarea name="" id="" placeholder='Add Description' style={{resize: 'none'}}></textarea>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="input-container">
                                <label htmlFor="">Class Category Name</label>
                                <input type="text" placeholder='Add Category Name' />
                            </div>
                        </div>
                        <div className="col-12 col-md-10">
                            <div className="input-container img-container">
                                <span className='uploaded-img'>{businessCatModalImageSrc && <img src={businessCatModalImageSrc} alt="Uploaded" />}</span>
                                <div className='d-flex flex-column ml-auto' style={{width: 'calc(100% - 110px)'}}>
                                    <label htmlFor="">Class Category Icon</label>
                                    <input type="text" placeholder='' />
                                </div>
                                
                                <input type="file" onChange={handleBusinessCatModalFileChange} />
                            </div>
                        </div>
                    </div>
                </form>
            )
            }
            
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleBusinessCatModalHide}>
            Cancel
            </Button>
            <Button variant="primary" onClick={handleBusinessCatModalHide}>
            Save
            </Button>
        </Modal.Footer>
    </Modal>
  )
}

export default BusinessSubCatModal
