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
      contact: "+311234567890",
      about: "I am a software developer",
      gender: "Female",
      staffCategory: "Full-time",
      bloodGroup: "O+",
      height: "5.6",
      weight: "65",
      kycDocuments: {
        kathak: true,
        bharatnatyam: true,
        bharatanatyam: false,
      },
      education: "Bachelor's in Computer Science",
      notesDescription: "",
    },
  ];

  const [staffDetail, setStaffDetail] = useState(staffDetailArray);
  const [staffPermissionCheck, setStaffPermissionCheck] = useState(false);
  const [showFaceSignature, setShowFaceSignature] = useState(false);
  const [showPinSignature, setShowPinSignature] = useState(false);
  const [showFingerSignature, setShowFingerSignature] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [attendanceDetails, setAttendanceDetails] = useState(false);
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
  // Add this state at the top of your component
  const [activeTab, setActiveTab] = useState("about");
  const [selectedTimePeriod, setSelectedTimePeriod] = useState("day");
  const [selectedDate, setSelectedDate] = useState(null);

  // Dummy attendance data
  const dummyAttendanceData = {
    "2025-01-16": {
      date: "2025-01-16",
      status: "Present",
      checkIn: "09:00 AM",
      checkOut: "06:00 PM",
      totalHours: "9 hours",
      breaks: [
        { start: "01:00 PM", end: "02:00 PM", duration: "1 hour" }
      ],
      overtime: "1 hour",
      comments: "Regular day at office"
    },
    "2025-01-15": {
      date: "2025-01-15",
      status: "Present",
      checkIn: "09:15 AM",
      checkOut: "06:30 PM",
      totalHours: "9.25 hours",
      breaks: [
        { start: "01:30 PM", end: "02:30 PM", duration: "1 hour" }
      ],
      overtime: "1.5 hours",
      comments: "Stayed late for project completion"
    }
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleTimePeriodChange = (period) => {
    setSelectedTimePeriod(period);
  };

  // Add this function to handle tab clicks
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Add this function to render different content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <>
            <div className="about-section d-flex">
              <div className="staff-profile-card">
                <div className="profile-image-container mb-4">
                  <img
                    src={staffDetail[0]?.staffImage}
                    alt="profile"
                    className="profile-image"
                  />
                </div>
                <h4 className="staff-name mb-2">{staffDetail[0]?.staffName}</h4>
                <span className="department-badge mb-4">
                  {staffDetail[0]?.department}
                </span>

                <div className="info-container">
                  <div className="info-item">
                    <label>Staff ID</label>
                    <div className="info-value">{staffDetail[0]?.staffId}</div>
                  </div>
                  <div className="info-item">
                    <label>Joining Date</label>
                    <div className="info-value">
                      {staffDetail[0]?.requestDate}
                    </div>
                  </div>
                  <div className="info-item">
                    <label>Date of Birth</label>
                    <div className="info-value">{staffDetail[0]?.dob}</div>
                  </div>
                  <div className="info-item">
                    <label>Email</label>
                    <div className="info-value">{staffDetail[0]?.email}</div>
                  </div>
                </div>
              </div>

              <div className="about-details">
                <div className="about-card">
                  <h5 className="section-title">About</h5>
                  <p className="about-text">{staffDetail[0]?.about}</p>
                </div>
              </div>
            </div>
          </>
        );
      case "contect":
        return (
          <div className="detail">
            <span>Contact Details</span>
            <p>Email: {staffDetail[0]?.email}</p>
            <p>Phone: {staffDetail[0]?.contact}</p>
          </div>
        );
      case "attendance":
        return (
          // Attendance Section
          <div className="detail">
            <div className="attendance-section">
              <h4 className="mb-4">ATTENDANCE</h4>

              {/* Time Period Selection */}
              <div className="time-period-selector mb-4">
                <button 
                  className={`period-btn ${selectedTimePeriod === 'day' ? 'active' : ''}`}
                  onClick={() => handleTimePeriodChange('day')}
                >
                  Day
                </button>
                <button 
                  className={`period-btn ${selectedTimePeriod === 'week' ? 'active' : ''}`}
                  onClick={() => handleTimePeriodChange('week')}
                >
                  Week
                </button>
                <button 
                  className={`period-btn ${selectedTimePeriod === 'month' ? 'active' : ''}`}
                  onClick={() => handleTimePeriodChange('month')}
                >
                  Month
                </button>
                <button 
                  className={`period-btn ${selectedTimePeriod === 'year' ? 'active' : ''}`}
                  onClick={() => handleTimePeriodChange('year')}
                >
                  Year
                </button>
                <button 
                  className={`period-btn ${selectedTimePeriod === 'custom' ? 'active' : ''}`}
                  onClick={() => handleTimePeriodChange('custom')}
                >
                  Custom
                </button>
              </div>

              {/* Calendar Section */}
              <div className="calendar-section mb-4">
                <table className="calendar-table">
                  <thead>
                    <tr>
                      <th className="text-center">Sun</th>
                      <th className="text-center">Mon</th>
                      <th className="text-center">Tue</th>
                      <th className="text-center">Wed</th>
                      <th className="text-center">Thu</th>
                      <th className="text-center">Fri</th>
                      <th className="text-center">Sat</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center text-muted">
                        <span className="date">28</span>
                      </td>
                      <td className="text-center text-muted">
                        <span className="date">30</span>
                      </td>
                      <td className="text-center text-muted">
                        <span className="date">31</span>
                      </td>
                      <td className="text-center">
                        <span className="date">1</span>
                        <span className="status present" onClick={() => handleDateClick("2025-01-01")}>Present</span>
                      </td>
                      <td className="text-center">
                        <span className="date">2</span>
                        <span className="status present">Present</span>
                      </td>
                      <td className="text-center">
                        <span className="date">3</span>
                        <span className="status present">Present</span>
                      </td>
                      <td className="text-center">
                        <span className="date">4</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <span className="date">5</span>
                      </td>
                      <td className="text-center">
                        <span className="date">6</span>
                        <span className="status present">Present</span>
                      </td>
                      <td className="text-center">
                        <span className="date">7</span>
                        <span className="status present">Present</span>
                      </td>
                      <td className="text-center">
                        <span className="date">8</span>
                        <span className="status present">Present</span>
                      </td>
                      <td className="text-center">
                        <span className="date">9</span>
                        <span className="status present">Present</span>
                      </td>
                      <td className="text-center">
                        <span className="date">10</span>
                        <span className="status present">Present</span>
                      </td>
                      <td className="text-center">
                        <span className="date">11</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <span className="date">12</span>
                      </td>
                      <td className="text-center">
                        <span className="date">13</span>
                        <span className="status present">Present</span>
                      </td>
                      <td className="text-center">
                        <span className="date">14</span>
                        <span className="status present">Present</span>
                      </td>
                      <td className="text-center">
                        <span className="date">15</span>
                        <span className="status present" onClick={() => handleDateClick("2025-01-15")}>Present</span>
                      </td>
                      <td className="text-center current-day">
                        <span className="date">16</span>
                        <span className="status present" onClick={() => handleDateClick("2025-01-16")}>Present</span>
                      </td>
                      <td className="text-center">
                        <span className="date">17</span>
                      </td>
                      <td className="text-center">
                        <span className="date">18</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <span className="date">19</span>
                      </td>
                      <td className="text-center">
                        <span className="date">20</span>
                      </td>
                      <td className="text-center">
                        <span className="date">21</span>
                      </td>
                      <td className="text-center">
                        <span className="date">22</span>
                      </td>
                      <td className="text-center">
                        <span className="date">23</span>
                      </td>
                      <td className="text-center">
                        <span className="date">24</span>
                      </td>
                      <td className="text-center">
                        <span className="date">25</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <span className="date">26</span>
                      </td>
                      <td className="text-center">
                        <span className="date">27</span>
                      </td>
                      <td className="text-center">
                        <span className="date">28</span>
                      </td>
                      <td className="text-center">
                        <span className="date">29</span>
                      </td>
                      <td className="text-center">
                        <span className="date">30</span>
                      </td>
                      <td className="text-center">
                        <span className="date">31</span>
                      </td>
                      <td className="text-center text-muted">
                        <span className="date">1</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center text-muted">
                        <span className="date">2</span>
                      </td>
                      <td className="text-center text-muted">
                        <span className="date">3</span>
                      </td>
                      <td className="text-center text-muted">
                        <span className="date">4</span>
                      </td>
                      <td className="text-center text-muted">
                        <span className="date">5</span>
                      </td>
                      <td className="text-center text-muted">
                        <span className="date">6</span>
                      </td>
                      <td className="text-center text-muted">
                        <span className="date">7</span>
                      </td>
                      <td className="text-center text-muted">
                        <span className="date">8</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Attendance Details Section */}
              <div className="attendance-details">
                <div className="details-header">
                  <h5>Attendance Details</h5>
                  <div className="controls">
                    <select className="entries-select">
                      <option>10</option>
                      <option>20</option>
                      <option>50</option>
                    </select>
                    <span>entries</span>
                    <input type="search" placeholder="Search..." className="search-input" />
                  </div>
                </div>

                {selectedDate && dummyAttendanceData[selectedDate] ? (
                  <div className="selected-date-details">
                    <h6>Details for {dummyAttendanceData[selectedDate].date}</h6>
                    <div className="details-grid">
                      <div className="detail-item">
                        <label>Status</label>
                        <span>{dummyAttendanceData[selectedDate].status}</span>
                      </div>
                      <div className="detail-item">
                        <label>Check In</label>
                        <span>{dummyAttendanceData[selectedDate].checkIn}</span>
                      </div>
                      <div className="detail-item">
                        <label>Check Out</label>
                        <span>{dummyAttendanceData[selectedDate].checkOut}</span>
                      </div>
                      <div className="detail-item">
                        <label>Total Hours</label>
                        <span>{dummyAttendanceData[selectedDate].totalHours}</span>
                      </div>
                      <div className="detail-item">
                        <label>Overtime</label>
                        <span>{dummyAttendanceData[selectedDate].overtime}</span>
                      </div>
                    </div>
                    <div className="breaks-section">
                      <h6>Breaks</h6>
                      {dummyAttendanceData[selectedDate].breaks.map((break_, index) => (
                        <div key={index} className="break-item">
                          <span>{break_.start} - {break_.end}</span>
                          <span>{break_.duration}</span>
                        </div>
                      ))}
                    </div>
                    <div className="comments-section">
                      <h6>Comments</h6>
                      <p>{dummyAttendanceData[selectedDate].comments}</p>
                    </div>
                  </div>
                ) : (
                  <table className="attendance-table">
                    <thead>
                      <tr>
                        <th>Sno.</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Leave Reason</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="4" className="no-data">Select a date to view details</td>
                      </tr>
                    </tbody>
                  </table>
                )}

                <div className="table-footer">
                  <div className="showing-entries">Showing 0 to 0 of 0 entries</div>
                  <div className="pagination">
                    <button disabled>Previous</button>
                    <button disabled>Next</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "permission":
        return (
          <div className="permission-section">
            {/* Staff Detail Card */}
            <div className="staff-detail-card">
              <div className="staff-photo">
                <img src={staffDetail[0]?.staffImage} alt="Staff" />
                <div className="status-badge active">Active</div>
              </div>
              <div className="staff-info">
                <div className="info-main">
                  <h3>{staffDetail[0]?.staffName}</h3>
                  <span className="staff-id">ID: {staffDetail[0]?.staffId}</span>
                  <span className="staff-role">{staffDetail[0]?.staffRole}</span>
                </div>
                <div className="info-details">
                  <div className="info-item">
                    <i className="fas fa-envelope"></i>
                    <span>{staffDetail[0]?.email}</span>
                  </div>
                  <div className="info-item">
                    <i className="fas fa-phone"></i>
                    <span>{staffDetail[0]?.contact}</span>
                  </div>
                  <div className="info-item">
                    <i className="fas fa-building"></i>
                    <span>{staffDetail[0]?.department}</span>
                  </div>
                  <div className="info-item">
                    <i className="fas fa-calendar-alt"></i>
                    <span>Joined: {staffDetail[0]?.requestDate}</span>
                  </div>
                </div>
                <div className="quick-actions">
                  <button className="action-btn">
                    <i className="fas fa-edit"></i>
                    Edit Profile
                  </button>
                  <button className="action-btn">
                    <i className="fas fa-key"></i>
                    Reset Password
                  </button>
                  <button className="action-btn danger">
                    <i className="fas fa-ban"></i>
                    Deactivate
                  </button>
                </div>
              </div>
            </div>

            <div className="permission-header">
              <h4>Staff Permissions</h4>
              <div className="global-controls">
                <div className="search-box">
                  <i className="fas fa-search"></i>
                  <input type="text" placeholder="Search permissions..." />
                </div>
                <button className="select-all-btn">
                  <i className="fas fa-check-square"></i>
                  Select All
                </button>
              </div>
            </div>

            <div className="permission-categories">
              {/* Manage ID Category */}
              <div className="permission-category">
                <div className="category-header">
                  <div className="category-title">
                    <i className="fas fa-id-card"></i>
                    <h5>Manage ID</h5>
                  </div>
                  <button className="expand-btn">
                    <i className="fas fa-chevron-down"></i>
                  </button>
                </div>
                <div className="permission-items">
                  {["Master ID", "Master ID Request", "Individual ID", "Individual ID Request", "Business ID", "Business ID Request", "Master ID Plan"].map((item, index) => (
                    <div className="permission-item" key={index}>
                      <div className="item-main">
                        <label className="checkbox-wrapper">
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                          <span className="item-name">{item}</span>
                        </label>
                        <select className="type-select">
                          <option value="">Select Option</option>
                          <option value="all">All</option>
                          <option value="individual">Individual</option>
                          <option value="fix">Only Fix ID</option>
                          <option value="below16">Below 16</option>
                          <option value="type3">Only 3 Type</option>
                        </select>
                      </div>
                      <div className="item-permissions">
                        <label className="permission-toggle">
                          <input type="checkbox" />
                          <span className="toggle-slider"></span>
                          <span>Create</span>
                        </label>
                        <label className="permission-toggle">
                          <input type="checkbox" />
                          <span className="toggle-slider"></span>
                          <span>View</span>
                        </label>
                        <label className="permission-toggle">
                          <input type="checkbox" />
                          <span className="toggle-slider"></span>
                          <span>Edit</span>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Manage Staff Category */}
              <div className="permission-category">
                <div className="category-header">
                  <div className="category-title">
                    <i className="fas fa-users"></i>
                    <h5>Manage Staff</h5>
                  </div>
                  <button className="expand-btn">
                    <i className="fas fa-chevron-down"></i>
                  </button>
                </div>
                <div className="permission-items">
                  {["Staff", "Create Staff", "Staff Role", "Attendance"].map((item, index) => (
                    <div className="permission-item" key={index}>
                      <div className="item-main">
                        <label className="checkbox-wrapper">
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                          <span className="item-name">{item}</span>
                        </label>
                        <select className="type-select">
                          <option value="">Select Option</option>
                          <option value="all">All</option>
                          <option value="individual">Individual</option>
                          <option value="fix">Only Fix ID</option>
                          <option value="below16">Below 16</option>
                          <option value="type3">Only 3 Type</option>
                        </select>
                      </div>
                      <div className="item-permissions">
                        <label className="permission-toggle">
                          <input type="checkbox" />
                          <span className="toggle-slider"></span>
                          <span>Create</span>
                        </label>
                        <label className="permission-toggle">
                          <input type="checkbox" />
                          <span className="toggle-slider"></span>
                          <span>View</span>
                        </label>
                        <label className="permission-toggle">
                          <input type="checkbox" />
                          <span className="toggle-slider"></span>
                          <span>Edit</span>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case "repot":
        return (
          <div className="detail">
            <span>Reports</span>
            <p>Staff reports will be displayed here</p>
          </div>
        );
      case "selry":
        return (
          <div className="detail">
            <span>Salary Information</span>
            <p>Salary details will be shown here</p>
          </div>
        );
      default:
        return null;
    }
  };

  console.log("staffPermissionCheck", staffPermissionCheck);
  return (
    <div className="custom-view-detail py-2 py-md-5">
      <div className="container justify-content-center">
        <div className="staff-detail-main">
          <div className="staff-detail-right">
            <div className="nav-buttons mb-3 d-flex justify-content-end position-relative">
            
              <button
                className={`nav-btn ${activeTab === "profile" ? "active" : ""}`}
                onClick={() => handleTabClick("profile")}
              >
                profile
              </button>
              <button
                className={`nav-btn ${activeTab === "permission" ? "active" : ""}`}
                onClick={() => handleTabClick("permission")}
              >
                permission
              </button>
              <button
                className={`nav-btn ${activeTab === "contect" ? "active" : ""}`}
                onClick={() => handleTabClick("contect")}
              >
                contect
              </button>
              <button
                className={`nav-btn ${activeTab === "attendance" ? "active" : ""}`}
                onClick={() => handleTabClick("attendance")}
              >
                attendance
              </button>
              <button
                className={`nav-btn ${activeTab === "repot" ? "active" : ""}`}
                onClick={() => handleTabClick("repot")}
              >
                repot
              </button>
              <button
                className={`nav-btn ${activeTab === "selry" ? "active" : ""}`}
                onClick={() => handleTabClick("selry")}
              >
                selry
              </button>
            </div>

            <div className="detail-right-box">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomViewStaffDetail;
