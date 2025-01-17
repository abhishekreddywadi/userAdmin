import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./createNewStaff.scss";

import FingerLock from "../../../../assets/img/finger-lock.png";
import PinCode from "../../../../assets/img/pin.png";
import FaceLock from "../../../../assets/img/lock.png";

function CreateNewStaff() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);
  const [generatedId, setGeneratedId] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [formData, setFormData] = useState({
    staffId: "",
    idType: "",
    govId: "",
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      dateOfBirth: "",
      gender: "",
    },
    staffCategory: {
      category: "",
      subCategory: "",
      workType: ""
    },
    address: {
      street: "",
      city: "",
      state: "",
      country: "",
      postalCode: "",
    },
    documents: {
      panCard: "",
      panCardFront: null,
      panCardBack: null,
      aadhaar: "",
      aadhaarFront: null,
      aadhaarBack: null,
      agreement: null,
      photo: null
    },
    authentication: {
      type: "", // face, finger, or pin
      status: false,
    },
    role: {
      department: "",
      position: "",
      joiningDate: "",
    }
  });

  const [isVerified, setIsVerified] = useState(false);
  const [verifiedUser, setVerifiedUser] = useState(null);

  const generateStaffId = () => {
    const prefix = formData.idType === 'master' ? 'MST' : 
                  formData.idType === 'business' ? 'BUS' : 'STF';
    const timestamp = Date.now().toString().slice(-6);
    const randomNum = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `${prefix}${timestamp}${randomNum}`;
  };

  const handleChange = (section, field, value) => {
    if (section === 'idType') {
      const newId = generateStaffId();
      setGeneratedId(newId);
      setFormData(prev => ({
        ...prev,
        staffId: newId,
        [section]: value
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [section]: typeof prev[section] === 'object' ? 
          { ...prev[section], [field]: value } :
          value
      }));
    }
  };

  const handleFileChange = (section, field, file) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: file
      }
    }));
  };

  const handleNext = () => {
    setActiveStep(prev => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setActiveStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Submit logic here
  };

  const handleVerifyGovId = () => {
    // Dummy verification data
    const dummyUser = {
      name: "John Doe",
      id: "GOVID123456",
      photo: "https://randomuser.me/api/portraits/men/1.jpg",
      verifiedDate: new Date().toLocaleDateString()
    };
    setVerifiedUser(dummyUser);
    setIsVerified(true);
  };

  const renderProgressSteps = () => {
    const steps = [
      { number: 1, label: "ID Verification" },
      { number: 2, label: "Personal Info" },
      { number: 3, label: "Documents" },
      { number: 4, label: "Authentication" }
    ];

    return (
      <div className="progress-bar">
        <div className="progress-steps">
          <div 
            className="progress-line" 
            style={{ width: `${((activeStep - 1) / (steps.length - 1)) * 100}%` }}
          />
          {steps.map((step) => (
            <div 
              key={step.number}
              className={`progress-step ${
                activeStep === step.number ? 'active' : 
                activeStep > step.number ? 'completed' : ''
              }`}
            >
              <div className="step-number">
                {activeStep > step.number ? (
                  <i className="fas fa-check"></i>
                ) : (
                  step.number
                )}
              </div>
              <div className="step-label">{step.label}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 1:
        return (
          <div className="form-step">
            <h3>ID Verification</h3>
            <p className="step-description">Select ID type and verify existing records</p>
            
            <div className="form-section">
              <div className="form-row">
                <div className="form-group">
                  <label>ID Type</label>
                  <select 
                    value={formData.idType}
                    onChange={(e) => handleChange('idType', '', e.target.value)}
                    className="form-control"
                  >
                    <option value="">Select ID Type</option>
                    <option value="individual">Individual ID</option>
                    <option value="master">Master ID</option>
                    <option value="business">Business ID</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>ID Number  </label>
                  <div className="gov-id-group">
                    <input
                      type="text"
                      value={formData.govId}
                      onChange={(e) => handleChange('govId', '', e.target.value)}
                      className="form-control"
                      placeholder="Enter Aadhaar/PAN number"
                    />
                    <button 
                      className="verify-gov-btn"
                      onClick={handleVerifyGovId}
                      disabled={!formData.govId || isVerified}
                    >
                      {isVerified ? (
                        <>
                          <i className="fas fa-check"></i>
                          Verified
                        </>
                      ) : (
                        <>
                          <i className="fas fa-search"></i>
                          Verify
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {isVerified && verifiedUser && (
                <div className="verified-user-card">
                  <div className="user-photo">
                    <img src={verifiedUser.photo} alt="User" />
                  </div>
                  <div className="user-info">
                    <h5>{verifiedUser.name}</h5>
                    <p>ID: {verifiedUser.id}</p>
                    <span className="verified-badge">
                      <i className="fas fa-shield-check"></i>
                      Verified on {verifiedUser.verifiedDate}
                    </span>
                  </div>
                </div>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label>Staff Category</label>
                  <select
                    value={formData.staffCategory.category}
                    onChange={(e) => handleChange('staffCategory', 'category', e.target.value)}
                    className="form-control"
                  >
                    <option value="">Select Staff Category</option>
                    <option value="master">Master User ID</option>
                    <option value="regular">Regular Staff</option>
                    <option value="temporary">Temporary Staff</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Staff Sub Category</label>
                  <select
                    value={formData.staffCategory.subCategory}
                    onChange={(e) => handleChange('staffCategory', 'subCategory', e.target.value)}
                    className="form-control"
                  >
                    <option value="">Select Sub Category</option>
                    <option value="master">Master User ID</option>
                    <option value="supervisor">Supervisor</option>
                    <option value="worker">Worker</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Work Type</label>
                  <select
                    value={formData.staffCategory.workType}
                    onChange={(e) => handleChange('staffCategory', 'workType', e.target.value)}
                    className="form-control"
                  >
                    <option value="">Select Work Type</option>
                    <option value="fullTime">Full Time</option>
                    <option value="partTime">Part Time</option>
                    <option value="contract">Contract</option>
                  </select>
                </div>
              </div>

              {formData.idType && (
                <div className="id-preview">
                  <div className="id-header">
                    <h5>Generated Staff ID</h5>
                    <span className="id-number">{formData.staffId}</span>
                  </div>
                  <div className="id-details">
                    <div className="detail-item">
                      <div className="label">ID Type</div>
                      <div className="value">{formData.idType.charAt(0).toUpperCase() + formData.idType.slice(1)}</div>
                    </div>
                    <div className="detail-item">
                      <div className="label">Created Date</div>
                      <div className="value">{new Date().toLocaleDateString()}</div>
                    </div>
                  </div>
                </div>
              )}

              <div className="button-group">
                
                <button className="continue-btn" onClick={() => handleNext()}>
                  Continue to Personal Info
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="form-step">
            <h3>Personal Information</h3>
            <p className="step-description">Enter staff member's basic details</p>

            <div className="form-section">
              <h4>Basic Information</h4>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    value={formData.personalInfo.firstName}
                    onChange={(e) => handleChange('personalInfo', 'firstName', e.target.value)}
                    className="form-control"
                    placeholder="Enter first name"
                  />
                </div>

                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    value={formData.personalInfo.lastName}
                    onChange={(e) => handleChange('personalInfo', 'lastName', e.target.value)}
                    className="form-control"
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    value={formData.personalInfo.email}
                    onChange={(e) => handleChange('personalInfo', 'email', e.target.value)}
                    className="form-control"
                    placeholder="Enter email address"
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    value={formData.personalInfo.phoneNumber}
                    onChange={(e) => handleChange('personalInfo', 'phoneNumber', e.target.value)}
                    className="form-control"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Date of Birth</label>
                  <input
                    type="date"
                    value={formData.personalInfo.dateOfBirth}
                    onChange={(e) => handleChange('personalInfo', 'dateOfBirth', e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label>Gender</label>
                  <select
                    value={formData.personalInfo.gender}
                    onChange={(e) => handleChange('personalInfo', 'gender', e.target.value)}
                    className="form-control"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="form-section">
              <h4>Address Information</h4>
              <div className="form-row">
                <div className="form-group">
                  <label>Street Address</label>
                  <input
                    type="text"
                    value={formData.address.street}
                    onChange={(e) => handleChange('address', 'street', e.target.value)}
                    className="form-control"
                    placeholder="Enter street address"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>City</label>
                  <input
                    type="text"
                    value={formData.address.city}
                    onChange={(e) => handleChange('address', 'city', e.target.value)}
                    className="form-control"
                    placeholder="Enter city"
                  />
                </div>

                <div className="form-group">
                  <label>State</label>
                  <input
                    type="text"
                    value={formData.address.state}
                    onChange={(e) => handleChange('address', 'state', e.target.value)}
                    className="form-control"
                    placeholder="Enter state"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Country</label>
                  <input
                    type="text"
                    value={formData.address.country}
                    onChange={(e) => handleChange('address', 'country', e.target.value)}
                    className="form-control"
                    placeholder="Enter country"
                  />
                </div>

                <div className="form-group">
                  <label>Postal Code</label>
                  <input
                    type="text"
                    value={formData.address.postalCode}
                    onChange={(e) => handleChange('address', 'postalCode', e.target.value)}
                    className="form-control"
                    placeholder="Enter postal code"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="form-step">
            <h3>Document Upload</h3>
            <p className="step-description">Upload required documents for verification</p>

            <div className="form-section">
              <h4>Government IDs</h4>
              <div className="form-row">
                <div className="form-group">
                  <label>PAN Card Number</label>
                  <input
                    type="text"
                    value={formData.documents.panCard}
                    onChange={(e) => handleChange('documents', 'panCard', e.target.value)}
                    className="form-control"
                    placeholder="Enter PAN card number"
                  />
                </div>
                <div className="form-group">
                  <label>Aadhaar Number</label>
                  <input
                    type="text"
                    value={formData.documents.aadhaar}
                    onChange={(e) => handleChange('documents', 'aadhaar', e.target.value)}
                    className="form-control"
                    placeholder="Enter Aadhaar number"
                  />
                </div>
              </div>

              <div className="document-upload-section">
                <div className="upload-grid">
                  <div className={`upload-box ${formData.documents.photo ? 'has-file' : ''}`}>
                    <input
                      type="file"
                      id="photo"
                      accept="image/*"
                      onChange={(e) => handleFileChange('documents', 'photo', e.target.files[0])}
                    />
                    <label htmlFor="photo">
                      <i className="fas fa-user-circle"></i>
                      <span>Profile Photo</span>
                      <p>Upload a clear face photo</p>
                      {formData.documents.photo && (
                        <div className="file-info">
                          <div className="file-name">{formData.documents.photo.name}</div>
                          <div className="file-size">{(formData.documents.photo.size / 1024).toFixed(2)} KB</div>
                        </div>
                      )}
                    </label>
                  </div>

                  <div className={`upload-box ${formData.documents.panCardFront ? 'has-file' : ''}`}>
                    <input
                      type="file"
                      id="panCardFront"
                      accept="image/*,.pdf"
                      onChange={(e) => handleFileChange('documents', 'panCardFront', e.target.files[0])}
                    />
                    <label htmlFor="panCardFront">
                      <i className="fas fa-id-card"></i>
                      <span>PAN Front Copy</span>
                      <p>Upload PAN card front side</p>
                      {formData.documents.panCardFront && (
                        <div className="file-info">
                          <div className="file-name">{formData.documents.panCardFront.name}</div>
                          <div className="file-size">{(formData.documents.panCardFront.size / 1024).toFixed(2)} KB</div>
                        </div>
                      )}
                    </label>
                  </div>

                  <div className={`upload-box ${formData.documents.panCardBack ? 'has-file' : ''}`}>
                    <input
                      type="file"
                      id="panCardBack"
                      accept="image/*,.pdf"
                      onChange={(e) => handleFileChange('documents', 'panCardBack', e.target.files[0])}
                    />
                    <label htmlFor="panCardBack">
                      <i className="fas fa-id-card"></i>
                      <span>PAN Back Copy</span>
                      <p>Upload PAN card back side</p>
                      {formData.documents.panCardBack && (
                        <div className="file-info">
                          <div className="file-name">{formData.documents.panCardBack.name}</div>
                          <div className="file-size">{(formData.documents.panCardBack.size / 1024).toFixed(2)} KB</div>
                        </div>
                      )}
                    </label>
                  </div>

                  <div className={`upload-box ${formData.documents.aadhaarFront ? 'has-file' : ''}`}>
                    <input
                      type="file"
                      id="aadhaarFront"
                      accept="image/*,.pdf"
                      onChange={(e) => handleFileChange('documents', 'aadhaarFront', e.target.files[0])}
                    />
                    <label htmlFor="aadhaarFront">
                      <i className="fas fa-address-card"></i>
                      <span>Aadhaar Front Copy</span>
                      <p>Upload Aadhaar card front side</p>
                      {formData.documents.aadhaarFront && (
                        <div className="file-info">
                          <div className="file-name">{formData.documents.aadhaarFront.name}</div>
                          <div className="file-size">{(formData.documents.aadhaarFront.size / 1024).toFixed(2)} KB</div>
                        </div>
                      )}
                    </label>
                  </div>

                  <div className={`upload-box ${formData.documents.aadhaarBack ? 'has-file' : ''}`}>
                    <input
                      type="file"
                      id="aadhaarBack"
                      accept="image/*,.pdf"
                      onChange={(e) => handleFileChange('documents', 'aadhaarBack', e.target.files[0])}
                    />
                    <label htmlFor="aadhaarBack">
                      <i className="fas fa-address-card"></i>
                      <span>Aadhaar Back Copy</span>
                      <p>Upload Aadhaar card back side</p>
                      {formData.documents.aadhaarBack && (
                        <div className="file-info">
                          <div className="file-name">{formData.documents.aadhaarBack.name}</div>
                          <div className="file-size">{(formData.documents.aadhaarBack.size / 1024).toFixed(2)} KB</div>
                        </div>
                      )}
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-section mt-4">
                <h4>Agreement</h4>
                <div className={`upload-box agreement-upload ${formData.documents.agreement ? 'has-file' : ''}`}>
                  <input
                    type="file"
                    id="agreement"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => handleFileChange('documents', 'agreement', e.target.files[0])}
                  />
                  <label htmlFor="agreement">
                    <i className="fas fa-file-contract"></i>
                    <span>Upload Agreement</span>
                    <p>Drop here or click here to upload</p>
                    {formData.documents.agreement && (
                      <div className="file-info">
                        <div className="file-name">{formData.documents.agreement.name}</div>
                        <div className="file-size">{(formData.documents.agreement.size / 1024).toFixed(2)} KB</div>
                      </div>
                    )}
                  </label>
                </div>

                <div className="terms-section">
                  <label className="checkbox-container">
                    <input
                      type="checkbox"
                      checked={termsAccepted}
                      onChange={(e) => setTermsAccepted(e.target.checked)}
                    />
                    <span className="checkmark"></span>
                    I agree with terms and condition
                  </label>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="form-step">
            <h3>Authentication Setup</h3>
            <p className="step-description">Choose authentication method for staff login</p>

            <div className="form-section">
              <div className="auth-options">
                <div 
                  className={`auth-option ${formData.authentication.type === 'face' ? 'active' : ''}`}
                  onClick={() => handleChange('authentication', 'type', 'face')}
                >
                  <img src={FaceLock} alt="Face Recognition" />
                  <h4>Face Recognition</h4>
                  <p>Secure login using facial recognition technology</p>
                </div>

                <div 
                  className={`auth-option ${formData.authentication.type === 'finger' ? 'active' : ''}`}
                  onClick={() => handleChange('authentication', 'type', 'finger')}
                >
                  <img src={FingerLock} alt="Fingerprint" />
                  <h4>Fingerprint</h4>
                  <p>Quick access using fingerprint authentication</p>
                </div>

                <div 
                  className={`auth-option ${formData.authentication.type === 'pin' ? 'active' : ''}`}
                  onClick={() => handleChange('authentication', 'type', 'pin')}
                >
                  <img src={PinCode} alt="PIN Code" />
                  <h4>PIN Code</h4>
                  <p>Traditional security using a numeric PIN</p>
                </div>
              </div>

              <div className="form-row mt-4">
                <div className="form-group">
                  <label>Joining Date</label>
                  <input
                    type="date"
                    value={formData.role.joiningDate}
                    onChange={(e) => handleChange('role', 'joiningDate', e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="create-staff-page">
      {renderProgressSteps()}

      <form className="staff-form" onSubmit={handleSubmit}>
        {renderStepContent(activeStep)}

        <div className="form-actions">
          <div className="action-left">
            {activeStep > 1 && (
              <button type="button" className="back-btn" onClick={handleBack}>
                <i className="fas fa-arrow-left"></i>
                Back
              </button>
            )}
          </div>
          <div className="action-right">
            {activeStep < 4 ? (
              <button type="button" className="next-btn" onClick={handleNext}>
                Continue
                <i className="fas fa-arrow-right"></i>
              </button>
            ) : (
              <button type="submit" className="submit-btn">
                Create Staff
                <i className="fas fa-check"></i>
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateNewStaff;
