import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import UserOne from "../../../../assets/img/user1.png";
import "./customViewStaffDetail.scss";

import FingerLock from "../../../../assets/img/finger-lock.png";
import PinCode from "../../../../assets/img/pin.png";
import FaceLock from "../../../../assets/img/lock.png";

function CustomViewStaffDetail() {
  const staffDetailArray = [
    {
      orderId: "ID0002",
      staffId: "BHA_XXXXXXXXXX",
      requestDate: "11-12-2024",
      dob: "12-12-2019",
      status: "Accepted",
      staffImage: UserOne,
      staffName: "Anjali Govind",
      staffRole: "Sonya Wilson",
      enrollStatus: "ACTIVE",
      department: "Backend Team",
      email: "staff2@gmail.com",
    },
  ];

  const [staffDetail, setStaffDetail] = useState(staffDetailArray);
  const [staffPermissionCheck, setStaffPermissionCheck] = useState(false);
  const [showFaceSignature, setShowFaceSignature] = useState(false);
  const [showPinSignature, setShowPinSignature] = useState(false);
  const [showFingerSignature, setShowFingerSignature] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  let timer;

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

  console.log("staffPermissionCheck", staffPermissionCheck);
  return (
    <div className="custom-view-detail py-2 py-md-5">
      <div className="container justify-content-center">
        <div className="staff-detail-main">
          <div className="staff-detail-left">
            <img
              src={staffDetail[0]?.staffImage}
              alt="price"
              className="w-100"
            />
            <h5>{staffDetail[0]?.staffName}</h5>
            <span>{staffDetail[0]?.department}</span>
            <div className="detail-text">
              <p>Staff ID</p>
              <p>{staffDetail[0]?.staffId}</p>
            </div>
            <div className="detail-text">
              <p>Joining Date </p>
              <p>{staffDetail[0]?.requestDate}</p>
            </div>
            <div className="detail-text">
              <p>DoB</p>
              <p>{staffDetail[0]?.dob}</p>
            </div>
            <div className="detail-text">
              <p>Email</p>
              <p>{staffDetail[0]?.email}</p>
            </div>
          </div>
          <div className="staff-detail-right">
            <div className="detail-right-box"></div>
            <div className="detail-right-box"></div>
            <div className="detail-right-box"></div>
          </div>
        </div>

        <div className="staff-permissions mt-5 text-dark">
          <div className="row mb-4">
            <div
              className={`col-12 col-xl-6 ${
                staffPermissionCheck && "d-flex align-items-center"
              }`}
            >
              <h3 className="mb-0" style={{ fontSize: 20 }}>
                Permission of Staff-City State Ltd.{" "}
                <input
                  type="checkbox"
                  name="staff-permission"
                  id="staff-permission"
                  checked={staffPermissionCheck}
                  onChange={(e) =>
                    setStaffPermissionCheck(!staffPermissionCheck)
                  }
                />
              </h3>
            </div>
            {staffPermissionCheck && (
              <div className="col-12 col-xl-6">
                <div
                  className="location-inputs d-flex flex-wrap"
                  style={{ gap: 10 }}
                >
                  <div className="input-container d-flex flex-column">
                    <label htmlFor="">Enter Country</label>
                    <input type="text" placeholder="Enter Country" />
                  </div>
                  <div className="input-container d-flex flex-column">
                    <label htmlFor="">Enter State</label>
                    <input type="text" placeholder="Enter State" />
                  </div>
                  <div className="input-container d-flex flex-column">
                    <label htmlFor="">Enter City</label>
                    <input type="text" placeholder="Enter City" />
                  </div>
                  <div className="input-container d-flex flex-column">
                    <label htmlFor="">Enter ZIP Code</label>
                    <input type="text" placeholder="Enter ZIP Code" />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="staff-permission-table">
            <table className="w-100">
              <thead>
                <tr>
                  <th>Manage ID</th>
                  <th>Select Type</th>
                  <th>Create</th>
                  <th>View</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div>
                      <input type="checkbox" name="id-1" id="id-1" />
                      <p>Master ID</p>
                    </div>
                  </td>
                  <td>
                    <select name="" id="">
                      <option value="">Select Option</option>
                      <option value="">All</option>
                      <option value="">Individual</option>
                      <option value="">Only Fix ID</option>
                      <option value="">Below 16</option>
                      <option value="">Only 3 Type</option>
                    </select>
                  </td>
                  <td>
                    <input type="checkbox" name="create-1" id="create-1" />
                  </td>
                  <td>
                    <input type="checkbox" name="view-1" id="view-1" />
                  </td>
                  <td>
                    <input type="checkbox" name="edit-1" id="edit-1" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <input type="checkbox" name="id-2" id="id-2" />
                      <p>Master ID Request</p>
                    </div>
                  </td>
                  <td>
                    <select name="" id="">
                      <option value="">Select Option</option>
                      <option value="">All</option>
                      <option value="">Individual</option>
                      <option value="">Only Fix ID</option>
                      <option value="">Below 16</option>
                      <option value="">Only 3 Type</option>
                    </select>
                  </td>
                  <td>
                    <input type="checkbox" name="create-2" id="create-2" />
                  </td>
                  <td>
                    <input type="checkbox" name="view-2" id="view-2" />
                  </td>
                  <td>
                    <input type="checkbox" name="edit-2" id="edit-2" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <input type="checkbox" name="id-3" id="id-3" />
                      <p>Individual ID</p>
                    </div>
                  </td>
                  <td>
                    <select name="" id="">
                      <option value="">Select Option</option>
                      <option value="">All</option>
                      <option value="">Individual</option>
                      <option value="">Only Fix ID</option>
                      <option value="">Below 16</option>
                      <option value="">Only 3 Type</option>
                    </select>
                  </td>
                  <td>
                    <input type="checkbox" name="create3" id="create3" />
                  </td>
                  <td>
                    <input type="checkbox" name="view3" id="view3" />
                  </td>
                  <td>
                    <input type="checkbox" name="edit3" id="edit3" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <input type="checkbox" name="id-4" id="id-4" />
                      <p>Individual ID Request</p>
                    </div>
                  </td>
                  <td>
                    <select name="" id="">
                      <option value="">Select Option</option>
                      <option value="">All</option>
                      <option value="">Individual</option>
                      <option value="">Only Fix ID</option>
                      <option value="">Below 16</option>
                      <option value="">Only 3 Type</option>
                    </select>
                  </td>
                  <td>
                    <input type="checkbox" name="create-4" id="create-4" />
                  </td>
                  <td>
                    <input type="checkbox" name="view-4" id="view-4" />
                  </td>
                  <td>
                    <input type="checkbox" name="edit-4" id="edit-4" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <input type="checkbox" name="id-5" id="id-5" />
                      <p>Business ID</p>
                    </div>
                  </td>
                  <td>
                    <select name="" id="">
                      <option value="">Select Option</option>
                      <option value="">All</option>
                      <option value="">Individual</option>
                      <option value="">Only Fix ID</option>
                      <option value="">Below 16</option>
                      <option value="">Only 3 Type</option>
                    </select>
                  </td>
                  <td>
                    <input type="checkbox" name="create-5" id="create-5" />
                  </td>
                  <td>
                    <input type="checkbox" name="view-5" id="view-5" />
                  </td>
                  <td>
                    <input type="checkbox" name="edit-5" id="edit-5" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <input type="checkbox" name="id-6" id="id-6" />
                      <p>Business ID Request</p>
                    </div>
                  </td>
                  <td>
                    <select name="" id="">
                      <option value="">Select Option</option>
                      <option value="">All</option>
                      <option value="">Individual</option>
                      <option value="">Only Fix ID</option>
                      <option value="">Below 16</option>
                      <option value="">Only 3 Type</option>
                    </select>
                  </td>
                  <td>
                    <input type="checkbox" name="create-6" id="create-6" />
                  </td>
                  <td>
                    <input type="checkbox" name="view-6" id="view-6" />
                  </td>
                  <td>
                    <input type="checkbox" name="edit-6" id="edit-6" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <input type="checkbox" name="id-7" id="id-7" />
                      <p>Master ID Plan</p>
                    </div>
                  </td>
                  <td>
                    <select name="" id="">
                      <option value="">Select Option</option>
                      <option value="">All</option>
                      <option value="">Individual</option>
                      <option value="">Only Fix ID</option>
                      <option value="">Below 16</option>
                      <option value="">Only 3 Type</option>
                    </select>
                  </td>
                  <td>
                    <input type="checkbox" name="create-7" id="create-7" />
                  </td>
                  <td>
                    <input type="checkbox" name="view-7" id="view-7" />
                  </td>
                  <td>
                    <input type="checkbox" name="edit-7" id="edit-7" />
                  </td>
                </tr>
              </tbody>

              <thead className="table-head">
                <tr>
                  <th className="pt-4">Manage Staff</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div>
                      <input type="checkbox" name="id-1" id="id-1" />
                      <p>Staff</p>
                    </div>
                  </td>
                  <td>
                    <select name="" id="">
                      <option value="">Select Option</option>
                      <option value="">All</option>
                      <option value="">Individual</option>
                      <option value="">Only Fix ID</option>
                      <option value="">Below 16</option>
                      <option value="">Only 3 Type</option>
                    </select>
                  </td>
                  <td>
                    <input type="checkbox" name="create-1" id="create-1" />
                  </td>
                  <td>
                    <input type="checkbox" name="view-1" id="view-1" />
                  </td>
                  <td>
                    <input type="checkbox" name="edit-1" id="edit-1" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <input type="checkbox" name="id-2" id="id-2" />
                      <p>Create Staff</p>
                    </div>
                  </td>
                  <td>
                    <select name="" id="">
                      <option value="">Select Option</option>
                      <option value="">All</option>
                      <option value="">Individual</option>
                      <option value="">Only Fix ID</option>
                      <option value="">Below 16</option>
                      <option value="">Only 3 Type</option>
                    </select>
                  </td>
                  <td>
                    <input type="checkbox" name="create-2" id="create-2" />
                  </td>
                  <td>
                    <input type="checkbox" name="view-2" id="view-2" />
                  </td>
                  <td>
                    <input type="checkbox" name="edit-2" id="edit-2" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <input type="checkbox" name="id-3" id="id-3" />
                      <p>Staff Role</p>
                    </div>
                  </td>
                  <td>
                    <select name="" id="">
                      <option value="">Select Option</option>
                      <option value="">All</option>
                      <option value="">Individual</option>
                      <option value="">Only Fix ID</option>
                      <option value="">Below 16</option>
                      <option value="">Only 3 Type</option>
                    </select>
                  </td>
                  <td>
                    <input type="checkbox" name="create3" id="create3" />
                  </td>
                  <td>
                    <input type="checkbox" name="view3" id="view3" />
                  </td>
                  <td>
                    <input type="checkbox" name="edit3" id="edit3" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <input type="checkbox" name="id-3" id="id-3" />
                      <p>Attendance</p>
                    </div>
                  </td>
                  <td>
                    <select name="" id="">
                      <option value="">Select Option</option>
                      <option value="">All</option>
                      <option value="">Individual</option>
                      <option value="">Only Fix ID</option>
                      <option value="">Below 16</option>
                      <option value="">Only 3 Type</option>
                    </select>
                  </td>
                  <td>
                    <input type="checkbox" name="create3" id="create3" />
                  </td>
                  <td>
                    <input type="checkbox" name="view3" id="view3" />
                  </td>
                  <td>
                    <input type="checkbox" name="edit3" id="edit3" />
                  </td>
                </tr>
              </tbody>

              <thead className="table-head">
                <tr>
                  <th className="pt-4">Manage Department</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div>
                      <input type="checkbox" name="id-1" id="id-1" />
                      <p>Department</p>
                    </div>
                  </td>
                  <td>
                    <select name="" id="">
                      <option value="">Select Option</option>
                      <option value="">All</option>
                      <option value="">Individual</option>
                      <option value="">Only Fix ID</option>
                      <option value="">Below 16</option>
                      <option value="">Only 3 Type</option>
                    </select>
                  </td>
                  <td>
                    <input type="checkbox" name="create-1" id="create-1" />
                  </td>
                  <td>
                    <input type="checkbox" name="view-1" id="view-1" />
                  </td>
                  <td>
                    <input type="checkbox" name="edit-1" id="edit-1" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <input type="checkbox" name="id-2" id="id-2" />
                      <p>Create Department</p>
                    </div>
                  </td>
                  <td>
                    <select name="" id="">
                      <option value="">Select Option</option>
                      <option value="">All</option>
                      <option value="">Individual</option>
                      <option value="">Only Fix ID</option>
                      <option value="">Below 16</option>
                      <option value="">Only 3 Type</option>
                    </select>
                  </td>
                  <td>
                    <input type="checkbox" name="create-2" id="create-2" />
                  </td>
                  <td>
                    <input type="checkbox" name="view-2" id="view-2" />
                  </td>
                  <td>
                    <input type="checkbox" name="edit-2" id="edit-2" />
                  </td>
                </tr>
              </tbody>

              <thead className="table-head">
                <tr>
                  <th className="pt-4">Manage User</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div>
                      <input type="checkbox" name="id-1" id="id-1" />
                      <p>User</p>
                    </div>
                  </td>
                  <td>
                    <select name="" id="">
                      <option value="">Select Option</option>
                      <option value="">All</option>
                      <option value="">Individual</option>
                      <option value="">Only Fix ID</option>
                      <option value="">Below 16</option>
                      <option value="">Only 3 Type</option>
                    </select>
                  </td>
                  <td>
                    <input type="checkbox" name="create-1" id="create-1" />
                  </td>
                  <td>
                    <input type="checkbox" name="view-1" id="view-1" />
                  </td>
                  <td>
                    <input type="checkbox" name="edit-1" id="edit-1" />
                  </td>
                </tr>
              </tbody>

              <thead className="table-head">
                <tr>
                  <th className="pt-4">Manage Category</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div>
                      <input type="checkbox" name="id-1" id="id-1" />
                      <p>Category</p>
                    </div>
                  </td>
                  <td>
                    <select name="" id="">
                      <option value="">Select Option</option>
                      <option value="">All</option>
                      <option value="">Individual</option>
                      <option value="">Only Fix ID</option>
                      <option value="">Below 16</option>
                      <option value="">Only 3 Type</option>
                    </select>
                  </td>
                  <td>
                    <input type="checkbox" name="create-1" id="create-1" />
                  </td>
                  <td>
                    <input type="checkbox" name="view-1" id="view-1" />
                  </td>
                  <td>
                    <input type="checkbox" name="edit-1" id="edit-1" />
                  </td>
                </tr>
              </tbody>

              <thead className="table-head">
                <tr>
                  <th className="pt-4">Household</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div>
                      <input type="checkbox" name="id-1" id="id-1" />
                      <p>Apartment</p>
                    </div>
                  </td>
                  <td>
                    <select name="" id="">
                      <option value="">Select Option</option>
                      <option value="">All</option>
                      <option value="">Individual</option>
                      <option value="">Only Fix ID</option>
                      <option value="">Below 16</option>
                      <option value="">Only 3 Type</option>
                    </select>
                  </td>
                  <td>
                    <input type="checkbox" name="create-1" id="create-1" />
                  </td>
                  <td>
                    <input type="checkbox" name="view-1" id="view-1" />
                  </td>
                  <td>
                    <input type="checkbox" name="edit-1" id="edit-1" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <Row className="mt-4 justify-content-between">
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
                  <Form.Control type="text" name="signature" />
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
            <Col
              md={6}
              className="d-flex justify-content-end align-items-center"
            >
              <button
                type="button"
                className="btn btn-primary"
                style={{ minWidth: 140 }}
              >
                Save
              </button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default CustomViewStaffDetail;
