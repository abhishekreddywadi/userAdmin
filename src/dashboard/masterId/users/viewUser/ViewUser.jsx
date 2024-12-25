import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ManageTable from "../../manageId/manageTable/ManageTable";
import UserTable from "./userTable/UserTable";
import "./viewUser.scss";
import UserOne from "../../../../assets/img/user1.png";
import Subheader from "../../../../layout/Subheader/Subheader.react";
import { Pagination } from "react-bootstrap";
import Shield from "../../../../assets/img/shield.png";
import Aadhar from "../../../../assets/img/aadhaar.png";
import FingerPrint from "../../../../assets/img/fingerprint.png";
import FaceLock from "../../../../assets/img/face-recognition.png";

function ViewUser() {
  const ordersData = [
    {
      orderId: "ID0001",
      userImage: UserOne,
      faceIDVerified: true,
      aadharVerified: true,
      fingerVerified: true,
      masterIdVerified: true,
      masterIdActive: false,
      myIdActive: false,
      userName: "Rohan Talpadhi",
      userId: "MU_123456",
      requestDate: "11-12-2024",
      acceptedDate: "12-12-2019",
      contact: "+311234567890",
      email: "user@gmail.com",
      status: "Declined",
      staffImage: UserOne,
      staffName: "Sonya Wilson",
      staffRole: "Aquaguard Manager",
      enrollStatus: "PENDING",
      busineesses: "5/3",
      age: 30,
      gender: "male",
    },
    {
      orderId: "ID0001",
      userImage: UserOne,
      faceIDVerified: true,
      aadharVerified: true,
      fingerVerified: false,
      masterIdVerified: false,
      masterIdActive: true,
      myIdActive: true,
      userName: "Rohan Talpadhi ",
      userId: "MU_123456",
      requestDate: "11-12-2024",
      acceptedDate: "12-12-2019",
      contact: "+311234567890",
      email: "user@gmail.com",
      status: "Declined",
      staffImage: UserOne,
      staffName: "Sonya Wilson",
      staffRole: "Aquaguard Manager",
      enrollStatus: "PENDING",
      age: 30,
      gender: "male",
    },
  ];

  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate the indices for slicing the ordersData
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = ordersData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(ordersData.length / itemsPerPage);
  return (
    <div className="manage-id pt-2 pt-2 pb-5 mt-4 mt-lg-0">
      <div className="container">
        <Subheader
          itemOneTitle="All Users"
          itemTwoTitle="Above 16"
          itemThreeTitle="Below 16"
          itemOneData={
            <>
              <div className="user-tab-view d-none d-md-block">
                <UserTable
                  tableTitle="View all ID"
                  orders={currentItems}
                  totalNumber={true}
                  totalNumberTitle={`Total Number of ${ordersData?.length}`}
                  showButton={true}
                  showButtonText="Create New User"
                  showButtonClick={() => navigate("/create-user")}
                />
                {ordersData.length > 5 && (
                  <Pagination>
                    {[...Array(totalPages)].map((_, index) => (
                      <Pagination.Item
                        key={index + 1}
                        active={index + 1 === currentPage}
                        onClick={() => handlePageChange(index + 1)}
                      >
                        {index + 1}
                      </Pagination.Item>
                    ))}
                  </Pagination>
                )}
              </div>
              <div className="user-mobile-view d-block d-md-none mt-5">
                <div className="user-list">
                  {ordersData?.map((order, i) => {
                    return (
                      <div className="user-box p-3">
                        <div className="user-info-head d-flex align-items-center">
                          <img src={order.userImage} alt="user-img" />
                          <div className="user-info-content pl-3 text-dark">
                            <h6 className="mb-1 font-weight-bold">
                              {order.userName}
                            </h6>
                            <p className="mb-0">{order.userId}</p>
                            <p className="mb-0">
                              <span>{order.age}</span>
                              <span>{order.gender}</span>
                            </p>
                          </div>
                        </div>
                        <div className="user-kyc mt-4 d-flex align-items-center justify-content-between">
                          <p className="mb-0 text-dark font-weight-bold">KYC</p>
                          <div className="d-flex align-items-center gap-3">
                            <span className="kyc-img-box">
                              {order.faceIDVerified && (
                                <img
                                  src={Shield}
                                  alt="verify"
                                  className="shield"
                                />
                              )}
                              <img
                                src={FaceLock}
                                alt="face-id"
                                className="kyc-img"
                              />
                            </span>
                            <span className="kyc-img-box">
                              {order.aadharVerified && (
                                <img
                                  src={Shield}
                                  alt="verify"
                                  className="shield"
                                />
                              )}
                              <img
                                src={Aadhar}
                                alt="aadhar-id"
                                className="kyc-img"
                              />
                            </span>
                            <span className="kyc-img-box">
                              {order.fingerVerified && (
                                <img
                                  src={Shield}
                                  alt="verify"
                                  className="shield"
                                />
                              )}
                              <img
                                src={FingerPrint}
                                alt="fingerprint-id"
                                className="kyc-img"
                              />
                            </span>
                          </div>
                        </div>
                        <ul>
                          <li>
                            MASTER ID{" "}
                            {order.masterIdVerified ? (
                              <span>Verified</span>
                            ) : order.masterIdActive ? (
                              <span>Active</span>
                            ) : (
                              <p></p>
                            )}{" "}
                            {order.masterIdVerified ? (
                              <p>Not Active</p>
                            ) : order.masterIdActive ? (
                              <p>BHXXXXXXXXXX67</p>
                            ) : (
                              <p>NILL</p>
                            )}
                          </li>
                          <li>
                            MY ID {order.myIdActive ? <span>Active</span> : ""}{" "}
                            {order.myIdActive ? (
                              <p>BHXXXXXXXXXX67</p>
                            ) : (
                              <p>NILL</p>
                            )}
                          </li>
                          <li>
                            Business ID <p>NILL</p>
                          </li>
                        </ul>
                        <button
                          type="button"
                          className="btn d-flex justify-content-center mt-4 ml-auto"
                        >
                          Message
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          }
          itemTwoData={
            <>
              <ManageTable
                tableTitle="View all ID"
                orders={currentItems}
                totalNumber={true}
                totalNumberTitle={`Total Number of ${ordersData?.length}`}
                showButton={true}
                showButtonText="Create New User"
                showButtonClick={() => navigate("/create-user")}
              />
              {ordersData.length > 5 && (
                <Pagination>
                  {[...Array(totalPages)].map((_, index) => (
                    <Pagination.Item
                      key={index + 1}
                      active={index + 1 === currentPage}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </Pagination.Item>
                  ))}
                </Pagination>
              )}
            </>
          }
          itemThreeData={
            <>
              <ManageTable
                tableTitle="View all ID"
                orders={currentItems}
                totalNumber={true}
                totalNumberTitle={`Total Number of ${ordersData?.length}`}
              />
              {ordersData.length > 5 && (
                <Pagination>
                  {[...Array(totalPages)].map((_, index) => (
                    <Pagination.Item
                      key={index + 1}
                      active={index + 1 === currentPage}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </Pagination.Item>
                  ))}
                </Pagination>
              )}
            </>
          }
        />
      </div>
    </div>
  );
}

export default ViewUser;
