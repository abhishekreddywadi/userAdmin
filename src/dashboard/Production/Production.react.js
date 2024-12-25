import React, { useState, useContext } from "react";
import UserContext from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import "./production.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEllipsis,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import UserImg from "../../assets/img/user1.png";

const Production = () => {
  const navigate = useNavigate();
  const [key, setKey] = useState("home");
  const { setRfIdActive, setMasterFormActive, setBusinessFormActive } =
    useContext(UserContext);
  const [showSingleBusiness, setShowSingleBusiness] = useState(false);
  const [showBusinessTable, setShowBusinessTable] = useState(true);
  const users = [
    {
      name: "KAVIN SHARMA",
      id: "MU_123456",
      location: "BANGALORE",
      age: 15,
      userType: "User",
      guardian: "AD. 1234567890123",
      phoneNumber: "+91 9995559999",
    },
    {
      name: "KAVIN SHARMA",
      id: "MU_123456",
      location: "BANGALORE",
      age: 18,
      userType: "User",
      guardian: "AD. 1234567890123",
      phoneNumber: "+91 9995559999",
    },
    // Add more user data as needed
  ];

  const requests = [
    {
      name: "abhishek",
      id: "BHA_XXXXXXXX",
      location: "BANGALORE",
      masterId: "MU_123456",
      requestDate: "11-12-2024",
      link: "/master-id-verification-request",
    },
    {
      name: "ROHAN TALPADHI",
      id: "BHA_XXXXXXXX",
      location: "BANGALORE",
      masterId: "MU_123456",
      requestDate: "11-12-2024",
      link: "/master-id-verification-request",
    },
    {
      name: "ROHAN TALPADHI",
      id: "BHA_XXXXXXXX",
      location: "BANGALORE",
      masterId: "MU_123456",
      requestDate: "11-12-2024",
      link: "/master-id-verification-request",
    },
    {
      name: "ROHAN TALPADHI",
      id: "BHA_XXXXXXXX",
      location: "BANGALORE",
      masterId: "MU_123456",
      requestDate: "11-12-2024",
      link: "/master-id-verification-request",
    },
    // Add more request data as needed
  ];

  const reRequests = [
    {
      name: "ROHAN TALPADHI",
      id: "BHA_XXXXXXXX",
      location: "BANGALORE",
      masterId: "MU_123456",
      requestDate: "11-12-2024",
      link: "/master-id-re-verification-request",
    },
    {
      name: "ROHAN TALPADHI",
      id: "BHA_XXXXXXXX",
      location: "BANGALORE",
      masterId: "MU_123456",
      requestDate: "11-12-2024",
      link: "/master-id-re-verification-request",
    },
    {
      name: "ROHAN TALPADHI",
      id: "BHA_XXXXXXXX",
      location: "BANGALORE",
      masterId: "MU_123456",
      requestDate: "11-12-2024",
      link: "/master-id-re-verification-request",
    },
    {
      name: "ROHAN TALPADHI",
      id: "BHA_XXXXXXXX",
      location: "BANGALORE",
      masterId: "MU_123456",
      requestDate: "11-12-2024",
      link: "/master-id-re-verification-request",
    },
    // Add more request data as needed
  ];

  const handleMasterRequest = () => {
    setMasterFormActive(true);
    setRfIdActive(false);
    navigate("/master-id-verification-request");
  };

  const handleMasterReRequest = () => {
    setMasterFormActive(true);
    setRfIdActive(false);
    navigate("/master-request");
  };

  const handleRfActiveChange = () => {
    setRfIdActive(true);
    setMasterFormActive(false);
    navigate("/individual-request");
  };

  const handleBusinessRequest = () => {
    setMasterFormActive(false);
    setRfIdActive(false);
    setBusinessFormActive(true);
    navigate("/business-request");
  };

  const handleShowSingleBusiness = () => {
    setShowSingleBusiness(true);
    setShowBusinessTable(false);
  };

  return (
    <div className="production-container">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 p-2 p-md-4 production-tabs"
      >
        <Tab eventKey="home" title="User & Master ID Request">
          <div className="dashboard">
            <div className="dash-table user-table">
              <div className="table-header">
                <h2>New user</h2>
                <p>Today 26/12/2024</p>
                <h2>BANGLORE</h2>
              </div>
              {users.map((user, index) => (
                <div className="user-card table-card" key={index}>
                  <div className="user-info table-info">
                    <div className="user-image table-image"></div>
                    <div className="user-details table-details">
                      <h3>{user.name}</h3>
                      <p>{user.id}</p>
                      <p>{user.location}</p>
                    </div>
                  </div>
                  <div
                    className={`user-status table-status ${
                      user.age >= 16 ? "adult" : "minor"
                    }`}
                  >
                    <div>
                      <span>{user.age >= 16 ? "16+" : "-16"}</span>
                      <Link to="/profile">
                      <FontAwesomeIcon  icon={faEye} />
                      </Link>
                      <button type="button">Message  </button>
                    </div>

                    {user.age < 16 && (
                      <div className="guardian-info">
                        <button
                          type="button"
                          onClick={() => handleMasterReRequest()}
                          style={{ color: "#fff" }}
                        >
                          <span>{user.guardian}</span>
                        </button>
                      </div>
                    )}

                    {user.age < 16 ? (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                        }}
                      >
                        <span className="user-type table-type">Guardian</span>
                        <span className="user-type table-type">
                          {user.phoneNumber}
                        </span>
                      </div>
                    ) : (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                        }}
                      >
                        <span className="user-type table-type">User</span>
                        <span className="user-type table-type">
                          {user.phoneNumber}
                        </span>
                      </div>
                    )}
                    {/* <button className="message-button">Message</button> */}
                  </div>
                </div>
              ))}
            </div>
            <div className="dash-table request-table">
              <div className="table-header">
                <h2>New Id request</h2>
                <p>Today 26/12/2024</p>
                <h2>BANGLORE</h2>
              </div>
              {requests.map((request, index) => (
                <div className="request-card table-card" key={index}>
                  <div className="request-info table-info">
                    <div className="req-text">Master ID Request</div>
                    <div className="request-image table-image"></div>
                    <div className="request-details table-details">
                      <h3>{request.name}</h3>
                      <p>{request.id}</p>
                      <p>{request.location}</p>
                    </div>
                  </div>
                  <div className="request-status">
                    <p>Master Id Request. </p>
                    <p>{request.masterId}</p>
                    <p>Request Date: {request.requestDate}</p>
                    <button
                      type="button"
                      onClick={() => handleMasterRequest()}
                      className="verification-button"
                    >
                      Click to verification
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="dash-table request-table">
              <div className="table-header">
                <h2 style={{ color: "red" }}>New Id Re-request</h2>
                <p>Today 26/12/2024</p>
                <h2>BANGLORE</h2>
              </div>
              {reRequests.map((request, index) => (
                <div className="request-card table-card" key={index}>
                  <div className="request-info table-info">
                    <div className="req-text">Master ID Re-Request</div>
                    <div className="request-image table-image"></div>
                    <div className="request-details table-details">
                      <h3>{request.name}</h3>
                      <p>{request.id}</p>
                      <p>{request.location}</p>
                    </div>
                  </div>
                  <div className="request-status">
                    <p>Master Id Re-Request.</p>
                    <p>{request.masterId}</p>
                    <p>Request Date: {request.requestDate}</p>
                    <button
                      type="button"
                      onClick={() => navigate(`${request.link}`)}
                      className="verification-button"
                    >
                      Click to verification
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Tab>
        <Tab eventKey="profile" title="Individual ID Request">
          <div className="table w-100">
            <table className="w-100">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th>Name</th>
                  <th>Profession</th>
                  <th>Contact Info</th>
                  <th>Applied Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <img src={UserImg} alt="user" />
                  </td>
                  <td>
                    Pankaj Singh<p className="mb-0">MI_XXXXXX7</p>
                  </td>
                  <td>Artist</td>
                  <td>
                    pankaj@gmail.com <p className="mb-0">+911234567890</p>
                  </td>
                  <td>20/05/2024</td>
                  <td>IN REVIEW</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => handleRfActiveChange()}
                    >
                      Click to verify
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <img src={UserImg} alt="user" />
                  </td>
                  <td>
                    Pankaj Singh<p className="mb-0">MI_XXXXXX7</p>
                  </td>
                  <td>Indian Culture Arts</td>
                  <td>
                    pankaj@gmail.com <p className="mb-0">+911234567890</p>
                  </td>
                  <td>20/05/2024</td>
                  <td>IN REVIEW</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => handleRfActiveChange()}
                    >
                      Click to verify
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <img src={UserImg} alt="user" />
                  </td>
                  <td>
                    Pankaj Singh<p className="mb-0">MI_XXXXXX7</p>
                  </td>
                  <td>Musician</td>
                  <td>
                    pankaj@gmail.com <p className="mb-0">+911234567890</p>
                  </td>
                  <td>20/05/2024</td>
                  <td>IN REVIEW</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => handleRfActiveChange()}
                    >
                      Click to verify
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Tab>
        <Tab eventKey="contact" title="Business Request">
          {showBusinessTable && (
            <>
              <div className="d-none d-md-block">
                <div className="table w-100">
                  <table className="w-100">
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Business Info</th>
                        <th>Request Date</th>
                        <th>Company Type</th>
                        <th>Department Class</th>
                        <th>Company Admin</th>
                        <th>Enroll</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>ID0001</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img src={UserImg} alt="user" />
                            <div className="pl-3">
                              <p
                                className="mb-0"
                                style={{ fontWeight: "bold" }}
                              >
                                <button
                                  className="text-dark bg-transparent p-0 border-0 button-head"
                                  type="button"
                                  onClick={() => handleShowSingleBusiness()}
                                >
                                  Aaloka the scholl of dance and fitness
                                </button>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>11-12-2024</td>
                        <td>Brand</td>
                        <td>
                          Fitness dance <br />
                          41
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img src={UserImg} alt="user" />
                            <div className="pl-3">
                              <p
                                className="mb-0"
                                style={{ fontWeight: "bold" }}
                              >
                                Sonya Wilson
                              </p>
                              <span>Aquaguard Manager</span>
                            </div>
                          </div>
                        </td>
                        <td>PENDING</td>
                        <td>
                          <button
                            type="button"
                            onClick={() => handleBusinessRequest()}
                          >
                            <FontAwesomeIcon icon={faEllipsis} />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>ID0002</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img src={UserImg} alt="user" />
                            <div className="pl-3">
                              <p
                                className="mb-0"
                                style={{ fontWeight: "bold" }}
                              >
                                <button
                                  className="text-dark bg-transparent p-0 border-0 button-head"
                                  type="button"
                                  onClick={() => handleShowSingleBusiness()}
                                >
                                  Reebok
                                </button>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>11-12-2024</td>
                        <td>pvt ltd partnership</td>
                        <td>
                          Food Restaurant <br />
                          43
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img src={UserImg} alt="user" />
                            <div className="pl-3">
                              <p
                                className="mb-0"
                                style={{ fontWeight: "bold" }}
                              >
                                Sonya Wilson
                              </p>
                              <span>Aquaguard Manager</span>
                            </div>
                          </div>
                        </td>
                        <td>PENDING</td>
                        <td>
                          <button
                            type="button"
                            onClick={() => handleBusinessRequest()}
                          >
                            <FontAwesomeIcon icon={faEllipsis} />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>ID0003</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img src={UserImg} alt="user" />
                            <div className="pl-3">
                              <p
                                className="mb-0"
                                style={{ fontWeight: "bold" }}
                              >
                                <button
                                  className="text-dark bg-transparent p-0 border-0 button-head"
                                  type="button"
                                  onClick={() => handleShowSingleBusiness()}
                                >
                                  Adidas
                                </button>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>11-12-2024</td>
                        <td>OPC Private Ltd.</td>
                        <td>
                          Cloth Branding <br />
                          25
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img src={UserImg} alt="user" />
                            <div className="pl-3">
                              <p
                                className="mb-0"
                                style={{ fontWeight: "bold" }}
                              >
                                Sonya Wilson
                              </p>
                              <span>Aquaguard Manager</span>
                            </div>
                          </div>
                        </td>
                        <td>PENDING</td>
                        <td>
                          <button
                            type="button"
                            onClick={() => handleBusinessRequest()}
                          >
                            <FontAwesomeIcon icon={faEllipsis} />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="d-md-none">
                <div className="single-business">
                  <div className="container">
                    <div className="single-business-container text-dark bg-white p-0 rounded col-lg-12 col-xl-6">
                      <div className="single-business-head">
                        <div
                          className="head d-flex align-items-center justify-content-between p-2"
                          style={{ background: "#f26b81" }}
                        >
                          <p className="text-white mb-0 me-2">
                            Business Request
                          </p>
                          <span>MASTER ID BHA_123456789</span>
                        </div>
                      </div>
                      <div className="single-business-list mt-3 px-4 pt-4 pb-1">
                        <div className="single-business-box d-flex flex-column flex-md-row justify-content-md-between">
                          <div className="single-business-left col-md-6 p-0">
                            <div className="single-business-img d-flex align-items-center">
                              <img
                                src={UserImg}
                                alt="business-img"
                                style={{ width: 60 }}
                              />
                              <div className="pl-4">
                                <h6
                                  className="mb-1"
                                  style={{ color: "#f26b81" }}
                                >
                                  Aalok the school of dance and fitness
                                </h6>
                                <p style={{ fontWeight: "bold" }}>
                                  Banglore, Karnataka, 560034
                                </p>
                              </div>
                            </div>
                            <div className="d-flex align-items-end justify-content-between mt-3">
                              <div className="d-flex flex-column">
                                <span>Request By</span>
                                <span style={{ color: "#f26b81" }}>
                                  IM_12345678
                                </span>
                              </div>
                              <p className="mb-0">
                                Company type:{" "}
                                <strong style={{ color: "#f26b81" }}>
                                  {" "}
                                  PVT. LTD
                                </strong>
                              </p>
                            </div>
                          </div>
                          <div className="single-business-right mt-4 mt-0 p-0 col-md-4 col-xl-4">
                            <p className="mb-2">
                              Department Class <strong>1</strong>
                            </p>
                            <p className="mb-2">
                              Number of Admins
                              <div className="admins">
                                <img src={UserImg} alt="admin" />
                                <img src={UserImg} alt="admin" />
                                <img src={UserImg} alt="admin" />
                                <img src={UserImg} alt="admin" />
                                <img src={UserImg} alt="admin" />
                              </div>
                              <strong>10</strong>
                            </p>
                            <p className="mb-2">
                              Request Date <strong>11/12/24</strong>
                            </p>
                            <button type="button" className="mt-5">
                              Click for Verification
                            </button>
                          </div>
                          <Link
                            to="/"
                            className="company-type d-flex aling-items-center ml-auto"
                          >
                            View All
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </Tab>
      </Tabs>
    </div>
  );
};

export default Production;
