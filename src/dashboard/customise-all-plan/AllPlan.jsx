import React, { useState } from "react";
import { Tab, Tabs, Row, Col, Card } from "react-bootstrap";
import "./allPlan.scss";

import ConstructionImg from "../../assets/img/under-construction.png";

const AllPlan = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [key, setKey] = useState('individual');

  function GridView() {
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

  function TableView() {
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
              <button>Create Plans</button>
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
              <button>Create Plans</button>
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
              <button>Create Plans</button>
              <button>Create Packages</button>
            </div>
            {viewMode === "grid" ? <GridView /> : <TableView />}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default AllPlan;
