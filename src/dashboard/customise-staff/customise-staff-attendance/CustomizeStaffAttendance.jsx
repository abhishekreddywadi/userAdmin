import React, { useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { FiClock, FiUsers, FiArrowLeft } from "react-icons/fi";
import CustomStaffTable from "./customStaffTable/CustomStaffTable";
import "./customiseStaffAttendance.scss";
import UserOne from "../../../assets/img/user1.png";
import Subheader from "../../../layout/Subheader/Subheader.react";
import HistoryTable from "./historyTable/HistoryTable";
import { Link } from "react-router-dom";

function CustomiseStaffAttendance() {
  const [outClick, setOutClick] = useState(false);
  const [inClick, setInClick] = useState(false);
  const [showAttendance, setShowAttendance] = useState(false);

  const handleInClick = () => {
    setOutClick(true);
    setInClick(false);
  };

  const handleOutClick = () => {
    setInClick(true);
    setOutClick(false);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const ordersData = [
    {
      staffImage: UserOne,
      staffName: "Rohan Talpadhi",
      staffId: "MBS_123456",
      status: "Declined",
    },
    {
      staffImage: UserOne,
      staffId: "MBS_123456",
      staffName: "Rohan Talpadhi",
      status: "Declined",
    },
    {
      staffImage: UserOne,
      staffId: "MBS_123456",
      staffName: "Rohan Talpadhi",
      status: "Declined",
    },
    {
      staffImage: UserOne,
      staffId: "MBS_123456",
      staffName: "Rohan Talpadhi",
      status: "Declined",
    },
    {
      staffImage: UserOne,
      staffId: "MBS_123456",
      staffName: "Rohan Talpadhi",
      status: "Declined",
    },
    {
      staffImage: UserOne,
      staffId: "MBS_123456",
      staffName: "Rohan Talpadhi",
      status: "Declined",
    },
    {
      staffImage: UserOne,
      staffId: "MBS_123456",
      staffName: "Rohan Talpadhi",
      status: "Declined",
    },
  ];

  const historyData = [
    {
      staffImage: UserOne,
      staffId: "MBS_123456",
      staffName: "Rohan Talpadhi",
      designation: "Instructor",
      attendanceStatus: "present",
      inStatus: '01:06',
      outStatus: '03.06',
      absentStatus: '10 August 2024 11.37AM',
      leaveAccepted: '',
      reason: '',
    },

    {
      staffImage: UserOne,
      staffId: "MBS_123456",
      staffName: "Rohan Talpadhi",
      designation: "Instructor",
      attendanceStatus: "absent",
      absentStatus: '10 August 2024 11.37AM',
      leaveAccepted: 'Accepted',
      reason: 'ill',
    },

    {
      staffImage: UserOne,
      staffId: "MBS_123456",
      staffName: "Rohan Talpadhi",
      designation: "Instructor",
      attendanceStatus: "On Leave",
      leaveStatus: '10 August 2024 11.37AM',
      leaveAccepted: '',
      reason: '',
    },
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = ordersData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(ordersData.length / itemsPerPage);

  return (
    <div className="staff-attendance-container">
      <Container fluid>
        {showAttendance ? (
       
           
          <div className="attendance-section">
            <div className="header-section">
              <div className="d-flex align-items-center gap-4">
                <Button 
                  variant="link" 
                  className="back-button"
                  onClick={() => setShowAttendance(false)}
                >
                  <FiArrowLeft className="icon" />
                  Back
                </Button>
                <h2>Staff Attendance</h2>
              </div>

              <div className="stats-cards">
                <Card className="stat-card">
                  <Card.Body>
                    <FiUsers className="stat-icon" />
                    <div className="stat-content">
                      <h6>Total Staff</h6>
                      <h3>{ordersData.length}</h3>
                    </div>
                  </Card.Body>
                </Card>
                <Card className="stat-card">
                  <Card.Body>
                    <FiClock className="stat-icon" />
                    <div className="stat-content">
                      <h6>Present Today</h6>
                      <h3>{ordersData.filter(item => item.status === "Declined").length}</h3>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>

            <Card className="attendance-card">
              <Card.Body>
                <CustomStaffTable
                  orders={currentItems}
                  handleInClick={handleInClick}
                  handleOutClick={handleOutClick}
                  outClick={outClick}
                  inClick={inClick}
                  totalNumber={true}
                  totalNumberTitle={`Total Number of ${ordersData?.length}`}
                />
                {totalPages > 1 && (
                  <div className="pagination-wrapper">
                    <ul className="custom-pagination">
                      {[...Array(totalPages)].map((_, index) => (
                        <li
                          key={index}
                          className={currentPage === index + 1 ? "active" : ""}
                          onClick={() => handlePageChange(index + 1)}
                        >
                          {index + 1}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Card.Body>
            </Card>
          </div>
           ) : (
          <div className="dashboard-section">
            <div className="header-section">
              <div className="d-flex justify-content-between align-items-center">
                <h2>Staff Management</h2>
                <Button 
                  className="add-attendance-btn" 
                  onClick={() => setShowAttendance(true)}
                >
                  <FiClock className="icon" />
                  Add Attendance
                </Button>
              </div>
            </div>

            <div className="subheader-wrapper">
              <Subheader
                title="Staff Attendance"
                options={[
                  {
                    title: "Staff Attendance",
                    onClick: () => setShowAttendance(true),
                  },
                  {
                    title: "History",
                    onClick: () => {},
                  },
                ]}
                rightElement={
                  <div className="d-flex align-items-center gap-3">
                    <Button variant="outline-primary">Export</Button>
                  </div>
                }
              />
            </div>

            <Card className="history-card">
              <Card.Body>
                <HistoryTable
                  tableTitle="View all ID"
                  orders={historyData}
                  totalNumber={true}
                  totalNumberTitle={`Total Number of ${historyData?.length}`}
                />
              </Card.Body>
            </Card>
          </div>
        )}
      </Container>
    </div>
  );
}

export default CustomiseStaffAttendance;