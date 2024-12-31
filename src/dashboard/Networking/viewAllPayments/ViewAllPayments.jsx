import React, { useState } from 'react';
import './viewAllPayments.scss';

// Dummy payment data
const dummyPayments = [
  {
    id: "PAY001",
    customerName: "John Doe",
    customerId: "MU1234",
    date: "2024-12-31",
    amount: 1500.00,
    paymentMethod: "Credit Card",
    status: "Completed"
  },
  {
    id: "PAY002",
    customerName: "Jane Smith",
    customerId: "MU1235",
    date: "2024-12-30",
    amount: 2500.00,
    paymentMethod: "PayPal",
    status: "Pending"
  },
  {
    id: "PAY003",
    customerName: "Mike Johnson",
    customerId: "MU1236",
    date: "2024-12-29",
    amount: 1800.00,
    paymentMethod: "Credit Card",
    status: "Completed"
  },
  {
    id: "PAY004",
    customerName: "Sarah Wilson",
    customerId: "MU1237",
    date: "2024-12-25",
    amount: 3200.00,
    paymentMethod: "Bank Transfer",
    status: "Completed"
  },
  {
    id: "PAY005",
    customerName: "Robert Brown",
    customerId: "MU1238",
    date: "2024-11-30",
    amount: 2100.00,
    paymentMethod: "Credit Card",
    status: "Failed"
  },
  {
    id: "PAY006",
    customerName: "Emily Davis",
    customerId: "MU1239",
    date: "2024-12-31",
    amount: 1750.00,
    paymentMethod: "PayPal",
    status: "Completed"
  },
  {
    id: "PAY007",
    customerName: "Michael Clark",
    customerId: "MU1240",
    date: "2024-12-30",
    amount: 3100.00,
    paymentMethod: "Credit Card",
    status: "Pending"
  },
  {
    id: "PAY008",
    customerName: "Lisa Anderson",
    customerId: "MU1241",
    date: "2024-12-29",
    amount: 2800.00,
    paymentMethod: "Bank Transfer",
    status: "Completed"
  },
  {
    id: "PAY009",
    customerName: "David Wilson",
    customerId: "MU1242",
    date: "2024-12-28",
    amount: 1900.00,
    paymentMethod: "Credit Card",
    status: "Failed"
  },
  {
    id: "PAY010",
    customerName: "Susan Miller",
    customerId: "MU1243",
    date: "2024-12-27",
    amount: 2300.00,
    paymentMethod: "PayPal",
    status: "Completed"
  }
];

function ViewAllPayments() {
  const [timeFilter, setTimeFilter] = useState('today');
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0]);
  const [showCustomDate, setShowCustomDate] = useState(false);

  // Handle time filter change
  const handleTimeFilterChange = (e) => {
    const filter = e.target.value;
    setTimeFilter(filter);
    setShowCustomDate(filter === 'custom');

    // Reset dates when changing filter
    const today = new Date();
    if (filter === 'today') {
      setStartDate(today.toISOString().split('T')[0]);
      setEndDate(today.toISOString().split('T')[0]);
    }
  };

  // Filter data based on selected time period
  const getFilteredData = () => {
    const today = new Date();
    let filteredData = [...dummyPayments];

    switch (timeFilter) {
      case 'today':
        filteredData = dummyPayments.filter(payment => 
          new Date(payment.date).toDateString() === today.toDateString()
        );
        break;
      case 'week':
        const lastWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
        filteredData = dummyPayments.filter(payment => 
          new Date(payment.date) >= lastWeek
        );
        break;
      case 'month':
        const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
        filteredData = dummyPayments.filter(payment => 
          new Date(payment.date) >= lastMonth
        );
        break;
      case 'year':
        const lastYear = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
        filteredData = dummyPayments.filter(payment => 
          new Date(payment.date) >= lastYear
        );
        break;
      case 'custom':
        filteredData = dummyPayments.filter(payment => {
          const paymentDate = new Date(payment.date);
          return paymentDate >= new Date(startDate) && paymentDate <= new Date(endDate);
        });
        break;
      default:
        break;
    }

    return filteredData;
  };

  return (
    <div className="view-all-payments">
      <div className="filter-section">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h4>Payment History</h4>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <div className="d-flex align-items-center gap-3">
              <select 
                className="form-select"
                value={timeFilter}
                onChange={handleTimeFilterChange}
              >
                <option value="today">Today</option>
                <option value="week">Last Week</option>
                <option value="month">Last Month</option>
                <option value="year">Last Year</option>
                <option value="custom">Custom Range</option>
              </select>

              {showCustomDate && (
                <div className="d-flex align-items-center gap-2">
                  <input
                    type="date"
                    className="form-control"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                  <input
                    type="date"
                    className="form-control"
                    value={endDate}
                    min={startDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Payment ID</th>
              <th>Customer Details</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {getFilteredData().map((payment) => (
              <tr key={payment.id}>
                <td>{payment.id}</td>
                <td>
                  <div className="d-flex flex-column">
                    <span>{payment.customerName}</span>
                    <small className="text-muted">{payment.customerId}</small>
                  </div>
                </td>
                <td>{new Date(payment.date).toLocaleDateString()}</td>
                <td>
                  <span className="text-success">
                    ${payment.amount.toFixed(2)}
                  </span>
                </td>
                <td>
                  <span className={`badge ${
                    payment.paymentMethod === 'Credit Card' ? 'bg-info' :
                    payment.paymentMethod === 'PayPal' ? 'bg-warning' : 'bg-primary'
                  }`}>
                    {payment.paymentMethod}
                  </span>
                </td>
                <td>
                  <span className={`badge ${
                    payment.status === 'Completed' ? 'bg-success' :
                    payment.status === 'Pending' ? 'bg-warning' : 'bg-danger'
                  }`}>
                    {payment.status}
                  </span>
                </td>
              </tr>
            ))}
            {getFilteredData().length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  No payments found for the selected time period
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewAllPayments;