import React, { useContext } from "react";
import UserContext from "../../../context/UserContext";
import "./profile.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faHouse,
  faLocationDot,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ProofImg from "../../../assets/img/proof.webp";
import AadharImg from "../../../assets/img/aadhaar-card.webp";
import PanCardImg from "../../../assets/img/pan-card.jpg";
import UserImg from "../../../assets/img/user1.png";
import FatherImg from "../../../assets/img/father.png";
import MotherImg from "../../../assets/img/mother.png";
import Shield from "../../../assets/img/shield.png";

function ReApplyProfile() {
  const { rfIdActive } = useContext(UserContext);
  console.log("rfIdActive", rfIdActive);
  return (
    <div className="profile pt-2 pb-5">
      <div className="container">
        <div className="profile-container">
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
                <p className="d-flex align-items-center mb-2">
                  <img
                    src={MotherImg}
                    alt="mother"
                    style={{ width: 30, marginRight: 15 }}
                  />
                  Rohani
                  <FontAwesomeIcon
                    icon={faEdit}
                    style={{ color: "#000", marginLeft: "auto" }}
                  />
                </p>
                <p className="d-flex align-items-center mb-2">
                  <img
                    src={FatherImg}
                    alt="father"
                    style={{ width: 30, marginRight: 15 }}
                  />
                  Nill
                  <FontAwesomeIcon
                    icon={faEdit}
                    style={{ color: "#000", marginLeft: "auto" }}
                  />
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
        </div>
      </div>
    </div>
  );
}

export default ReApplyProfile;
