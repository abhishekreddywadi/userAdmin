import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../masterRequest/masterRequest.scss';

import FingerLock from "../../../assets/img/finger-lock.png";
import PinCode from "../../../assets/img/pin.png";
import FaceLock from "../../../assets/img/lock.png";

function MasterReapply() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    city: "",
    state: "",
    postalCode: "",
    govId: "",
    aadharNumber: "",
    panCardNumber: "",
    status: "Approved",
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

  return (
    <div className="container">
      <Form onSubmit={handleSubmit} className="registration-form my-5">
        <h5>MASTER ID Registration request</h5>
        <Row className="justify-content-between">
          <Col md={6}>
            <div className="profile-info">
              <div className="profile-photo"></div>
              <div className="profile-details">
                <h6>PANKAJ SHING</h6>
                <p>MUI_123456</p>
                <p>3/05/1996</p>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="contact-info">
              <h6>NICK NAME: PANKU</h6>
              <p>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                  </svg>
                </span>{" "}
                PANKAJSHING@GMAIL.COM
              </p>
              <p>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-telephone-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                    />
                  </svg>
                </span>{" "}
                +91 9995555599
              </p>
              <p>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-house-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                    <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
                  </svg>
                </span>{" "}
                BANGALORE KARNATAKA BHARAT
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Pankaj"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Yadav"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="pankajyadav@gmail.com"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
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
        </Row>

        <Row>
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
        </Row>

        <Row>
          <Col md={4}>
            <Form.Group controlId="postalCode">
              <Form.Label>Postal Code</Form.Label>
              <Form.Control
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                placeholder="144040"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="govId">
              <Form.Label>GOV ID</Form.Label>
              <Form.Control
                type="text"
                name="govId"
                value={formData.govId}
                onChange={handleChange}
                placeholder="Aadhar Card"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="aadharNumber">
              <Form.Label>Aadhaar Number</Form.Label>
              <Form.Control
                type="text"
                name="aadharNumber"
                value={formData.aadharNumber}
                onChange={handleChange}
                placeholder="985689745925"
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="panCardNumber">
          <Form.Label>PAN Card Number</Form.Label>
          <Form.Control
            type="text"
            name="panCardNumber"
            value={formData.panCardNumber}
            onChange={handleChange}
            placeholder="IPP980W37"
          />
        </Form.Group>

        <div className="attachment-section">
          <h6>Proof Attachment</h6>
          <div className="attachments">
            <div className="attachment">
              <label>PAN Front Copy</label>
              <input
                type="file"
                name="panFront"
                className="file-input"
                onChange={handleChange}
              />
              {formData.panFront && (
                <span className="d-flex w-100">
                  <img
                    src={URL.createObjectURL(formData.panFront)}
                    alt="img"
                    style={{
                      height: 149,
                      borderRadius: 5,
                      width: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </span>
              )}
            </div>
            <div className="attachment">
              <label>PAN Back Copy</label>
              <input
                type="file"
                name="panBack"
                className="file-input"
                onChange={handleChange}
              />
              {formData.panBack && (
                <span className="d-flex w-100">
                  <img
                    src={URL.createObjectURL(formData.panBack)}
                    alt="img"
                    style={{
                      height: 149,
                      borderRadius: 5,
                      width: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </span>
              )}
            </div>
            <div className="attachment">
              <label>Aadhaar Front Copy</label>
              <input
                type="file"
                name="aadhaarFront"
                className="file-input"
                onChange={handleChange}
              />
              {formData.aadhaarFront && (
                <span className="d-flex w-100">
                  <img
                    src={URL.createObjectURL(formData.aadhaarFront)}
                    alt="img"
                    style={{
                      height: 149,
                      borderRadius: 5,
                      width: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </span>
              )}
            </div>
            <div className="attachment">
              <label>Aadhaar Back Copy</label>
              <input
                type="file"
                name="aadhaarBack"
                className="file-input"
                onChange={handleChange}
              />
              {formData.aadhaarBack && (
                <span className="d-flex w-100">
                  <img
                    src={URL.createObjectURL(formData.aadhaarBack)}
                    alt="img"
                    style={{
                      height: 149,
                      borderRadius: 5,
                      width: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </span>
              )}
            </div>
          </div>
        </div>

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
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
                <option value="In review">In review</option>
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
                  name="fathername"
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
                  name="mothername"
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
                  name="localaddress"
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
                <>
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
                </>
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
          <Link to="/reapply-profile" style={{ color: "#fff", textDecoration: "none" }}>
            Done
          </Link>
        </Button>
      </Form>
    </div>
  );
}

export default MasterReapply;
