import React, { useState } from "react";
import { Tab, Tabs, Row, Col, Card } from "react-bootstrap";
import "./allPlan.scss";

import ConstructionImg from "../../assets/img/under-construction.png";

const AllPlan = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [key, setKey] = useState('individual');
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    category: '',
    planImage: null,
    planName: '',
    description: '',
    price: '',
    discount: '',
    comparePrice: '',
    gstPercentage: '',
    durationType: 'monthly', // monthly, yearly, or days
    duration: '',
  });

  const planCategories = [
    'Basic',
    'Premium',
    'Enterprise',
    'Custom'
  ];

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: e.target.files[0]
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    setShowModal(false);
  };

  const renderModal = () => (
    <div className={`modal-overlay ${showModal ? 'show' : ''}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>Create New Plan</h2>
          <button className="close-button" onClick={() => setShowModal(false)}>×</button>
        </div>
        
        <form onSubmit={handleSubmit} className="plan-form">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="category">Plan Category</label>
              <select 
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Category</option>
                {planCategories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="planImage">Plan Image</label>
              <input 
                type="file"
                id="planImage"
                name="planImage"
                onChange={handleInputChange}
                accept="image/*"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="planName">Plan Name</label>
              <input 
                type="text"
                id="planName"
                name="planName"
                value={formData.planName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="description">Description</label>
              <textarea 
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows="3"
              />
            </div>

            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input 
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                required
                min="0"
                step="0.01"
              />
            </div>

            <div className="form-group">
              <label htmlFor="discount">Discount (%)</label>
              <input 
                type="number"
                id="discount"
                name="discount"
                value={formData.discount}
                onChange={handleInputChange}
                min="0"
                max="100"
              />
            </div>

            <div className="form-group">
              <label htmlFor="comparePrice">Compare Price</label>
              <input 
                type="number"
                id="comparePrice"
                name="comparePrice"
                value={formData.comparePrice}
                onChange={handleInputChange}
                min="0"
                step="0.01"
              />
            </div>

            <div className="form-group">
              <label htmlFor="gstPercentage">GST Percentage</label>
              <input 
                type="number"
                id="gstPercentage"
                name="gstPercentage"
                value={formData.gstPercentage}
                onChange={handleInputChange}
                required
                min="0"
                max="100"
              />
            </div>

            <div className="form-group">
              <label htmlFor="durationType">Duration Type</label>
              <select 
                id="durationType"
                name="durationType"
                value={formData.durationType}
                onChange={handleInputChange}
                required
              >
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
                <option value="days">Days</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="duration">
                Duration {formData.durationType === 'days' ? '(Days)' : '(Number of months/years)'}
              </label>
              <input 
                type="number"
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                required
                min="1"
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={() => setShowModal(false)}>
              Cancel
            </button>
            <button type="submit" className="submit-btn">
              Create Plan
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const GridView = () => {
    const plans = [
      {
        id: 1,
        title: "Master ID",
        price: "1000",
        img: ConstructionImg,
        description: "This is an input not demo tax.",
      },
      {
        id: 2,
        title: "Physical PVC ID Card",
        price: "500",
        img: ConstructionImg,
        description: "This is an input not demo tax.",
      },
      {
        id: 3,
        title: "Business ID",
        price: "500",
        img: ConstructionImg,
        description: "This is an input not demo tax.",
      },
    ];

    return (
      <Row>
        {plans.map((plan) => (
          <Col key={plan.id} md={4}>
            <Card className="plan-card">
              <Card.Body>
                <h5>RS {plan.price}</h5>
                <h6>{plan.title}</h6>
                <img src={plan.img} alt="price" className="w-100" />
                <p>{plan.description}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }

  const TableView = () => {
    const plans = [
      {
        id: 1,
        title: "Master ID",
        price: "1000",
        img: ConstructionImg,
        description: "This is an input not demo tax.",
      },
      {
        id: 2,
        title: "Physical PVC ID Card",
        price: "500",
        img: ConstructionImg,
        description: "This is an input not demo tax.",
      },
      {
        id: 3,
        title: "Business ID",
        price: "500",
        img: ConstructionImg,
        description: "This is an input not demo tax.",
      },
    ];

    return (
      <table className="table plan-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>img</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {plans.map((plan) => (
            <tr key={plan.id}>
              <td>{plan.title}</td>
              <td>
                <img src={plan.img} alt="plan" />
              </td>
              <td>RS {plan.price}</td>
              <td>{plan.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <div className="container">
      <div className="plan-packages all-plan">
        <Tabs activeKey={key} onSelect={(k) => setKey(k)} id="plan-packages-tabs">
          <Tab eventKey="individual" title="Individual Plan">
            <div className="view-mode-switcher view-mode-top">
              <button onClick={() => setViewMode("grid")}>
                Grid
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-grid-3x2-gap-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z" />
                </svg>
              </button>
              <button onClick={() => setViewMode("table")}>
                Table
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-table"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 2h-4v3h4zm0 4h-4v3h4zm0 4h-4v3h3a1 1 0 0 0 1-1zm-5 3v-3H6v3zm-5 0v-3H1v2a1 1 0 0 0 1 1zm-4-4h4V8H1zm0-4h4V4H1zm5-3v3h4V4zm4 4H6v3h4z" />
                </svg>
              </button>
            </div>

            <div className="view-mode-switcher">
              <button onClick={() => setShowModal(true)}>Create Plans</button>
              <button>Create Packages</button>
            </div>
            {viewMode === "grid" ? <GridView /> : <TableView />}
          </Tab>
          <Tab eventKey="business" title="Business Plan">
          <div className="view-mode-switcher view-mode-top">
              <button onClick={() => setViewMode("grid")}>
                Grid
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-grid-3x2-gap-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z" />
                </svg>
              </button>
              <button onClick={() => setViewMode("table")}>
                Table
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-table"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 2h-4v3h4zm0 4h-4v3h4zm0 4h-4v3h3a1 1 0 0 0 1-1zm-5 3v-3H6v3zm-5 0v-3H1v2a1 1 0 0 0 1 1zm-4-4h4V8H1zm0-4h4V4H1zm5-3v3h4V4zm4 4H6v3h4z" />
                </svg>
              </button>
            </div>

            <div className="view-mode-switcher">
              <button onClick={() => setShowModal(true)}>Create Plans</button>
              <button>Create Packages</button>
            </div>
            {viewMode === "grid" ? <GridView /> : <TableView />}
          </Tab>
          <Tab eventKey="user" title="User Plan">
          <div className="view-mode-switcher view-mode-top">
              <button onClick={() => setViewMode("grid")}>
                Grid
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-grid-3x2-gap-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z" />
                </svg>
              </button>
              <button onClick={() => setViewMode("table")}>
                Table
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-table"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 2h-4v3h4zm0 4h-4v3h4zm0 4h-4v3h3a1 1 0 0 0 1-1zm-5 3v-3H6v3zm-5 0v-3H1v2a1 1 0 0 0 1 1zm-4-4h4V8H1zm0-4h4V4H1zm5-3v3h4V4zm4 4H6v3h4z" />
                </svg>
              </button>
            </div>

            <div className="view-mode-switcher">
              <button onClick={() => setShowModal(true)}>Create Plans</button>
              <button>Create Packages</button>
            </div>
            {viewMode === "grid" ? <GridView /> : <TableView />}
          </Tab>
        </Tabs>
      </div>
      {showModal && renderModal()}
    </div>
  );
};

export default AllPlan;
