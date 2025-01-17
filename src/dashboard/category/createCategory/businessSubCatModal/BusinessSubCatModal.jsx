import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './businessSubCatModal.scss'

const BusinessSubCatModal = ({ showBusinessSubCatModal, handleBusinessSubCatModalHide, businessSubCatModalImageSrc, handleBusinessSubCatModalFileChange }) => {
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
        <Modal className='add-modal sub-cat-modal' show={showBusinessSubCatModal} onHide={handleBusinessSubCatModalHide}>
            <Modal.Header closeButton>
             <h5>Add Business Sub Category</h5>
            </Modal.Header>
            <Modal.Body>
                <form action="">
                    <div className="row" style={{gap: '25px 0'}}>
                        <div className="col-12 col-md-6">
                            <div className="input-container img-container">
                                <span className='uploaded-img' style={{padding: '10px'}}>{businessSubCatModalImageSrc && <img src={businessSubCatModalImageSrc} alt="Uploaded" />}</span>
                                <div className='d-flex flex-column ml-auto' style={{width: 'calc(100% - 110px)'}}>
                                    <label htmlFor="">Sub Category</label>
                                    <input type="text" placeholder='Add Sub Category' />
                                </div>
                                <input type="file" onChange={handleBusinessSubCatModalFileChange} />
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="input-container">
                                <label htmlFor="">Description</label>
                                <textarea placeholder='Add Description'></textarea>
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
                <Button variant="secondary" onClick={handleBusinessSubCatModalHide}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleBusinessSubCatModalHide}>
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

export default BusinessSubCatModal;
