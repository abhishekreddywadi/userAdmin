import React, { useState, useMemo } from 'react';
import './UserProfileDetails.scss';

const UserProfileDetails = ({ selectedUser }) => {
  const [activeTab, setActiveTab] = useState('masterid');
  const [expandedBusiness, setExpandedBusiness] = useState(null);
  const [businessFilter, setBusinessFilter] = useState('all');

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

  const userCourses = [
    {
      id: 1,
      userId: "USR2024001",
      name: "NISHYAM SUGAR ACADEMY",
      type: "RETURN COURSE",
      joinDate: "21/12/2024",
      price: "RS 5000/-",
      paymentType: "CASH",
      status: "active",
      progress: 75,
      instructor: "John Smith"
    },
    {
      id: 2,
      userId: "USR2024002",
      name: "GOLD GYM",
      type: "GYM Personal training",
      joinDate: "21/12/2024",
      price: "RS 5000/-",
      paymentType: "CASH",
      status: "active",
      progress: 60,
      instructor: "Sarah Wilson"
    }
  ];

  const userPackages = [
    {
      id: 1,
      packageId: "PKG2024001",
      name: "Premium Gym Membership",
      type: "Annual",
      startDate: "01/01/2024",
      endDate: "31/12/2024",
      price: "RS 25,000/-",
      status: "active",
      features: [
        "Access to all equipment",
        "Personal trainer sessions",
        "Nutrition consultation",
        "Locker facility"
      ]
    },
    {
      id: 2,
      packageId: "PKG2024002",
      name: "Yoga Special Package",
      type: "6 Months",
      startDate: "01/02/2024",
      endDate: "31/07/2024",
      price: "RS 12,000/-",
      status: "pending",
      features: [
        "Daily yoga sessions",
        "Meditation classes",
        "Diet planning",
        "Wellness workshops"
      ]
    }
  ];

  const userCertificates = [
    {
      id: 1,
      certId: "CERT2024001",
      name: "Advanced Fitness Training",
      issueDate: "15/12/2023",
      validUntil: "14/12/2024",
      issuedBy: "Fitness Academy International",
      score: 95,
      status: "valid"
    },
    {
      id: 2,
      certId: "CERT2024002",
      name: "Nutrition Specialist",
      issueDate: "20/11/2023",
      validUntil: "19/11/2024",
      issuedBy: "Health & Wellness Institute",
      score: 88,
      status: "valid"
    }
  ];

  const userTrainings = [
    {
      id: 1,
      trainingId: "TRN2024001",
      name: "Weight Management Program",
      startDate: "05/01/2024",
      duration: "3 months",
      trainer: "Mike Johnson",
      status: "ongoing",
      progress: 65,
      sessions: [
        { date: "05/01/2024", status: "completed" },
        { date: "12/01/2024", status: "completed" },
        { date: "19/01/2024", status: "upcoming" }
      ]
    },
    {
      id: 2,
      trainingId: "TRN2024002",
      name: "Cardio Fitness Program",
      startDate: "10/01/2024",
      duration: "2 months",
      trainer: "Sarah Wilson",
      status: "ongoing",
      progress: 40,
      sessions: [
        { date: "10/01/2024", status: "completed" },
        { date: "17/01/2024", status: "upcoming" },
        { date: "24/01/2024", status: "upcoming" }
      ]
    }
  ];

  const businessDetails = {
    "Business 1": {
      name: "Business 1",
      type: "Retail",
      status: "Active",
      registrationDate: "15/01/2024",
      address: "123 Main Street, Bangalore, Karnataka",
      contact: "+91 9876543210",
      email: "business1@example.com",
      license: "LIC123456789",
      revenue: "₹50,00,000",
      employees: 25,
      branches: [
        { location: "Bangalore Central", status: "Active" },
        { location: "Bangalore East", status: "Active" }
      ],
      products: [
        { name: "Product A", category: "Electronics", stock: 150 },
        { name: "Product B", category: "Accessories", stock: 300 }
      ]
    },
    "Business 2": {
      name: "Business 2",
      type: "Service",
      status: "Active",
      registrationDate: "10/12/2023",
      address: "456 Service Road, Mumbai, Maharashtra",
      contact: "+91 9876543211",
      email: "business2@example.com",
      license: "LIC987654321",
      revenue: "₹75,00,000",
      employees: 40,
      services: [
        { name: "Service A", category: "Consulting", clients: 50 },
        { name: "Service B", category: "Training", clients: 75 }
      ],
      locations: [
        { name: "Mumbai HQ", type: "Main Office" },
        { name: "Delhi Branch", type: "Regional Office" }
      ]
    },
    "Business 3": {
      name: "Business 3",
      type: "Manufacturing",
      status: "Pending",
      registrationDate: "20/01/2024",
      address: "789 Industrial Area, Chennai, Tamil Nadu",
      contact: "+91 9876543212",
      email: "business3@example.com",
      license: "Pending Approval",
      revenue: "Yet to start",
      employees: 100,
      facilities: [
        { name: "Plant A", capacity: "10000 units/month" },
        { name: "Warehouse B", capacity: "50000 sq ft" }
      ],
      products: [
        { name: "Product X", category: "Industrial", planned_capacity: 5000 },
        { name: "Product Y", category: "Consumer", planned_capacity: 8000 }
      ]
    }
  };

  const filteredBusinesses = useMemo(() => {
    if (businessFilter === 'all') {
      return userData.business.businesses;
    } else if (businessFilter === 'active') {
      return userData.business.businesses.filter(business => business.status.toLowerCase() === 'active');
    } else if (businessFilter === 'pending') {
      return userData.business.businesses.filter(business => business.status.toLowerCase() === 'pending');
    }
    return userData.business.businesses;
  }, [businessFilter, userData.business.businesses]);

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
      <div className="business-stats">
        <div 
          className={`stat-card ${businessFilter === 'all' ? 'active' : ''}`}
          onClick={() => setBusinessFilter('all')}
        >
          <span className="label">Total</span>
          <span className="value">{userData.business.total}</span>
        </div>
        <div 
          className={`stat-card ${businessFilter === 'active' ? 'active' : ''}`}
          onClick={() => setBusinessFilter('active')}
        >
          <span className="label">Active</span>
          <span className="value">{userData.business.active}</span>
        </div>
        <div 
          className={`stat-card ${businessFilter === 'pending' ? 'active' : ''}`}
          onClick={() => setBusinessFilter('pending')}
        >
          <span className="label">Pending</span>
          <span className="value">{userData.business.pending}</span>
        </div>
      </div>

      <div className="business-list">
        {filteredBusinesses.map((business, index) => (
          <div key={index} className="business-section">
            <div 
              className={`business-card ${expandedBusiness === business.name ? 'expanded' : ''}`}
              onClick={() => setExpandedBusiness(expandedBusiness === business.name ? null : business.name)}
            >
              <div className="business-header">
                <div className="business-info">
                  <h3>{business.name}</h3>
                  <span className="business-type">{business.type}</span>
                </div>
                <span className={`status-badge ${business.status.toLowerCase()}`}>
                  {business.status}
                </span>
              </div>
              <div className="expand-icon">
                {expandedBusiness === business.name ? '−' : '+'}
              </div>
            </div>

            {expandedBusiness === business.name && (
              <div className="business-details">
                <div className="details-grid">
                  <div className="detail-section">
                    <h4>Basic Information</h4>
                    <div className="info-grid">
                      <div className="info-item">
                        <span className="label">Registration Date</span>
                        <span className="value">{businessDetails[business.name].registrationDate}</span>
                      </div>
                      <div className="info-item">
                        <span className="label">License No.</span>
                        <span className="value">{businessDetails[business.name].license}</span>
                      </div>
                      <div className="info-item">
                        <span className="label">Revenue</span>
                        <span className="value">{businessDetails[business.name].revenue}</span>
                      </div>
                      <div className="info-item">
                        <span className="label">Employees</span>
                        <span className="value">{businessDetails[business.name].employees}</span>
                      </div>
                    </div>
                  </div>

                  <div className="detail-section">
                    <h4>Contact Information</h4>
                    <div className="info-grid">
                      <div className="info-item">
                        <span className="label">Address</span>
                        <span className="value">{businessDetails[business.name].address}</span>
                      </div>
                      <div className="info-item">
                        <span className="label">Phone</span>
                        <span className="value">{businessDetails[business.name].contact}</span>
                      </div>
                      <div className="info-item">
                        <span className="label">Email</span>
                        <span className="value">{businessDetails[business.name].email}</span>
                      </div>
                    </div>
                  </div>

                  {business.type === 'Retail' && (
                    <>
                      <div className="detail-section">
                        <h4>Branches</h4>
                        <div className="branches-grid">
                          {businessDetails[business.name].branches.map((branch, idx) => (
                            <div key={idx} className="branch-card">
                              <span className="location">{branch.location}</span>
                              <span className={`status ${branch.status.toLowerCase()}`}>
                                {branch.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="detail-section">
                        <h4>Products</h4>
                        <div className="products-grid">
                          {businessDetails[business.name].products.map((product, idx) => (
                            <div key={idx} className="product-card">
                              <div className="product-info">
                                <span className="name">{product.name}</span>
                                <span className="category">{product.category}</span>
                              </div>
                              <span className="stock">Stock: {product.stock}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {business.type === 'Service' && (
                    <>
                      <div className="detail-section">
                        <h4>Services</h4>
                        <div className="services-grid">
                          {businessDetails[business.name].services.map((service, idx) => (
                            <div key={idx} className="service-card">
                              <div className="service-info">
                                <span className="name">{service.name}</span>
                                <span className="category">{service.category}</span>
                              </div>
                              <span className="clients">Clients: {service.clients}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="detail-section">
                        <h4>Locations</h4>
                        <div className="locations-grid">
                          {businessDetails[business.name].locations.map((location, idx) => (
                            <div key={idx} className="location-card">
                              <span className="name">{location.name}</span>
                              <span className="type">{location.type}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {business.type === 'Manufacturing' && (
                    <>
                      <div className="detail-section">
                        <h4>Facilities</h4>
                        <div className="facilities-grid">
                          {businessDetails[business.name].facilities.map((facility, idx) => (
                            <div key={idx} className="facility-card">
                              <span className="name">{facility.name}</span>
                              <span className="capacity">Capacity: {facility.capacity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="detail-section">
                        <h4>Planned Products</h4>
                        <div className="products-grid">
                          {businessDetails[business.name].products.map((product, idx) => (
                            <div key={idx} className="product-card">
                              <div className="product-info">
                                <span className="name">{product.name}</span>
                                <span className="category">{product.category}</span>
                              </div>
                              <span className="capacity">
                                Planned Capacity: {product.planned_capacity}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const CourseSection = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredCourses = userCourses.filter(course => 
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.userId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.type.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="course-section">
        <div className="course-header">
          <h2>Course Information</h2>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by course name, ID or type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="search-icon">🔍</span>
          </div>
        </div>
        <div className="course-grid">
          {filteredCourses.map(course => (
            <div key={course.id} className="course-card">
              <div className="course-header">
                <div className="header-content">
                  <h3>{course.name}</h3>
                  <span className="user-id">ID: {course.userId}</span>
                </div>
                <span className={`status-badge ${course.status}`}>
                  {course.status}
                </span>
              </div>
              <div className="course-content">
                <div className="course-info">
                  <div className="info-item">
                    <span className="label">Course Type</span>
                    <span className="value">{course.type}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Join Date</span>
                    <span className="value">{course.joinDate}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Price</span>
                    <span className="value">{course.price}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Payment</span>
                    <span className="value">{course.paymentType}</span>
                  </div>
                </div>
                <div className="progress-section">
                  <div className="progress-header">
                    <span>Course Progress</span>
                    <span className="progress-value">{course.progress}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="instructor-info">
                  <span className="label">Instructor:</span>
                  <span className="value">{course.instructor}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const PackageSection = () => (
    <div className="package-section">
      <h2>Package Information</h2>
      <div className="package-grid">
        {userPackages.map(pkg => (
          <div key={pkg.id} className="package-card">
            <div className="package-header">
              <div className="header-content">
                <h3>{pkg.name}</h3>
                <span className="package-id">ID: {pkg.packageId}</span>
              </div>
              <span className={`status-badge ${pkg.status}`}>
                {pkg.status}
              </span>
            </div>
            <div className="package-content">
              <div className="package-info">
                <div className="info-item">
                  <span className="label">Type</span>
                  <span className="value">{pkg.type}</span>
                </div>
                <div className="info-item">
                  <span className="label">Start Date</span>
                  <span className="value">{pkg.startDate}</span>
                </div>
                <div className="info-item">
                  <span className="label">End Date</span>
                  <span className="value">{pkg.endDate}</span>
                </div>
                <div className="info-item">
                  <span className="label">Price</span>
                  <span className="value">{pkg.price}</span>
                </div>
              </div>
              <div className="features-list">
                <h4>Features</h4>
                <ul>
                  {pkg.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const CertificateSection = () => (
    <div className="certificate-section">
      <h2>Certificates</h2>
      <div className="certificate-grid">
        {userCertificates.map(cert => (
          <div key={cert.id} className="certificate-card">
            <div className="certificate-header">
              <div className="header-content">
                <h3>{cert.name}</h3>
                <span className="cert-id">ID: {cert.certId}</span>
              </div>
              <span className={`status-badge ${cert.status}`}>
                {cert.status}
              </span>
            </div>
            <div className="certificate-content">
              <div className="cert-info">
                <div className="info-item">
                  <span className="label">Issued By</span>
                  <span className="value">{cert.issuedBy}</span>
                </div>
                <div className="info-item">
                  <span className="label">Issue Date</span>
                  <span className="value">{cert.issueDate}</span>
                </div>
                <div className="info-item">
                  <span className="label">Valid Until</span>
                  <span className="value">{cert.validUntil}</span>
                </div>
                <div className="info-item">
                  <span className="label">Score</span>
                  <span className="value">{cert.score}%</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const TrainingSection = () => (
    <div className="training-section">
      <h2>Training Information</h2>
      <div className="training-grid">
        {userTrainings.map(training => (
          <div key={training.id} className="training-card">
            <div className="training-header">
              <div className="header-content">
                <h3>{training.name}</h3>
                <span className="training-id">ID: {training.trainingId}</span>
              </div>
              <span className={`status-badge ${training.status}`}>
                {training.status}
              </span>
            </div>
            <div className="training-content">
              <div className="training-info">
                <div className="info-item">
                  <span className="label">Start Date</span>
                  <span className="value">{training.startDate}</span>
                </div>
                <div className="info-item">
                  <span className="label">Duration</span>
                  <span className="value">{training.duration}</span>
                </div>
                <div className="info-item">
                  <span className="label">Trainer</span>
                  <span className="value">{training.trainer}</span>
                </div>
              </div>
              <div className="progress-section">
                <div className="progress-header">
                  <span>Progress</span>
                  <span className="progress-value">{training.progress}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress" 
                    style={{ width: `${training.progress}%` }}
                  ></div>
                </div>
              </div>
              <div className="sessions-list">
                <h4>Sessions</h4>
                <div className="sessions">
                  {training.sessions.map((session, index) => (
                    <div key={index} className={`session-item ${session.status}`}>
                      <span className="date">{session.date}</span>
                      <span className="status">{session.status}</span>
                    </div>
                  ))}
                </div>
              </div>
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
          <img src="https://via.placeholder.com/90" alt="User Avatar" />
          <span className="status-badge" data-status={userData.masterID.status.toLowerCase()}></span>
        </div>
        <div className="user-info">
          <div className="primary-info">
            <h2>{userData.name}</h2>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>{userData.phone}</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>{userData.email}</span>
              </div>
            </div>
          </div>
          <div className="secondary-info">
            <div className="id-tags">
              <div className="id-tag">
                <span className="label">Master ID</span>
                <span className="value">{userData.masterID.id}</span>
              </div>
              <div className="id-tag">
                <span className="label">My ID</span>
                <span className="value">{userData.myID.id}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-tabs">
        <button 
          className={`tab ${activeTab === 'masterid' ? 'active' : ''}`}
          onClick={() => setActiveTab('masterid')}
        >
         User info
        </button>
        <button 
          className={`tab ${activeTab === 'myid' ? 'active' : ''}`}
          onClick={() => setActiveTab('myid')}
        >
          Professional profile info
        </button>
        <button 
          className={`tab ${activeTab === 'business' ? 'active' : ''}`}
          onClick={() => setActiveTab('business')}
        >
          Business
        </button>
        <button 
          className={`tab ${activeTab === 'course' ? 'active' : ''}`}
          onClick={() => setActiveTab('course')}
        >
          Course
        </button>
        <button 
          className={`tab ${activeTab === 'package' ? 'active' : ''}`}
          onClick={() => setActiveTab('package')}
        >
          Package
        </button>
        <button 
          className={`tab ${activeTab === 'certificate' ? 'active' : ''}`}
          onClick={() => setActiveTab('certificate')}
        >
          Certificate
        </button>
        <button 
          className={`tab ${activeTab === 'training' ? 'active' : ''}`}
          onClick={() => setActiveTab('training')}
        >
          Training
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'masterid' && renderMasterIDContent()}
        {activeTab === 'myid' && renderMyIDVerificationContent()}
        {activeTab === 'business' && renderBusinessContent()}
        {activeTab === 'course' && <CourseSection />}
        {activeTab === 'package' && <PackageSection />}
        {activeTab === 'certificate' && <CertificateSection />}
        {activeTab === 'training' && <TrainingSection />}
      </div>
    </div>
  );
};

export default UserProfileDetails;
