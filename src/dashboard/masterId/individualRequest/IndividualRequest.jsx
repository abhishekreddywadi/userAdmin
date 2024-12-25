import React, { useState, useContext } from "react";
import UserContext from "../../../context/UserContext";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./individualRequest.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import Shield from "../../../assets/img/shield.png";
import Certificate from "../../../assets/img/certificate.png";
import Aadhar from "../../../assets/img/aadhaar-card.webp";
import PanCard from "../../../assets/img/pan-card.jpg";
import PayPdf from "../../../assets/img/Payslip-new.pdf";
import IndividualModal from "./individualModal/IndividualModal";
import FingerLock from "../../../assets/img/finger-lock.png";
import PinCode from "../../../assets/img/pin.png";
import FaceLock from "../../../assets/img/lock.png";

function IndividualRequest() {
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
  const { setMasterFormActive, setRfIdActive } = useContext(UserContext);

  const [showFaceSignature, setShowFaceSignature] = useState(false);
  const [showPinSignature, setShowPinSignature] = useState(false);
  const [showFingerSignature, setShowFingerSignature] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  let timer;

  const [showDocumentOneModal, setShowDocumentOneModal] = useState(false);
  const [showDocumentTwoModal, setShowDocumentTwoModal] = useState(false);
  const [showDocumentThreeModal, setShowDocumentThreeModal] = useState(false);
  const [showDocumentFourModal, setShowDocumentFourModal] = useState(false);

  const handleDocumenetOneClose = () => setShowDocumentOneModal(false);
  const handleDocumentOneShow = () => setShowDocumentOneModal(true);

  const handleDocumenetTwoClose = () => setShowDocumentTwoModal(false);
  const handleDocumentTwoShow = () => setShowDocumentTwoModal(true);

  const handleDocumenetThreeClose = () => setShowDocumentThreeModal(false);
  const handleDocumentThreeShow = () => setShowDocumentThreeModal(true);

  const handleDocumenetFourClose = () => setShowDocumentFourModal(false);
  const handleDocumentFourShow = () => setShowDocumentFourModal(true);

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

  console.log("formData", formData);

  return (
    <div className="container">
      <Form onSubmit={handleSubmit} className="registration-form my-5">
        <h5>Individual ID Registration request</h5>
        <div className="profile-details d-flex flex-wrap align-items-center gap-4">
          <div className="primary-details">
            <div className="profile-img"></div>
            <div className="profile-content">
              <h6>Pankaj Singh</h6>
              <span>MUI_123456</span>
              <span>3/05/1993</span>
              <p>Account Created on</p>
              <p>12/10/2024</p>
            </div>
          </div>
          <div className="secondary-details d-flex align-items-start">
            <div className="secondary-detail-box text-dark px-4">
              <h6 className="mb-2">
                Nick Name: <strong className="pl-2">Panku</strong>
              </h6>
              <p className="d-flex align-items-center mb-2">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{
                    color: "#000",
                    marginRight: 15,
                    width: 30,
                    height: 18,
                  }}
                />{" "}
                <a href="mailto:pankajsingh@gmail.com" className="text-dark">
                  pankajsingh@gmail.com
                </a>
              </p>
              <p className="d-flex align-items-center mb-2">
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{
                    color: "#000",
                    marginRight: 15,
                    width: 30,
                    height: 18,
                  }}
                />
                <a href="tel:+911234567890" className="text-dark">
                  +91 1234567890
                </a>
              </p>
              <p className="d-flex align-items-center mb-2">
                <FontAwesomeIcon
                  icon={faHouse}
                  style={{
                    color: "#000",
                    marginRight: 15,
                    width: 30,
                    height: 18,
                  }}
                />
                Banglore, Karnataka, Bharat
              </p>
            </div>
            <div className="secondary-detail-box text-dark px-4">
              <div className="mb-2">
                <h6 className="mb-0">User Membership</h6>{" "}
                <strong className="pl-4">Not Active</strong>
              </div>
              <div className="mb-2">
                <h6 className="mb-0">Master ID</h6>{" "}
                <strong className="pl-4">BHA1XXXXX5P9</strong>
                <img
                  src={Shield}
                  alt="shield"
                  style={{ width: 20, minWidth: "unset" }}
                />
              </div>
              <div className="mb-2">
                <h6 className="mb-0">Unique ID</h6>{" "}
                <strong className="pl-4 pr-3">24/10/24 5:30PM</strong>
                <h6
                  className="mb-0"
                  style={{
                    color: "#ee6d81",
                    minWidth: "unset",
                    fontWeight: "bold",
                  }}
                >
                  IN REVIEW
                </h6>
              </div>
            </div>
          </div>
        </div>

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

        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Professional Category</Form.Label>
              <div className="tags-container">
                <p className="tags">Musician</p>
                <p className="tags">Artist</p>
              </div>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Professional SubCategory</Form.Label>
              <div className="tags-container">
                <p className="tags">Physical Fitness</p>
                <p className="tags">Wellness</p>
              </div>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Skills</Form.Label>
              <div className="skills-container">
                <p className="skill">Music</p>
                <p className="skill">Dance</p>
                <p className="skill">Fitness</p>
                <p className="skill">Tutor</p>
              </div>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col md={3}>
            <Form.Group>
              <Form.Label>Aadhar Card</Form.Label>
              <div className="document">
                <img src={Aadhar} alt="document" />
              </div>
              <button
                type="button"
                className="btn btn-primary d-flex mx-auto mt-3"
                onClick={() => handleDocumentOneShow()}
              >
                View
              </button>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Identity Certificate</Form.Label>
              <div className="document">
                <img src={Certificate} alt="document" />
              </div>
              <button
                type="button"
                className="btn btn-primary d-flex mx-auto mt-3"
                onClick={() => handleDocumentTwoShow()}
              >
                View
              </button>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>PDF</Form.Label>
              <div className="document">
                <iframe
                  src={PayPdf}
                  style={{ width: "100%", height: "100%", border: "none" }}
                ></iframe>
              </div>
              <button
                type="button"
                className="btn btn-primary d-flex mx-auto mt-3"
                onClick={() => handleDocumentThreeShow()}
              >
                View
              </button>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>PAN Card</Form.Label>
              <div className="document">
                <img src={PanCard} alt="document" />
              </div>
              <button
                type="button"
                className="btn btn-primary d-flex mx-auto mt-3"
                onClick={() => handleDocumentFourShow()}
              >
                View
              </button>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={3}>
            <Form.Group>
              <Form.Label>Video Link #1</Form.Label>
              <div className="document link">
                <iframe
                  src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  title="video"
                />
              </div>
              <button
                type="button"
                className="btn btn-primary d-flex mx-auto mt-3"
                onClick={() => handleDocumentOneShow()}
              >
                Comment
              </button>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Video Link #2</Form.Label>
              <div className="document link">
                <iframe
                  src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  title="video"
                />
              </div>
              <button
                type="button"
                className="btn btn-primary d-flex mx-auto mt-3"
                onClick={() => handleDocumentTwoShow()}
              >
                Comment
              </button>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Video Link #3</Form.Label>
              <div className="document link">
                <iframe
                  src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  title="video"
                />
              </div>
              <button
                type="button"
                className="btn btn-primary d-flex mx-auto mt-3"
                onClick={() => handleDocumentThreeShow()}
              >
                Comment
              </button>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Video Link #4</Form.Label>
              <div className="document link">
                <iframe
                  src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  title="video"
                />
              </div>
              <button
                type="button"
                className="btn btn-primary d-flex mx-auto mt-3"
                onClick={() => handleDocumentFourShow()}
              >
                Comment
              </button>
            </Form.Group>
          </Col>
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
                <option value="Rejected">Rejected</option>
                <option value="In review">In review</option>
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
          <Link
            to={formData.status == "Rejected" ? "/profile" : "/reapply-profile"}
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Done
          </Link>
        </Button>
      </Form>

      {showDocumentOneModal && (
        <IndividualModal
          show={showDocumentOneModal}
          handleClose={handleDocumenetOneClose}
          heading="Aadhar Card"
          modalBody={<img src={Aadhar} alt="document" />}
        />
      )}

      {showDocumentTwoModal && (
        <IndividualModal
          show={showDocumentTwoModal}
          handleClose={handleDocumenetTwoClose}
          heading="Identity Certificate"
          modalBody={<img src={Certificate} alt="document" />}
        />
      )}

      {showDocumentThreeModal && (
        <IndividualModal
          show={showDocumentThreeModal}
          handleClose={handleDocumenetThreeClose}
          heading="PDF"
          modalBody={<iframe src={PayPdf} style={{ border: "none" }}></iframe>}
        />
      )}

      {showDocumentFourModal && (
        <IndividualModal
          show={showDocumentFourModal}
          handleClose={handleDocumenetFourClose}
          heading="PAN Card"
          modalBody={<img src={PanCard} alt="document" />}
        />
      )}
    </div>
  );
}

export default IndividualRequest;
