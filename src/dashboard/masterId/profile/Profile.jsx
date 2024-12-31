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
import UserImg from "../../../assets/img/user1.png"
import FatherImg from "../../../assets/img/father.png";
import MotherImg from "../../../assets/img/mother.png";
import Shield from "../../../assets/img/shield.png"

function Profile() {
  const { rfIdActive, businessFormActive } = useContext(UserContext);
  console.log("rfIdActive", rfIdActive);
  return (
    <div className="profile pt-2 pb-5">
      <div className="container">
        <div className="profile-container">
          <div className="profile-verify-info" >

          <Tabs
              defaultActiveKey={rfIdActive ? "USER INFO" : businessFormActive? "business" : "USER INFO"}
              id="uncontrolled-tab-example"
              className="mb-3 mt-5"
          >
            <Tab eventKey="USER INFO" title="USER INFO">
              <div className="profile-details p-4 mb-4">
                <div className="profile-content-wrapper d-flex justify-content-between align-items-start">
                  <div className="left-content">
                    <div className="d-flex align-items-start gap-4">
                      <div className="profile-img"></div>
                      <div className="profile-content">
                        <h6 className="mb-2">Pankaj Singh</h6>
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
                      <a href="mailto:pankajsingh@gmail.com">
                        pankajsingh@gmail.com
                      </a>
                    </div>
                    <div className="info-item mb-3">
                      <FontAwesomeIcon icon={faPhone} className="me-2" />
                      <a href="tel:+911234567890">+91 1234567890</a>
                    </div>
                    <div className="info-item mb-3">
                      <FontAwesomeIcon icon={faHouse} className="me-2" />
                      <span>Banglore, Karnataka, Bharat</span>
                    </div>
                    <div className="info-item mb-3 d-flex align-items-center justify-content-end">
                      <img
                        src={MotherImg}
                        alt="mother"
                        className="me-2"
                        style={{ width: 24 }}
                      />
                      <span className="me-3">Rohani</span>
                      <FontAwesomeIcon
                        icon={faEdit}
                        className="edit-icon"
                      />
                    </div>
                    <div className="info-item d-flex align-items-center justify-content-end">
                      <img
                        src={FatherImg}
                        alt="father"
                        className="me-2"
                        style={{ width: 24 }}
                      />
                      <span className="me-3">Nill</span>
                      <FontAwesomeIcon
                        icon={faEdit}
                        className="edit-icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
              <Tab eventKey="business" title="USER ADDITIONAL INFO" >
                Tab content for Contact
              </Tab>
          </Tabs>
          </div>
        
        </div>
      </div>
      {/* /////////////////////////////// */}
      <div className="container mt-5 ">
        
        <div className="profile-container font-weight-bold text-dark">
          Login History
          <div className="profile-verify-info" >

          </div>
        
        </div>
      </div>
      <div className="container mt-5 ">
        <div className="profile-container font-weight-bold text-dark">
          Activity
          <div className="profile-verify-info" >

          
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default Profile;
