import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Pagination, Table, Dropdown, Form } from "react-bootstrap";
import "./viewUser.scss";
import UserOne from "../../../../assets/img/user1.png";
import Subheader from "../../../../layout/Subheader/Subheader.react";
import Shield from "../../../../assets/img/shield.png";
import Aadhar from "../../../../assets/img/aadhaar.png";
import FingerPrint from "../../../../assets/img/fingerprint.png";
import FaceLock from "../../../../assets/img/face-recognition.png";
import { FaPhone, FaEnvelope } from 'react-icons/fa';

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
      country: "United States",
      city: "New York",
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
      age: 15,
      gender: "male",
      country: "Canada",
      city: "Toronto",
    },
  ];

  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [dateFilter, setDateFilter] = useState('all');
  const [ageFilter, setAgeFilter] = useState('all');
  const [customStartDate, setCustomStartDate] = useState('');
  const [customEndDate, setCustomEndDate] = useState('');
  const itemsPerPage = 5;

  const handleButtonClick = () => {
    navigate("/user-message");
  };

  const filterDataByDate = (data) => {
    const today = new Date();
    const startOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const startOfYear = new Date(today.getFullYear(), 0, 1);

    switch (dateFilter) {
      case 'week':
        return data.filter(item => new Date(item.requestDate) >= startOfWeek);
      case 'month':
        return data.filter(item => new Date(item.requestDate) >= startOfMonth);
      case 'year':
        return data.filter(item => new Date(item.requestDate) >= startOfYear);
      case 'today':
        return data.filter(item => new Date(item.requestDate).getDate() === today.getDate() && new Date(item.requestDate).getMonth() === today.getMonth() && new Date(item.requestDate).getFullYear() === today.getFullYear());
      case 'custom':
        const start = customStartDate ? new Date(customStartDate) : new Date(0);
        const end = customEndDate ? new Date(customEndDate) : new Date();
        return data.filter(item => {
          const date = new Date(item.requestDate);
          return date >= start && date <= end;
        });
      default:
        return data;
    }
  };

  const filterDataByAge = (data) => {
    switch (ageFilter) {
      case 'above16':
        return data.filter(item => item.age >= 16);
      case 'below16':
        return data.filter(item => item.age < 16);
      default:
        return data;
    }
  };

  const filteredData = filterDataByAge(filterDataByDate(ordersData));
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const renderVerificationIcon = (isVerified, icon) => (
    <span className="kyc-img-box">
      {isVerified && <img src={Shield} alt="verify" className="shield" />}
      <img src={icon} alt="verification" className="kyc-img" />
    </span>
  );

  const getStatusBadge = (status, isVerified) => {
    if (isVerified) return <span className="status-badge verified">Verified</span>;
    if (status === "Active") return <span className="status-badge active">Active</span>;
    return <span className="status-badge inactive">Inactive</span>;
  };

  const FilterSection = () => (
    <div className="filter-section"  >
      <h4 className="filter-title">All Users</h4>
      <div className="filter-buttons">
        <div className="age-filters">
          <button 
            className={`filter-btn ${ageFilter === 'all' ? 'active' : ''}`}
            onClick={() => setAgeFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${ageFilter === 'above16' ? 'active' : ''}`}
            onClick={() => setAgeFilter('above16')}
          >
            Above 16
          </button>
          <button 
            className={`filter-btn ${ageFilter === 'below16' ? 'active' : ''}`}
            onClick={() => setAgeFilter('below16')}
          >
            Below 16
          </button>
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search by Email ID or Phone Number"
            className="search-input"
          />
          <button className="search-btn">
            Search
          </button>
        </div>

        <div className="date-filters">
          <button 
            className={`filter-btn ${dateFilter === 'all' ? 'active' : ''}`}
            onClick={() => {
              setDateFilter('all');
              setCustomStartDate('');
              setCustomEndDate('');
            }}
          >
            All Time
          </button>
          <button 
            className={`filter-btn ${dateFilter === 'today' ? 'active' : ''}`}
            onClick={() => {
              setDateFilter('today');
              setCustomStartDate('');
              setCustomEndDate('');
            }}
          >
            Today
          </button>
          <button 
            className={`filter-btn ${dateFilter === 'week' ? 'active' : ''}`}
            onClick={() => {
              setDateFilter('week');
              setCustomStartDate('');
              setCustomEndDate('');
            }}
          >
            This Week
          </button>
          <button 
            className={`filter-btn ${dateFilter === 'custom' ? 'active' : ''}`}
            onClick={() => setDateFilter('custom')}
          >
            Custom
          </button>
        </div>

        {dateFilter === 'custom' && (
          <div className="custom-date-inputs">
            <Form.Control
              type="date"
              value={customStartDate}
              onChange={(e) => setCustomStartDate(e.target.value)}
              placeholder="Start Date"
            />
            <span className="date-separator">to</span>
            <Form.Control
              type="date"
              value={customEndDate}
              onChange={(e) => setCustomEndDate(e.target.value)}
              placeholder="End Date"
            />
          </div>
        )}
      </div>
    </div>
  );

  const UserTableComponent = ({ data }) => (
    <div className="table-responsive">
      <Table hover className="custom-table">
        <thead>
          <tr>
            <th>User Info</th>
            <th>Verification Status</th>
            <th>Contact Details</th>
            <th>ID Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index}>
              <td>
                <div className="user-info">
                  <Link to="/user-profile-details" className="user-link">
                    <img src={user.userImage} alt="user" />
                    <div className="user-details">
                      <div className="name">{user.userName}</div>
                      <div className="meta">
                        <span>{user.userId}</span>
                        <span>{user.age} years</span>
                        <span>{user.gender}</span>
                      </div>
                      <div className="location">
                        <span>{user.city}</span>
                        <span>{user.country}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </td>
              <td>
                <div className="d-flex gap-2">
                  {renderVerificationIcon(user.faceIDVerified, FaceLock)}
                  {renderVerificationIcon(user.aadharVerified, Aadhar)}
                  {renderVerificationIcon(user.fingerVerified, FingerPrint)}
                </div>
              </td>
              <td>
                <div className="font-weight-medium">{user.contact}</div>
                <div className="small text-muted">{user.email}</div>
              </td>
              <td>
                <div className="mb-2">
                  Master ID: {getStatusBadge(user.masterIdActive ? "Active" : "Inactive", user.masterIdVerified)}
                </div>
                <div>
                  My ID: {getStatusBadge(user.myIdActive ? "Active" : "Inactive", false)}
                </div>
              </td>
              <td>
                <div className="action-buttons">
                  <button
                    className="action-btn mail-btn"
                    onClick={() => window.location.href = `mailto:${user.email}`}
                    title="Send Email"
                  >
                    <FaEnvelope />
                  </button>
                  <button
                    className="action-btn call-btn"
                    onClick={() => window.location.href = `tel:${user.contact}`}
                    title="Call"
                  >
                    <FaPhone />
                  </button>
                  <button
                    onClick={handleButtonClick}
                    className="action-btn message-btn"
                  >
                    Message
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );

  return (
    <div className="manage-id pt-2 pb-5 mt-4 mt-lg-0">
      <div className="container">
        <div className="header-actions">
          <h5>Total Users: {filteredData.length}</h5>
          <button
            className="btn-create"
            onClick={() => navigate("/create-user")}
          >
            Create New User
          </button>
        </div>
        
        <FilterSection />
        
        <UserTableComponent data={currentItems} />
        
        {filteredData.length > itemsPerPage && (
          <div className="d-flex justify-content-center mt-3">
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
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewUser;
