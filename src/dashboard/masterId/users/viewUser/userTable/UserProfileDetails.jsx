import React, { useContext } from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faHouse, faLock, faEllipsisVertical, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import UserImg from '../../../../../assets/img/user1.png';
import Shield from '../../../../../assets/img/shield.png';
import FaceLock from '../../../../../assets/img/face-recognition.png';

// //////////////////////////

import ProofImg from "../../../../../assets/img/proof.webp";
import AadharImg from "../../../../../assets/img/aadhaar-card.webp";
import PanCardImg from "../../../../../assets/img/pan-card.jpg";
import FatherImg from "../../../../../assets/img/father.png";
import MotherImg from "../../../../../assets/img/mother.png";
import UserContext from '../../../../../context/UserContext';
import "./UserProfileDetails.scss";
import "../../../profile/profile.scss";





const UserProfileDetails = () => {
  const { rfIdActive } = useContext(UserContext);

  const userData = {
    name: "Rohan Talpadhi",
    id: "MU_123456",
    dob: "3/xx/19xx",
    age: "16+",
    gender: "F",
    accountDate: "25/12/2024",
    nickName: "PANKU",
    email: "user@gmail.com",
    phone: "+311234567890",
    location: "BANGALORE KARNATKA BHARAT",
    masterID: {
      status: "NOT ACTIVE",
      verified: true,
      id: "BHXXXXXXXXXX67"
    },
    myID: {
      status: "ACTIVE",
      id: "BHXXXXXXXXXX67"
    },
    businesses: "5/3"
  };

  const ProfileContent = () => (
    <>
      <div className="profile-main-info">
        <div className="profile-left">
          <img src={UserImg} alt="Profile" className="profile-image" />
          <div className="profile-badges">
            <div className="name">{userData.name}</div>
            <div className="badge-group">
              <span className="badge">{userData.id}</span>
              <span className="badge">{userData.gender}</span>
            </div>
            <div className="badge-group">
              <span className="badge">{userData.dob}</span>
              <span className="badge">{userData.age}</span>
            </div>
          </div>
        </div>
        <div className="profile-right">
          <div className="account-date">
            <span className="date-label">Account open date.</span>
            <span className="date">{userData.accountDate}</span>
          </div>
        </div>
      </div>

      {/* Other Information */}
      <div className="other-info-section">
        <div className="other-info-header" style={{background:"#F47C7C",height:"50px" ,textAlign:"left",fontSize:"20px",boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.25)"}}>Other information</div>
        
        <div className="info-content">
          <div className="left-section">
            {/* KYC Verification */}
            <div className="kyc-verification mb-4">
              <h6 className="mb-3">KYC Verification</h6>
              <div className="d-flex align-items-center gap-3">
                <div className="kyc-item">
                  <img src={FaceLock} alt="Face ID" className="kyc-icon" />
                  <span className="verified-badge">✓</span>
                </div>
                <div className="kyc-item">
                  <img src={Shield} alt="Shield" className="kyc-icon" />
                  <span className="verified-badge">✓</span>
                </div>
              </div>
            </div>
            
            {/* Locked Info Items */}
            <div className="locked-item   shadow-lg " style={{background:"#F47C7C",height:"50px"}}  >
              <span className="icon-wrapper" style={{marginRight:"10px"}}>
                <img src={UserImg}  style={{borderRadius:"50%",width:"25px",height:"25px"}} alt="Family" className="small-icon" />
              </span>
              <span style={{fontSize:"16px"}} >Family info</span>
              <FontAwesomeIcon icon={faLock} className="lock-icon mr-4" />
            </div>
            <div className="locked-item  shadow-lg " style={{background:"#F47C7C",height:"50px"}}  >
              <span className="icon-wrapper">
                <FontAwesomeIcon icon={faHouse} className="house-icon" />
              </span>
              <span style={{fontSize:"16px"}} >House hold</span>
              <FontAwesomeIcon icon={faLock} style={{color:"black"}} className="lock-icon mr-4" />
            </div>
            <div className="locked-item shadow-lg " style={{background:"#F47C7C",height:"50px"}}  >
            <span className="icon-wrapper">
                <FontAwesomeIcon icon={faHouse} className="house-icon" />
              </span>
              <span style={{fontSize:"16px"}} >Encrypted Password</span>
              <FontAwesomeIcon icon={faLock} style={{color:"black"}} className="lock-icon mr-4" />
            </div>
            <div className="locked-item shadow-lg " style={{background:"#F47C7C",height:"50px"}}  >
            <span className="icon-wrapper">
                <FontAwesomeIcon icon={faHouse} width={"50px"} className="house-icon" />
              </span>
              <span style={{fontSize:"16px"}} >Encrypted Password</span>
              <FontAwesomeIcon icon={faLock} style={{color:"black"}} className="lock-icon mr-4" />
            </div>
            <div className="locked-item shadow-lg " style={{background:"#F47C7C",height:"50px"}}  >
            <span className="icon-wrapper">
                <FontAwesomeIcon icon={faHouse} className="house-icon" />
              </span>
              <span style={{fontSize:"16px"}} >Encrypted Password</span>
              <FontAwesomeIcon icon={faLock} style={{color:"black"}} className="lock-icon mr-4" />
            </div>
          </div>

          <div className="right-section" style={{fontSize:"16px"}} >
            <div className="nick-name">
              <span className="label">NICK NAME</span>
              <span className="value">{userData.nickName}</span>
            </div>
            <div className="contact-info">
              <div className="info-item">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                <span>{userData.email}</span>
                <div className="verified-icon mr-4 ">
                  <img src={Shield} alt="Verified" className="shield-icon" />
                  <span className="verified-badge">✓</span>
                </div>
              </div>
              <div className="info-item">
                <FontAwesomeIcon icon={faPhone} className="icon" />
                <span>{userData.phone}</span>
                <div className="verified-icon mr-4">
                  <img src={Shield} alt="Verified" className="shield-icon" />
                  <span className="verified-badge">✓</span>
                </div>
              </div>
              <div className="info-item">
                <FontAwesomeIcon icon={faHouse} className="icon" />
                <span>{userData.location}</span>
              </div>
            </div>

            {/* Master ID and My ID Status */}
            <div className="id-status mt-4">
              <div className="status-item">
                <h6>Master ID</h6>
                <p className={`status ${userData.masterID.status === 'ACTIVE' ? 'active' : ''}`}>
                  {userData.masterID.status}
                </p>
                {userData.masterID.id && <p className="id-number">{userData.masterID.id}</p>}
              </div>
              <div className="status-item">
                <h6>My ID</h6>
                <p className={`status ${userData.myID.status === 'ACTIVE' ? 'active' : ''}`}>
                  {userData.myID.status}
                </p>
                {userData.myID.id && <p className="id-number">{userData.myID.id}</p>}
              </div>
              <div className="status-item">
                <h6>Businesses</h6>
                <p>{userData.businesses}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ///////////////// */}
    
      {/* ////////////// */}
    </>
  );
// /////////////////////////////////////
const ProfileContentOne = () => (
  <>
    <div className="profile-main-info">
      <div className="profile-left">
        <img src={UserImg} alt="Profile" className="profile-image" />
        <div className="profile-badges">
          <div className="name">{userData.name}</div>
          <div className="badge-group">
            <span className="badge">{userData.id}</span>
            <span className="badge">{userData.gender}</span>
          </div>
          <div className="badge-group">
            <span className="badge">{userData.dob}</span>
            <span className="badge">{userData.age}</span>
          </div>
        </div>
      </div>
      <div className="profile-right">
        <div className="account-date">
          <span className="date-label">Account open date.</span>
          <span className="date">{userData.accountDate}</span>
        </div>
      </div>
    </div>

    {/* Other Information */}
    <div className="other-info-section">
      <div className="other-info-header" style={{background:"#F47C7C",height:"50px" ,textAlign:"left",fontSize:"20px",boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.25)"}}>Other information</div>
      
      <div className="info-content h-250 ">
      

       
      </div>
    </div>
  </>
);
const ProfileContenttwo = () => (
  
  <>
      <div className="profile-verify-info">
            <Tabs
              defaultActiveKey={rfIdActive ? "myid" : "master"}
              id="uncontrolled-tab-example"
              className="mb-3 mt-5"
            >
              <Tab eventKey="master" title="Master ID Request">
                <h4 className="mb-4">Master ID Request 2/3</h4>
                <div className="tab-content-data">
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-5 border-md-right">
                      <div className="master-req-img-container">
                        <div className="master-req-img d-flex align-items-center">
                          <span className="img"></span>
                        </div>
                        <div className="master-req-content pl-3">
                          <p className="mb-1">
                            Name <span>Pankaj</span>
                          </p>
                          <p className="mb-0">
                            <span className="icon">
                              <FontAwesomeIcon icon={faEnvelope} />
                            </span>{" "}
                            <span>pankaj@gmail.com</span>
                          </p>
                          <p>
                            <span className="icon">
                              <FontAwesomeIcon icon={faPhone} />
                            </span>{" "}
                            <span>+91123456789</span>
                          </p>
                          <p>
                            <span className="icon">
                              <FontAwesomeIcon icon={faLocationDot} />
                            </span>{" "}
                            <span>Bangalore, Karnataka, India, 144040</span>
                          </p>
                          <p>
                            <img src={AadharImg} alt="aadhar" />{" "}
                            <span>567XXXXXX567</span>
                          </p>
                          <p>
                            <img src={PanCardImg} alt="pan" />{" "}
                            <span>btmv2523</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-7">
                      <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                          <div
                            className="master-verified d-flex flex-column justify-content-center align-items-center"
                            style={{ gap: 8 }}
                          >
                            <strong>Verified by</strong>
                            <img src={UserImg} alt="proof" className="proof" />
                            <strong>Raman Kumar</strong>
                            <strong>MBS1234567</strong>
                            <strong>Signature: PIN</strong>
                            <p className="mb-0">You</p>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-8">
                          <div className="master-status">
                            <h5 className="accept">
                              Status: <strong>ACCEPTED</strong>
                            </h5>
                            <h5 className="accept">
                              Reason:
                              <strong>Your provided proofs are accepted</strong>
                            </h5>
                            <div className="d-flex flex-column">
                              <h5>
                                Attach Proof:
                                <img
                                  src={ProofImg}
                                  alt="proof"
                                  className="proof"
                                />
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-content-data">
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-5 border-md-right">
                      <div className="master-req-img-container">
                        <div className="master-req-img d-flex align-items-center">
                          <span className="img"></span>
                        </div>
                        <div className="master-req-content pl-3">
                          <p className="mb-1">
                            Name <span>Pankaj</span>
                          </p>
                          <p className="mb-0">
                            <span className="icon">
                              <FontAwesomeIcon icon={faEnvelope} />
                            </span>{" "}
                            <span>pankaj@gmail.com</span>
                          </p>
                          <p>
                            <span className="icon">
                              <FontAwesomeIcon icon={faPhone} />
                            </span>{" "}
                            <span>+91123456789</span>
                          </p>
                          <p>
                            <span className="icon">
                              <FontAwesomeIcon icon={faLocationDot} />
                            </span>{" "}
                            <span>Bangalore, Karnataka, India, 144040</span>
                          </p>
                          <p>
                            <img src={AadharImg} alt="aadhar" />{" "}
                            <span>567XXXXXX567</span>
                          </p>
                          <p>
                            <img src={PanCardImg} alt="pan" />{" "}
                            <span>btmv2523</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-7">
                      <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                          <div
                            className="master-verified d-flex flex-column justify-content-center align-items-center"
                            style={{ gap: 8 }}
                          >
                            <strong>Verified by</strong>
                            <img src={UserImg} alt="proof" className="proof" />
                            <strong>Rohan Singh</strong>
                            <strong>MBS1234567</strong>
                            <strong>Signature: PIN</strong>
                            {/* <p className="mb-0">You</p> */}
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-8">
                          <div className="master-status">
                            <h5 className="reject">
                              Status: <strong>REJECT</strong>
                            </h5>
                            <h5 className="reject">
                              Reason:
                              <strong>
                                Id Proof did not matched/Documents are fake
                              </strong>
                            </h5>
                            <div className="d-flex flex-column">
                              <h5>
                                Attach Proof:
                                <img
                                  src={ProofImg}
                                  alt="proof"
                                  className="proof"
                                />
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="myid" title="My ID">
                <div className="tab-content-data">
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-5 border-md-right">
                      <div className="master-req-img-container">
                        <div className="master-req-img d-flex align-items-center">
                          <span className="img"></span>
                        </div>
                        <div className="master-req-content pl-3">
                          <p className="mb-1">
                            Name <span>Pankaj</span>
                          </p>
                          <p className="mb-0">
                            <span className="icon">
                              <FontAwesomeIcon icon={faEnvelope} />
                            </span>{" "}
                            <span>pankaj@gmail.com</span>
                          </p>
                          <p>
                            <span className="icon">
                              <FontAwesomeIcon icon={faPhone} />
                            </span>{" "}
                            <span>+91123456789</span>
                          </p>
                          <p>
                            <span className="icon">
                              <FontAwesomeIcon icon={faLocationDot} />
                            </span>{" "}
                            <span>Bangalore, Karnataka, India, 144040</span>
                          </p>
                          <p>
                            <img src={AadharImg} alt="aadhar" />{" "}
                            <span>567XXXXXX567</span>
                          </p>
                          <p>
                            <img src={PanCardImg} alt="pan" />{" "}
                            <span>btmv2523</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-7">
                      <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                          <div
                            className="master-verified d-flex flex-column justify-content-center align-items-center"
                            style={{ gap: 8 }}
                          >
                            <strong>Verified by</strong>
                            <img src={UserImg} alt="proof" className="proof" />
                            <strong>Rohan Singh</strong>
                            <strong>MBS1234567</strong>
                            <strong>Signature: PIN</strong>
                            <p className="mb-0">You</p>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-8">
                          <div className="master-status">
                            <h5 className="accept">
                              Status: <strong>ACCEPTED</strong>
                            </h5>
                            <h5 className="accept">
                              Reason:
                              <strong>Your provided proofs are accepted</strong>
                            </h5>
                            <div className="d-flex flex-column">
                              <h5>
                                Attach Proof:
                                <img
                                  src={ProofImg}
                                  alt="proof"
                                  className="proof"
                                />
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="business" title="Business" disabled>
                Tab content for Contact
              </Tab>
            </Tabs>
          </div>

    {/* Other Information */}
    <div className="other-info-section">
      <div className="other-info-header" style={{background:"#F47C7C",height:"50px" ,textAlign:"left",fontSize:"20px",boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.25)"}}>Other information</div>
      
      <div className="info-content h-250 ">
      

       
      </div>
    </div>
  </>
);

  return (
    <>
    <Container className="user-profile-details">
      <Tabs
        defaultActiveKey="account1"
        className="mb-3 user-account-tabs"
        >
        <Tab eventKey="account1" title="USER ACCOUNT">
          <ProfileContent />
          
        </Tab>
        
        <Tab eventKey="account2" title="USER ACCOUNT">
          <ProfileContentOne />
        </Tab>
        <Tab eventKey="account3" title="USER ACCOUNT">
          <ProfileContenttwo />
        </Tab>
      </Tabs>
    </Container>
    <div className="container mt-5 ">
        
        <div className="profile-container font-weight-bold text-dark " style={{ display:"flex",alignItems:"center",paddingLeft:"20px", fontSize:"20px",backgroundColor:"white",height:"50px",boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.25)"}} >
          Login History
          <div className="profile-verify-info" >

          </div>
        
        </div>
      </div>
      <div className="container mt-5 ">
        <div className="profile-container font-weight-bold text-dark" style={{ display:"flex",alignItems:"center",paddingLeft:"20px", fontSize:"20px",backgroundColor:"white",height:"50px",boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.25)"}}>
          Activity
          <div className="profile-verify-info" >

          
          </div>
        
        </div>
        </div>
    
        </>
  );
};

export default UserProfileDetails;
