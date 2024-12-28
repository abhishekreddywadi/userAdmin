import React, {useState} from "react";
import { Table, Button, Row, Col, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function CustomViewTable({
  tableTitle,
  orders,
  totalNumber = false,
  totalNumberTitle,
}) 
{
  const [viewMode, setViewMode] = useState("grid");

  function GridView() {
const navigate = useNavigate();
    return (
      <Row className="view-card-list">
        {orders.map((plan) => (
          <Col key={plan.userId} md={3}>
            <Card className="view-card">
              <Card.Body>
                <Link to='/view-staff-detail'>
                  <img src={plan.userImage} alt="price" className="w-100" />
                  <h5>{plan.userName}</h5>
                  <span>{plan.staffRole}</span>
                </Link>
                <div className="person-department">
                  <div className="detail">
                    <span>Department</span>
                    <p>{plan.department}</p>
                  </div>
                  <div className="detail">
                    <span>Date Hired</span>
                    <p>{plan.requestDate}</p>
                  </div>
                </div>

                <div className="status">
                  <p className={`${plan.enrollStatus.toLowerCase() == 'active' ? 'active' : 'declined'}`}>{plan.enrollStatus}</p>
                  <button type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                    </svg>
                  </button>
                </div>
              </Card.Body>
              <Card.Footer>
                <button onClick={()=>navigate('/user-message')}  >Message</button>
                <a href="tel:+01234567890" className="call">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                  </svg>
                </a>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }

  function TableView() {

    return (
      <div className="manage-id-table custom-view-staff-table bg-light p-3 rounded-lg mt-5">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h6>Total No of Staff: 50</h6>
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
      <div className="table-head d-flex align-items-center justify-content-between mb-4">
        <h5 className="d-flex align-items-center mb-0">
          {tableTitle}{" "}
          <p className="mb-0 ml-4">{totalNumber && totalNumberTitle}</p>
        </h5>
        <div className="nav nav-pills mx-auto d-none d-xl-flex header-center-pills align-items-center">
          <select>
            <option>All Category   </option>
          </select>

          <select>
            <option>Sub Category</option>
          </select>

          <select>
            <option>Active</option>
          </select>
        </div>
        <input type="search" placeholder="Search" />
      </div>
      <Table bordered hover responsive>
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Staff ID Detail</th>
            <th>Joining Date</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Staff Contact Detail</th>
            <th>Enroll</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
                <td>{index + 1}</td>
              {/* <td>{order.orderId}</td> */}
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
              <td>{order.requestDate}</td>
              <td>{order.acceptedDate}</td>
              <td>
                <span className={`status-badge ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </td>
              <td>
                <div className="staff-info">
                  <img
                    src={order.staffImage}
                    alt="Staff"
                    className="staff-image"
                  />
                  <div className="d-flex flex-column">
                    <span>{order.staffName}</span>
                    <span style={{ color: "#b1b1b1" }}>{order.staffRole}</span>
                  </div>
                </div>
              </td>
              <td>{order.enrollStatus}</td>
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
    );
  }
  return (
    <div className="manage-id-table-main mt-4">
      <div className="view-mode-switcher manage-mode-top d-flex aling-items-center justify-content-end mb-3">
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

      <Link className="add-staff" to='/create-staff'>Add Staff</Link>
      {viewMode === "grid" ? <GridView /> : <TableView />}
    </div>
  );
}

export default CustomViewTable;
