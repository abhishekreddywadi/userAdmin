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
                 <div className="profile-details d-flex flex-wrap align-items-center gap-4">
            <div className="primary-details">
              <div className="profile-img"></div>
              <div className="profile-content">
                <h6>Pankaj Singh</h6>
                <span>MUI_123456</span>
                <span>3/05/1993</span>
                <p>Account Created on</p>
                <p>12/10/2024 </p>
              </div>
            </div>
            <div className="secondary-details d-flex align-items-end">
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
