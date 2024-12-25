import React from "react";
import { Table, Button } from "react-bootstrap";
import Shield from '../../../../../assets/img/shield.png'
import Aadhar from '../../../../../assets/img/aadhaar.png'
import FingerPrint from '../../../../../assets/img/fingerprint.png'
import FaceLock from '../../../../../assets/img/face-recognition.png'
import './userTable.scss'
import { useNavigate } from "react-router-dom";

function UserTable({
  tableTitle,
  orders,
  totalNumber = false,
  totalNumberTitle,
  showButton = false,
  showButtonText,
  showButtonClick
}) {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate('/user-profile-details')
  }
  return (
    <>
    {showButton && (<button className="btn btn-primary d-flex ml-auto mt-5" onClick={showButtonClick}>{showButtonText}</button>)}
    <div className={`manage-id-table user-table bg-light p-3 rounded-lg ${showButton ? 'mt-3' : 'mt-5'}`}>
      <div className="table-head d-flex align-items-center justify-content-between mb-4">
        <h5 className="d-flex align-items-center mb-0">
          {tableTitle}{" "}
          <p className="mb-0 ml-4">{totalNumber && totalNumberTitle}</p>
        </h5>
        <div className="nav nav-pills mx-auto d-none d-xl-flex header-center-pills align-items-center">
          <select>
            <option>Master Id Request</option>
          </select>

          <select>
            <option>Accepted</option>
          </select>

          <select>
            <option>Pending</option>
          </select>
        </div>
        <Button variant="outline-dark" className="export-button">
          <svg
            className="mr-1"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-cloud-arrow-down-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708" />
          </svg>{" "}
          Export
        </Button>
      </div>
      <Table bordered hover responsive>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User Details</th>
            <th>KYC</th>
            <th>Master ID</th>
            <td>My ID</td>
            <td>Contact Info</td>
            <th>Businesses</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} onClick={onClickHandler} >
              <td>{order.orderId}</td>
              <td>
                <div className="id-request">
                  <img
                    src={order.userImage}
                    alt="User"
                    className="user-image"
                  />
                  <div>
                    <span>{order.userName}</span>
                    <br />
                    <span>{order.userId}</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center gap-3"  >
                    <span className="kyc-img-box">
                        {order.faceIDVerified && <img src={Shield} alt="verify" className="shield" />}
                        <img src={FaceLock} alt="face-id" className="kyc-img" />
                    </span>
                    <span className="kyc-img-box">
                        {order.aadharVerified && <img src={Shield} alt="verify" className="shield" />}
                        <img src={Aadhar} alt="aadhar-id" className="kyc-img" />
                    </span>
                    <span className="kyc-img-box">
                        {order.fingerVerified && <img src={Shield} alt="verify" className="shield" />}
                        <img src={FingerPrint} alt="fingerprint-id" className="kyc-img" />
                    </span>
                </div>
              </td>
              <td>
                    {order.masterIdVerified ? (
                        <div className="text-center verify">
                            <span>verified</span>
                            <p>NOT ACTIVE</p>
                        </div>
                    ) :order.masterIdActive ? 
                    (<div className="text-center verify">
                        <span>ACTIVE</span>
                        <p>BHXXXXXXXXXX67</p>
                    </div>)
                    :
                    <p className="mb-0 text-center">NILL</p>
                    }
              </td>
              <td>
              <div>
                    {order.myIdActive ? 
                    (<div className="text-center verify">
                        <span>ACTIVE</span>
                        <p>BHXXXXXXXXXX67</p>
                    </div>)
                    :
                    <p className="mb-0 text-center">NILL</p>
                    }
                </div>
              </td>
              <td>
                <div className="contact-info">
                    <p>{order.contact}</p>
                    <p>{order.email}</p>
                    <button type="button" className="btn">Message</button>
                </div>
              </td>
              <td>{order.busineesses ? order.busineesses : "NILL"}</td>
              <td>
                <button
                  className="options bg-none border-0 p-0"
                  style={{ outline: "none" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-three-dots"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </>
  );
}

export default UserTable;
