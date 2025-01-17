import React, { useState } from 'react';
import './UserProfileDetails.scss';

const UserProfileDetails = ({ selectedUser }) => {
  const [activeTab, setActiveTab] = useState('masterid');

  const userData = {
    name: "Pankaj",
    email: "pankaj@gmail.com",
    phone: "+911234567890",
    location: "Bangalore, Karnataka, India, 144040",
    masterID: {
      status: "ACCEPTED",
      id: "567XXXXXX567",
      verifiedBy: {
        name: "Rohan Singh",
        id: "MBS1234567",
        signature: "PIN"
      }
    },
    myID: {
      id: "btmv2523",
      status: "active"
    },
    business: {
      total: 3,
      active: 2,
      pending: 1,
      businesses: [
        { name: "Business 1", type: "Retail", status: "Active" },
        { name: "Business 2", type: "Service", status: "Active" },
        { name: "Business 3", type: "Manufacturing", status: "Pending" }
      ]
    },
    documents: {
      proofs: [
        { name: "ID Proof", status: "Verified", file: "id_proof.pdf" },
        { name: "Address Proof", status: "Verified", file: "address_proof.pdf" }
      ]
    }
  };

  const renderMasterIDContent = () => (
    <div className="masterid-content">
      <div className="user-basic-info">
        <div className="profile-image">
          <div className="placeholder-image">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <div className="info-section">
          <div className="info-item">
            <i className="fas fa-user"></i>
            <span className="label">Name</span>
            <span className="value">{userData.name}</span>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <span className="value">{userData.email}</span>
          </div>
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <span className="value">{userData.phone}</span>
          </div>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <span className="value">{userData.location}</span>
          </div>
          <div className="info-item">
            <i className="fas fa-id-card"></i>
            <span className="value">{userData.masterID.id}</span>
          </div>
          <div className="info-item">
            <i className="fas fa-id-badge"></i>
            <span className="value">{userData.myID.id}</span>
          </div>
        </div>
      </div>
      <div className="verification-section">
        <div className="status-box">
          <h3>Status</h3>
          <div className={`status-badge ${userData.masterID.status.toLowerCase()}`}>
            {userData.masterID.status}
          </div>
        </div>
        <div className="verified-by">
          <h3>Verified by</h3>
          <div className="verifier-info">
            <img src="https://via.placeholder.com/50" alt="Verifier" className="verifier-image" />
            <div className="verifier-details">
              <p className="name">{userData.masterID.verifiedBy.name}</p>
              <p className="id">{userData.masterID.verifiedBy.id}</p>
              <p className="signature">Signature: {userData.masterID.verifiedBy.signature}</p>
            </div>
          </div>
        </div>
        <div className="proof-section">
          <h3>Attach Proof</h3>
          <div className="proof-list">
            {userData.documents.proofs.map((proof, index) => (
              <div key={index} className="proof-item">
                <span className="proof-name">{proof.name}</span>
                <span className={`proof-status ${proof.status.toLowerCase()}`}>
                  {proof.status}
                </span>
                <button className="view-btn">
                  <i className="fas fa-eye"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderMyIDContent = () => (
    <div className="myid-content">
      <div className="id-card">
        <div className="id-header">
          <h3>My ID Card</h3>
          <span className={`status ${userData.myID.status}`}>
            {userData.myID.status}
          </span>
        </div>
        <div className="id-details">
          <div className="id-photo">
            <i className="fas fa-user"></i>
          </div>
          <div className="id-info">
            <p><strong>ID:</strong> {userData.myID.id}</p>
            <p><strong>Name:</strong> {userData.name}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>Phone:</strong> {userData.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMyIDVerificationContent = () => (
    <div className="myid-content">
      <div className="id-request-list">
        <div className="id-request accepted">
          <div className="user-info">
            <div className="profile-placeholder"></div>
            <div className="info-section">
              <h3>Name <span>Pankaj</span></h3>
              <div className="contact-info">
                <div className="info-item">
                  <i className="fas fa-envelope"></i>
                  <span>pankaj@gmail.com</span>
                </div>
                <div className="info-item">
                  <i className="fas fa-phone"></i>
                  <span>+911234567890</span>
                </div>
                <div className="info-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Bangalore, Karnataka, India, 144040</span>
                </div>
                <div className="info-item">
                  <i className="fas fa-id-card"></i>
                  <span>567XXXXXX567</span>
                </div>
                <div className="info-item">
                  <i className="fas fa-address-card"></i>
                  <span>btmv2523</span>
                </div>
              </div>
            </div>
          </div>
          <div className="verification-info">
            <div className="verified-by">
              <h4>Verified by</h4>
              <div className="verifier">
                <img src="path_to_verifier_image" alt="Raman Kumar" />
                <div className="verifier-details">
                  <h5>Raman Kumar</h5>
                  <p>MBS1234567</p>
                  <p>Signature: PIN</p>
                  <div className="verification-date">
                    <i className="far fa-clock"></i>
                    <span>Accepted on: Jan 17, 2025 at 2:30 PM</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="status-section">
              <div className="status">
                <h4>Status:</h4>
                <span className="status-badge accepted">ACCEPTED</span>
              </div>
              <div className="reason">
                <h4>Reason:</h4>
                <p className="accepted-text">Your provided proofs are accepted</p>
              </div>
            </div>
            <div className="proof-section">
              <h4>Attach Proof:</h4>
              <div className="proof-status">
                <i className="fas fa-check-circle"></i>
                <i className="fas fa-file-alt"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="id-request rejected">
          <div className="user-info">
            <div className="profile-placeholder"></div>
            <div className="info-section">
              <h3>Name <span>Pankaj</span></h3>
              <div className="contact-info">
                <div className="info-item">
                  <i className="fas fa-envelope"></i>
                  <span>pankaj@gmail.com</span>
                </div>
                <div className="info-item">
                  <i className="fas fa-phone"></i>
                  <span>+911234567890</span>
                </div>
                <div className="info-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Bangalore, Karnataka, India, 144040</span>
                </div>
                <div className="info-item">
                  <i className="fas fa-id-card"></i>
                  <span>567XXXXXX567</span>
                </div>
                <div className="info-item">
                  <i className="fas fa-address-card"></i>
                  <span>btmv2523</span>
                </div>
              </div>
            </div>
          </div>
          <div className="verification-info">
            <div className="verified-by">
              <h4>Verified by</h4>
              <div className="verifier">
                <img src="path_to_verifier_image" alt="Rohan Singh" />
                <div className="verifier-details">
                  <h5>Rohan Singh</h5>
                  <p>MBS1234567</p>
                  <p>Signature: PIN</p>
                  <div className="verification-date rejected">
                    <i className="far fa-clock"></i>
                    <span>Rejected on: Jan 17, 2025 at 3:45 PM</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="status-section">
              <div className="status">
                <h4>Status:</h4>
                <span className="status-badge rejected">REJECT</span>
              </div>
              <div className="reason">
                <h4>Reason:</h4>
                <p className="rejected-text">Id Proof did not matched/Documents are fake</p>
              </div>
            </div>
            <div className="proof-section">
              <h4>Attach Proof:</h4>
              <div className="proof-status">
                <i className="fas fa-check-circle"></i>
                <i className="fas fa-file-alt"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBusinessContent = () => (
    <div className="business-content">
      <div className="business-summary">
        <div className="summary-card">
          <h3>Total Businesses</h3>
          <span className="count">{userData.business.total}</span>
        </div>
        <div className="summary-card">
          <h3>Active</h3>
          <span className="count active">{userData.business.active}</span>
        </div>
        <div className="summary-card">
          <h3>Pending</h3>
          <span className="count pending">{userData.business.pending}</span>
        </div>
      </div>
      <div className="business-list">
        {userData.business.businesses.map((business, index) => (
          <div key={index} className="business-card">
            <div className="business-info">
              <h4>{business.name}</h4>
              <p className="type">{business.type}</p>
              <span className={`status ${business.status.toLowerCase()}`}>
                {business.status}
              </span>
            </div>
            <div className="business-actions">
              <button className="action-btn">
                <i className="fas fa-edit"></i>
              </button>
              <button className="action-btn">
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="user-profile-details">
      <div className="profile-header">
        <div className="user-avatar">
          <img src={selectedUser?.profile_pic || 'https://via.placeholder.com/150'} alt="Profile" />
          <div className="status-badge" data-status={userData.masterID.status.toLowerCase()}></div>
        </div>
        <div className="user-info">
          <h2>{userData.name}</h2>
          <div className="user-tags">
            <span className="tag">ID: {userData.masterID.id}</span>
            <span className="tag">My ID: {userData.myID.id}</span>
          </div>
        </div>
      </div>

      <div className="main-tabs">
        <button 
          className={`tab ${activeTab === 'masterid' ? 'active' : ''}`}
          onClick={() => setActiveTab('masterid')}
        >
          Master ID Request
        </button>
        <button 
          className={`tab ${activeTab === 'myid' ? 'active' : ''}`}
          onClick={() => setActiveTab('myid')}
        >
          My ID
        </button>
        <button 
          className={`tab ${activeTab === 'business' ? 'active' : ''}`}
          onClick={() => setActiveTab('business')}
        >
          Business
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'masterid' && renderMasterIDContent()}
        {activeTab === 'myid' && renderMyIDVerificationContent()}
        {activeTab === 'business' && renderBusinessContent()}
      </div>
    </div>
  );
};

export default UserProfileDetails;
