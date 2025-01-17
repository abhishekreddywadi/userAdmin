import React, { useState } from "react";
import './viewBusiness.scss';
import UserOne from "../../../../assets/img/user1.png";
import Subheader from "../../../../layout/Subheader/Subheader.react";

function ViewBusiness() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("all");
  const [ageFilter, setAgeFilter] = useState("all");
  const [customDateRange, setCustomDateRange] = useState({
    start: "",
    end: ""
  });
  const itemsPerPage = 8;

  const ordersData = [
    {
      orderId: "ID0001",
      userImage: UserOne,
      userName: "Rohan Talpadhi",
      userId: "BHA_XXXXXXXXXX",
      requestDate: "11-12-2024",
      acceptedDate: "12-12-2019",
      status: "Declined",
      staffImage: UserOne,
      staffName: "Sonya Wilson",
      staffRole: "Aquaguard Manager",
      enrollStatus: "PENDING",
      dateOfBirth: "01-01-2000"
    },
    {
      orderId: "ID0002",
      userImage: UserOne,
      userName: "Rohan Talpadhi",
      userId: "BHA_XXXXXXXXXX",
      requestDate: "11-12-2024",
      acceptedDate: "12-12-2019",
      status: "Pending",
      staffImage: UserOne,
      staffName: "Anjali Govind",
      staffRole: "Aquaguard Manager",
      enrollStatus: "PENDING",
      dateOfBirth: "01-01-2010"
    },
    {
      orderId: "ID0002",
      userImage: UserOne,
      userName: "Rohan Talpadhi",
      userId: "BHA_XXXXXXXXXX",
      requestDate: "11-12-2024",
      acceptedDate: "12-12-2019",
      status: "In-review",
      staffImage: UserOne,
      staffName: "Syam Prashad",
      staffRole: "Aquaguard Manager",
      enrollStatus: "PENDING",
      dateOfBirth: "01-01-2005"
    },
    {
      orderId: "ID0002",
      userImage: UserOne,
      userName: "Rohan Talpadhi",
      userId: "BHA_XXXXXXXXXX",
      requestDate: "11-12-2024",
      acceptedDate: "12-12-2019",
      status: "Accepted",
      staffImage: UserOne,
      staffName: "Sonya Wilson",
      staffRole: "Aquaguard Manager",
      enrollStatus: "PENDING",
      dateOfBirth: "01-01-1990"
    },
    {
      orderId: "ID0002",
      userImage: UserOne,
      userName: "Rohan Talpadhi",
      userId: "BHA_XXXXXXXXXX",
      requestDate: "11-12-2024",
      acceptedDate: "12-12-2019",
      status: "Accepted",
      staffImage: UserOne,
      staffName: "Anjali Govind",
      staffRole: "Sonya Wilson",
      enrollStatus: "PENDING",
      dateOfBirth: "01-01-2008"
    },
    {
      orderId: "ID0002",
      userImage: UserOne,
      userName: "Rohan Talpadhi",
      userId: "BHA_XXXXXXXXXX",
      requestDate: "11-12-2024",
      acceptedDate: "12-12-2019",
      status: "Accepted",
      staffImage: UserOne,
      staffName: "Anjali Govind",
      staffRole: "Sonya Wilson",
      enrollStatus: "PENDING",
      dateOfBirth: "01-01-2012"
    },
    {
      orderId: "ID0002",
      userImage: UserOne,
      userName: "Rohan Talpadhi",
      userId: "BHA_XXXXXXXXXX",
      requestDate: "11-12-2024",
      acceptedDate: "12-12-2019",
      status: "Accepted",
      staffImage: UserOne,
      staffName: "Anjali Govind",
      staffRole: "Sonya Wilson",
      enrollStatus: "PENDING",
      dateOfBirth: "01-01-2002"
    },
    {
      orderId: "ID0002",
      userImage: UserOne,
      userName: "Rohan Talpadhi",
      userId: "BHA_XXXXXXXXXX",
      requestDate: "11-12-2024",
      acceptedDate: "12-12-2019",
      status: "Accepted",
      staffImage: UserOne,
      staffName: "Anjali Govind",
      staffRole: "Sonya Wilson",
      enrollStatus: "PENDING",
      dateOfBirth: "01-01-2006"
    },
    {
      orderId: "ID0002",
      userImage: UserOne,
      userName: "Rohan Talpadhi",
      userId: "BHA_XXXXXXXXXX",
      requestDate: "11-12-2024",
      acceptedDate: "12-12-2019",
      status: "Accepted",
      staffImage: UserOne,
      staffName: "Anjali Govind",
      staffRole: "Sonya Wilson",
      enrollStatus: "PENDING",
      dateOfBirth: "01-01-2004"
    },
    {
      orderId: "ID0002",
      userImage: UserOne,
      userName: "Rohan Talpadhi",
      userId: "BHA_XXXXXXXXXX",
      requestDate: "11-12-2024",
      acceptedDate: "12-12-2019",
      status: "Accepted",
      staffImage: UserOne,
      staffName: "Anjali Govind",
      staffRole: "Sonya Wilson",
      enrollStatus: "PENDING",
      dateOfBirth: "01-01-2010"
    },
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'accepted': return 'success';
      case 'declined': return 'danger';
      case 'pending': return 'warning';
      case 'in-review': return 'info';
      default: return 'secondary';
    }
  };

  const filterByDate = (data) => {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());

    switch (dateFilter) {
      case 'today':
        return data.filter(order => new Date(order.requestDate).toDateString() === today.toDateString());
      case 'thisWeek':
        return data.filter(order => {
          const orderDate = new Date(order.requestDate);
          return orderDate >= startOfWeek && orderDate <= today;
        });
      case 'custom':
        if (!customDateRange.start || !customDateRange.end) return data;
        return data.filter(order => {
          const orderDate = new Date(order.requestDate);
          return orderDate >= new Date(customDateRange.start) && 
                 orderDate <= new Date(customDateRange.end);
        });
      default:
        return data;
    }
  };

  const handleAgeFilterChange = (filter) => {
    setAgeFilter(filter);
    setCurrentPage(1);
  };

  const filterByAge = (data) => {
    if (ageFilter === "all") return data;
    
    return data.filter(item => {
      const age = calculateAge(item.dateOfBirth);
      if (ageFilter === "above16") return age >= 16;
      if (ageFilter === "below16") return age < 16;
      return true;
    });
  };

  const calculateAge = (dateOfBirth) => {
    if (!dateOfBirth) return 0;
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const filteredData = ordersData.filter(order => {
    const matchesSearch = order.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.userId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.orderId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = !statusFilter || order.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const dateFilteredData = filterByDate(filteredData);
  const ageFilteredData = filterByAge(dateFilteredData);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = ageFilteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(ageFilteredData.length / itemsPerPage);

  return (
    <div className="view-business-container">
      <Subheader />
      
      <div className="business-content">
        <div className="business-header">
          <div className="header-top">
            <h2>Business Requests</h2>
            <div className="filter-groups">
              <div className="age-filter-group">
                <button
                  className={`age-btn ${ageFilter === "all" ? "active" : ""}`}
                  onClick={() => handleAgeFilterChange("all")}
                >
                  All
                </button>
                <button
                  className={`age-btn ${ageFilter === "above16" ? "active" : ""}`}
                  onClick={() => handleAgeFilterChange("above16")}
                >
                  Above 16
                </button>
                <button
                  className={`age-btn ${ageFilter === "below16" ? "active" : ""}`}
                  onClick={() => handleAgeFilterChange("below16")}
                >
                  Below 16
                </button>
              </div>
              <div className="date-filter-group">
                <button 
                  className={`filter-btn ${dateFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setDateFilter('all')}
                >
                  All Time
                </button>
                <button 
                  className={`filter-btn ${dateFilter === 'today' ? 'active' : ''}`}
                  onClick={() => setDateFilter('today')}
                >
                  Today
                </button>
                <button 
                  className={`filter-btn ${dateFilter === 'thisWeek' ? 'active' : ''}`}
                  onClick={() => setDateFilter('thisWeek')}
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
            </div>

            {dateFilter === 'custom' && (
              <div className="custom-date-range">
                <input
                  type="date"
                  value={customDateRange.start}
                  onChange={(e) => setCustomDateRange(prev => ({ ...prev, start: e.target.value }))}
                />
                <span>to</span>
                <input
                  type="date"
                  value={customDateRange.end}
                  onChange={(e) => setCustomDateRange(prev => ({ ...prev, end: e.target.value }))}
                />
              </div>
            )}

            <div className="header-actions">
              <div className="search-box">
                <i className="fas fa-search"></i>
                <input 
                  type="text" 
                  placeholder="Search by name, ID or order ID..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="filter-box">
                <select 
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="">All Status</option>
                  <option value="accepted">Accepted</option>
                  <option value="declined">Declined</option>
                  <option value="pending">Pending</option>
                  <option value="in-review">In Review</option>
                </select>
              </div>
            </div>
          </div>

          <div className="table-responsive">
            <table className="business-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>User Details</th>
                  <th>Request Date</th>
                  <th>Accepted Date</th>
                  <th>Status</th>
                  <th>Staff Details</th>
                  <th>Enroll Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((order, index) => (
                  <tr key={index} className="table-row">
                    <td className="order-id-cell">{order.orderId}</td>
                    <td className="user-details-cell">
                      <div className="user-info">
                        <img src={order.userImage} alt={order.userName} className="user-avatar" />
                        <div className="user-text">
                          <span className="name">{order.userName}</span>
                          <span className="id">{order.userId}</span>
                        </div>
                      </div>
                    </td>
                    <td className="date-cell">
                      <i className="far fa-calendar-alt"></i>
                      {order.requestDate}
                    </td>
                    <td className="date-cell">
                      <i className="far fa-calendar-check"></i>
                      {order.acceptedDate}
                    </td>
                    <td className="status-cell">
                      <span className={`status-badge ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="staff-details-cell">
                      <div className="staff-info">
                        <img src={order.staffImage} alt={order.staffName} className="staff-avatar" />
                        <div className="staff-text">
                          <span className="name">{order.staffName}</span>
                          <span className="role">{order.staffRole}</span>
                        </div>
                      </div>
                    </td>
                    <td className="enroll-status-cell">
                      <span className="enroll-badge">{order.enrollStatus}</span>
                    </td>
                    <td className="actions-cell">
                      <button className="btn-view" title="View Details">
                        <i className="fas fa-eye"></i>
                      </button>
                      <button className="btn-edit" title="Edit">
                        <i className="fas fa-pencil-alt"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pagination-container">
            <div className="pagination">
              <button 
                className="page-btn"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => prev - 1)}
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  className={`page-btn ${currentPage === index + 1 ? 'active' : ''}`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              <button 
                className="page-btn"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(prev => prev + 1)}
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
            <div className="total-items">
              Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, ageFilteredData.length)} of {ageFilteredData.length} entries
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewBusiness;