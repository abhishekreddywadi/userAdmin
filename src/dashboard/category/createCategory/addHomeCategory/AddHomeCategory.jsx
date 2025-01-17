import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './addHomeCategory.scss';

const AddHomeCategory = ({ showHomeModal, handleHomeModalHide, homeModalImageSrc, handleHomeModalFileChange }) => {
  const [authType, setAuthType] = useState('');
  const [pin, setPin] = useState('');
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleAuthClick = (type) => {
    setAuthType(type);
    if (type !== 'pin') {
      setShowAuthModal(true);
    }
  };

  const renderAuthInterface = () => {
    switch (authType) {
      case 'face':
        return (
          <div className="auth-interface" style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: '#fff',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
            textAlign: 'center'
          }}>
            <div style={{marginBottom: '15px'}}>
              <i className="fas fa-camera" style={{fontSize: '2rem', color: '#4299e1'}}></i>
            </div>
            <h5 style={{marginBottom: '10px'}}>Face Recognition</h5>
            <p style={{color: '#718096', marginBottom: '15px'}}>Please position your face in the frame</p>
            <div style={{
              width: '200px',
              height: '200px',
              border: '2px dashed #4299e1',
              borderRadius: '50%',
              margin: '0 auto 15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <i className="fas fa-user" style={{fontSize: '4rem', color: '#4299e1'}}></i>
            </div>
            <button 
              className="btn btn-secondary"
              onClick={() => setShowAuthModal(false)}
              style={{marginTop: '10px'}}
            >
              Cancel
            </button>
          </div>
        );
      case 'finger':
        return (
          <div className="auth-interface" style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: '#fff',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
            textAlign: 'center'
          }}>
            <div style={{marginBottom: '15px'}}>
              <i className="fas fa-fingerprint" style={{fontSize: '3rem', color: '#4299e1'}}></i>
            </div>
            <h5 style={{marginBottom: '10px'}}>Fingerprint Authentication</h5>
            <p style={{color: '#718096', marginBottom: '15px'}}>Place your finger on the sensor</p>
            <div style={{
              width: '150px',
              height: '150px',
              border: '2px solid #4299e1',
              borderRadius: '10px',
              margin: '0 auto 15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#EDF2F7'
            }}>
              <i className="fas fa-fingerprint" style={{fontSize: '4rem', color: '#4299e1'}}></i>
            </div>
            <button 
              className="btn btn-secondary"
              onClick={() => setShowAuthModal(false)}
              style={{marginTop: '10px'}}
            >
              Cancel
            </button>
          </div>
        );
      case 'pin':
        return (
          <div className="col-12">
            <div className="input-container" style={{maxWidth: '200px', margin: '10px 0'}}>
              <label htmlFor="pin" style={{fontSize: '0.8rem', marginBottom: '4px'}}>Enter PIN</label>
              <input
                type="password"
                id="pin"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Enter your PIN"
                style={{
                  width: '100%',
                  padding: '8px',
                  borderRadius: '6px',
                  border: '1px solid #e2e8f0',
                  fontSize: '0.9rem'
                }}
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Modal className='add-modal home-modal' show={showHomeModal} onHide={handleHomeModalHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add Home Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form action="">
          <div className="row" style={{gap: '25px 0'}}>
            <div className="col-12 p-0" style={{display: 'flex', gap: '5px'}} >
              <div className="col-6 col-md-6">
                <div className="input-container">
                  <label htmlFor="">Property Type</label>
                  <select name="" id="">
                    <option value="">Apartment</option>
                    <option value="">House</option>
                    <option value="">Villa</option>
                    <option value="">Condo</option>
                  </select>
                </div>
              </div>
              <div className="col-6 col-md-6">
                <div className="input-container">
                  <label htmlFor="">Listing Type</label>
                  <select name="" id="">
                    <option value="">For Sale</option>
                    <option value="">For Rent</option>
                    <option value="">Short Term</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="col-12 col-md-6">
              <div className="input-container img-container">
                <span className='uploaded-img' style={{padding: '10px'}}>{homeModalImageSrc && <img src={homeModalImageSrc} alt="Uploaded" />}</span>
                <div className='d-flex flex-column ml-auto' style={{width: 'calc(100% - 110px)'}}>
                  <label htmlFor="">Property Name/Title</label>
                  <input type="text" placeholder='Enter Property Name' />
                </div>
                <input type="file" onChange={handleHomeModalFileChange} />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="input-container">
                <label htmlFor="">Description</label>
                <textarea placeholder='Add Property Description'></textarea>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="input-container">
                <label htmlFor="">Bedrooms</label>
                <select name="" id="">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4+</option>
                </select>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="input-container">
                <label htmlFor="">Bathrooms</label>
                <select name="" id="">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4+</option>
                </select>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="input-container">
                <label htmlFor="">Parking Spots</label>
                <select name="" id="">
                  <option value="">0</option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3+</option>
                </select>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="input-container">
                <label htmlFor="">Price</label>
                <input type="number" placeholder='Enter Price' />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="input-container">
                <label htmlFor="">Area (sq ft)</label>
                <input type="number" placeholder='Enter Area' />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="input-container">
                <label htmlFor="">Street Address</label>
                <input type="text" placeholder='Add Street Address' />
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

            <div className="col-12 col-md-4">
              <div className="input-container">
                <label htmlFor="">Country</label>
                <select name="" id="">
                  <option value="">Australia</option>
                  <option value="">India</option>
                  <option value="">Japan</option>
                </select>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="input-container">
                <label htmlFor="">State</label>
                <select name="" id="">
                  <option value="">New South Wales</option>
                  <option value="">Victoria</option>
                  <option value="">Queensland</option>
                </select>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="input-container">
                <label htmlFor="">City</label>
                <select name="" id="">
                  <option value="">Sydney</option>
                  <option value="">Melbourne</option>
                  <option value="">Brisbane</option>
                </select>
              </div>
            </div>

            <div className="col-12 mt-3">
              <label className="mb-2 fw-bold" style={{fontSize: '0.9rem'}}>Choose Authentication Method</label>
              <div className="auth-options" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 120px)',
                gap: '10px',
                margin: '8px 0'
              }}>
                <div 
                  className={`auth-option ${authType === 'face' ? 'active' : ''}`}
                  onClick={() => handleAuthClick('face')}
                  style={{
                    background: '#fff',
                    borderRadius: '6px',
                    padding: '8px',
                    cursor: 'pointer',
                    border: `1px solid ${authType === 'face' ? '#4299e1' : '#e2e8f0'}`,
                    transition: 'all 0.3s ease',
                    textAlign: 'center',
                    boxShadow: authType === 'face' ? '0 1px 2px rgba(66, 153, 225, 0.15)' : 'none'
                  }}
                >
                  <i className="fas fa-user-shield" style={{
                    fontSize: '1.4rem',
                    color: '#4299e1',
                    marginBottom: '4px',
                    display: 'block'
                  }}></i>
                  <h4 style={{fontSize: '0.8rem', fontWeight: '600', marginBottom: '2px'}}>Face ID</h4>
                  <p style={{fontSize: '0.65rem', color: '#718096', margin: 0, lineHeight: '1'}}>Facial login</p>
                </div>

                <div 
                  className={`auth-option ${authType === 'finger' ? 'active' : ''}`}
                  onClick={() => handleAuthClick('finger')}
                  style={{
                    background: '#fff',
                    borderRadius: '6px',
                    padding: '8px',
                    cursor: 'pointer',
                    border: `1px solid ${authType === 'finger' ? '#4299e1' : '#e2e8f0'}`,
                    transition: 'all 0.3s ease',
                    textAlign: 'center',
                    boxShadow: authType === 'finger' ? '0 1px 2px rgba(66, 153, 225, 0.15)' : 'none'
                  }}
                >
                  <i className="fas fa-fingerprint" style={{
                    fontSize: '1.4rem',
                    color: '#4299e1',
                    marginBottom: '4px',
                    display: 'block'
                  }}></i>
                  <h4 style={{fontSize: '0.8rem', fontWeight: '600', marginBottom: '2px'}}>Touch ID</h4>
                  <p style={{fontSize: '0.65rem', color: '#718096', margin: 0, lineHeight: '1'}}>Fingerprint</p>
                </div>

                <div 
                  className={`auth-option ${authType === 'pin' ? 'active' : ''}`}
                  onClick={() => handleAuthClick('pin')}
                  style={{
                    background: '#fff',
                    borderRadius: '6px',
                    padding: '8px',
                    cursor: 'pointer',
                    border: `1px solid ${authType === 'pin' ? '#4299e1' : '#e2e8f0'}`,
                    transition: 'all 0.3s ease',
                    textAlign: 'center',
                    boxShadow: authType === 'pin' ? '0 1px 2px rgba(66, 153, 225, 0.15)' : 'none'
                  }}
                >
                  <i className="fas fa-key" style={{
                    fontSize: '1.4rem',
                    color: '#4299e1',
                    marginBottom: '4px',
                    display: 'block'
                  }}></i>
                  <h4 style={{fontSize: '0.8rem', fontWeight: '600', marginBottom: '2px'}}>PIN</h4>
                  <p style={{fontSize: '0.65rem', color: '#718096', margin: 0, lineHeight: '1'}}>Passcode</p>
                </div>
              </div>
              {renderAuthInterface()}
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleHomeModalHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleHomeModalHide}>
          Save
        </Button>
      </Modal.Footer>
      {showAuthModal && <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.5)',
        zIndex: 999
      }} onClick={() => setShowAuthModal(false)} />}
    </Modal>
  );
};

export default AddHomeCategory;
