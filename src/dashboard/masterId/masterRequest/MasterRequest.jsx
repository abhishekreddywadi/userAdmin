import React, { useState, useContext } from "react";
import UserContext from "../../../context/UserContext";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./masterRequest.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faHouse,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Shield from '../../../assets/img/shield.png'

import FingerLock from "../../../assets/img/finger-lock.png";
import PinCode from "../../../assets/img/pin.png";
import FaceLock from "../../../assets/img/lock.png";

function MasterRequest() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    Guardian: "",
    email: "",
    nickName: "",
   
    phoneNumber: "",
    country: "",
    city: "",
    state: "",
    postalCode: "",
    govId: "",
    aadharNumber: "",
    panCardNumber: "",
    status: "",
    report: "",
    termsAccepted: false,
    signature: "",
    date: "",
    fatherName: "",
    motherName: "",
    localAddress: "",
    panFront: null,
    panBack: null,
    aadhaarFront: null,
    aadhaarBack: null,
    file: null,
  });

  const [showFaceSignature, setShowFaceSignature] = useState(false);
  const [showPinSignature, setShowPinSignature] = useState(false);
  const [showFingerSignature, setShowFingerSignature] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const { rfIdActive, masterFormActive } = useContext(UserContext);
  let timer;

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  console.log("formData", formData);

  const handleFaceShow = () => {
    setShowFaceSignature(!showFaceSignature);
    setShowPinSignature(false);
    setShowFingerSignature(false);
  };
  const handleFingerShow = () => {
    setShowFaceSignature(false);
    setShowPinSignature(false);
    setShowFingerSignature(!showFaceSignature);
  };
  const handlePinShow = () => {
    setShowFaceSignature(false);
    setShowPinSignature(!showPinSignature);
    setShowFingerSignature(false);
  };

  const handleMouseEnter = () => {
    setIsActive(true);
    timer = setTimeout(() => {
      setIsCompleted(true);
    }, 1700);
  };

  const handleMouseLeave = () => {
    clearTimeout(timer);
    setIsActive(false);
    setIsCompleted(false);
  };

  console.log("showFaceSignature", showFaceSignature);
  console.log("showPinSignature", showPinSignature);
  console.log("showFingerSignature", showFingerSignature);
  console.log("masterFormActive", masterFormActive);

  return (
    <div className="container">
      <Form onSubmit={handleSubmit} className="registration-form my-5">
        <h5> New User Under-16 Form</h5>
        <div className="profile-details p-4 mb-4">
          <div className="profile-content-wrapper d-flex justify-content-between align-items-start">
            <div className="left-content">
              <div className="d-flex align-items-start gap-4">
                <div className="profile-img"></div>
                <div className="profile-content">
                  <h6 className="mb-2">Pankaj Singh</h6>
                  <h6 className="mb-3">Pankaj Singh Guardian</h6>
                  <span className="d-block mb-1 text-muted">MUI_123456</span>
                  <span className="d-block mb-3 text-muted">3/05/1993</span>
                  <p className="mb-1 text-muted">Account Created on</p>
                  <p className="fw-medium">12/10/2024</p>
                </div>
              </div>
            </div>

            <div className="right-content">
              <div className="info-item mb-4">
                <span className="label">Nick Name:</span>
                <span className="value">Panku</span>
              </div>
              <div className="info-item mb-3">
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                <a href="mailto:pankajsingh@gmail.com">pankajsingh@gmail.com</a>
              </div>
              <div className="info-item mb-3">
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                <a href="tel:+911234567890">+91 1234567890</a>
              </div>
              <div className="info-item">
                <FontAwesomeIcon icon={faHouse} className="me-2" />
                <span>Banglore, Karnataka, Bharat</span>
              </div>
            </div>
          </div>
        </div>

        <Row>
          <Col md={4}>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="shree"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="ganesh"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="lastName">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                placeholder="Male"
              />
            </Form.Group>
          </Col>
          {/* dob */}
          <Col md={4}>
            <Form.Group controlId="lastName">
              <Form.Label>Date Of Birth</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                placeholder="shreeganesha@gmail.com"
              />
            </Form.Group>
          </Col>
          <Col md={4} >
          <Form.Group controlId="nickName">
            <Form.Label>Nick Name</Form.Label>
            <Form.Control
              type="text"
              name="nickName"
              value={formData.nickName}
              onChange={handleChange}
              placeholder="Ganesh"
            />
          </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="lastName">
              <Form.Label>Guardian Relation</Form.Label>
              <Form.Control
                type="text"
                name="Guardian"
                value={formData.Guardian}
                onChange={handleChange}
                placeholder="mother"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
       
          <Col md={4}>
            <Form.Group controlId="email">
              <Form.Label> Guardian Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="shreeganesha@gmail.com"
              />
            </Form.Group>
          </Col>
          <Col md={4} >
          <Form.Group controlId="govId">
            <Form.Label>Guardian Master User ID</Form.Label>
            <Form.Control
              type="text"
              name="govId"
              value={formData.govId}
              onChange={handleChange}
              placeholder="MUI_123456"
            />
          </Form.Group>
          </Col>
          
          <Col md={4}>
            <Form.Group controlId="country">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="India"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
         
          <Col md={4}>
            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Bangalore"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="state">
              <Form.Label>State/Province</Form.Label>
              <Form.Control
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Karnataka"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="postalCode">
              <Form.Label>Postal Code</Form.Label>
              <Form.Control
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                placeholder="560001"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
         
          {/* nick name */}
        
          {/* adhar number */}
          <Col md={4} >
          <Form.Group controlId="aadharNumber">
            <Form.Label>Aadhar Number</Form.Label>
            <Form.Control
              type="text"
              name="aadharNumber"
              value={formData.aadharNumber}
              onChange={handleChange}
              placeholder="1234567890"
            />
          </Form.Group>
          </Col>
         
          <Col md={4}>
            <Form.Group controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="+91234567890"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
          <Form.Group controlId="schoolName">
            <Form.Label>School Name</Form.Label>
            <Form.Control
              type="text"
              name="schoolName"
              value={formData.schoolName}
              onChange={handleChange}
              placeholder="ABC School"
            />
          </Form.Group>
          </Col>
        </Row>
        {/* gardian master user id */}
        <Row>
         
          {/* scholl name */}
         
        </Row>

        

       

        <Row>
          <Col md={6}>
            <Form.Group controlId="status">
              <Form.Label>Select Status</Form.Label>
              <Form.Control
                as="select"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="Rejected">Request KYC</option>
                <option value="In review">Block user</option>
                <option value="Approved">Approved</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="report">
              <Form.Label>Submit Your Report</Form.Label>
              <Form.Control
                as="textarea"
                name="report"
                value={formData.report}
                onChange={handleChange}
                placeholder="Uploaded documents didn't matched the criteria. Please upload your documents again."
              />
            </Form.Group>
          </Col>
        </Row>

        {formData.status === "Approved" && (
          <Row>
            <Col md={4}>
              <Form.Group controlId="fathername">
                <Form.Label>Father Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  placeholder="Father Name"
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="mothername">
                <Form.Label>Mother Name</Form.Label>
                <Form.Control
                  type="text"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleChange}
                  placeholder="Mother Name"
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="localaddress">
                <Form.Label>Local Address</Form.Label>
                <Form.Control
                  type="text"
                  name="localAddress"
                  value={formData.localAddress}
                  onChange={handleChange}
                  placeholder="Local Address"
                />
              </Form.Group>
            </Col>
          </Row>
        )}

        <div className="upload-section">
          <h6>Upload Attachment</h6>
          <div className="upload-box">
            <input
              type="file"
              name="file"
              id="fileUpload"
              className="file-input"
              onChange={handleChange}
            />
            <label htmlFor="fileUpload mb-0">
              {formData.file ? (
                < >
                  <span className="d-flex w-100 h-100">
                    <img
                      src={URL.createObjectURL(formData.file)}
                      alt="img"
                      style={{
                        height: "100%",
                        borderRadius: 5,
                        width: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </span>
                </ >
              ) : (
                "Drop here or click here to upload"
              )}
            </label>
          </div>
        </div>

        <Form.Group controlId="termsAccepted">
          <Form.Check
            type="checkbox"
            name="termsAccepted"
            label="I agree with terms and condition."
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
        </Form.Group>

        <Row>
          <Col md={6}>
            <Form.Group controlId="signature">
              <Form.Label className="d-flex align-items-center justify-content-between gap-2">
                Choose you signature key
                <div className="signature-list d-flex align-items-center">
                  <div
                    className="d-flex flex-column justify-content-center align-items-center"
                    onClick={() => handleFingerShow()}
                  >
                    <img
                      src={FingerLock}
                      alt="signature-icon"
                      style={{ height: 25, width: 25 }}
                    />{" "}
                    Fingerprint
                  </div>

                  <div
                    className="mx-3 d-flex flex-column justify-content-center align-items-center"
                    onClick={() => handlePinShow()}
                  >
                    <img
                      src={PinCode}
                      alt="signature-icon"
                      style={{ height: 25, width: 25 }}
                    />{" "}
                    Passcode
                  </div>

                  <div
                    className="d-flex flex-column justify-content-center align-items-center"
                    onClick={() => handleFaceShow()}
                  >
                    <img
                      src={FaceLock}
                      alt="signature-icon"
                      style={{ height: 25, width: 25 }}
                    />{" "}
                    Face ID
                  </div>
                </div>
              </Form.Label>
              {showFingerSignature && <a id="button"></a>}
              {showPinSignature && (
                <Form.Control
                  type="text"
                  name="signature"
                  value={formData.signature}
                  onChange={handleChange}
                />
              )}
              {showFaceSignature && (
                <div class="canvas">
                  <div
                    className={`face-id-wrapper ${isActive ? "active" : ""} ${
                      isCompleted ? "completed" : ""
                    }`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <svg
                      class="face-id-default"
                      version="1.1"
                      viewBox="0 0 30 30"
                    >
                      <path
                        d="M12.062 20c.688.5 1.688 1 2.938 1s2.25-.5 2.938-1M20 12v2M10 12v2M15 12v4a1 1 0 0 1-1 1"
                        fill="none"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                      />
                      <g
                        fill="none"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                      >
                        <path d="M26 9V6a2 2 0 0 0-2-2h-3M9 4H6a2 2 0 0 0-2 2v3M21 26h3a2 2 0 0 0 2-2v-3M4 21v3a2 2 0 0 0 2 2h3" />
                      </g>
                    </svg>
                    <div class="circle green"></div>
                    <div class="circle blue"></div>
                    <div class="circle purple"></div>
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 80 80"
                    >
                      <path
                        class="path-tick"
                        stroke="#FFF"
                        stroke-width="5"
                        fill="none"
                        stroke-linecap="butt"
                        stroke-linejoin="butt"
                        d="M 25,45 35,55 60,30"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Button
          variant="primary"
          type="submit"
          className="submit-btn d-flex mx-auto mr-md-0"
        >
          <Link to="/profile" style={{ color: "#fff", textDecoration: "none" }}>
            Done
          </Link>
        </Button>
      </Form>
    </div>
  );
}

export default MasterRequest;
