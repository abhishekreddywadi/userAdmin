import React, { Component } from "react";
import {
  Route,
  BrowserRouter as Router,
  NavLink
} from "react-router-dom";

import logoimg from '../../assets/img/logoicon.svg';


class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentSelection: 'dashboard',
      active: false
    }

    this.toggleContent = this.toggleContent.bind(this)
   
  }
  toggleContent = (event) => {
    event.preventDefault();
    // Get the closest parent with an ID if the clicked element doesn't have one
    const targetElement = event.target.closest('[id]');
    const clickedId = targetElement ? targetElement.id : event.target.id;
    
    // If clicking the same menu item, just toggle its state
    if (this.state.paymentSelection === clickedId) {
      this.setState(prevState => ({
        active: !prevState.active
      }));
    } else {
      // If clicking a different menu item, open it
      this.setState({
        paymentSelection: clickedId,
        active: true
      });
    }
  }


  render() {
    const { paymentSelection } = this.state;
    const { active } = this.state;


    return (
      <div className="sidebar bg-white text-dark" style={{height:"100vh"}}>
        {/* Logo sidebar */}
        <a href='#' onClick={e => e.preventDefault()} className="logo text-dark">
          <img src={logoimg} alt="adminux pro" className="logo-icon" />
          <div className="logo-text">
            <h5 className="fs22 mb-0 text-dark">
              AdminUX <sup className="badge badge-danger">PRO</sup>
            </h5>
            <p className="text-uppercase fs11 text-dark">Admin Dashboard</p>
          </div>
        </a>
        <style>
          {`
          
            .nav-link.active .material-icons {
              
              border-radius: 4px;
              padding: 2px;
            }
            .nav-link.dropdown-toggle {
            
              display: flex;
              align-items: center;
              gap: 8px;
            }
            .nav-link.active {
              background-color: #f8f9fa;
              border-radius: 4px;
              
            }
            .nav-link:hover {
              background-color: #f8f9fa;
              border-radius: 4px;
            }
          `}
        </style>
        {/* Logo sidebar ends */}
        {/* Navigation menu sidebar*/}
        <h6 className="subtitle fs11 text-dark">Navigation Menu</h6>
        <ul className="nav flex-column">
          <li className={`nav-item dropdown ${paymentSelection ==='dashboard' && active ? 'show' : ''}`}>
            <div className={`nav-link dropdown-toggle text-dark ${paymentSelection ==='dashboard' ? 'active' : ''}`} id="dashboard" href='#' onClick={(e) => {
              e.preventDefault();
              this.toggleContent(e);
            }}>
              <i className="material-icons   icon text-dark" style={{ backgroundColor:"white" }}  >dashboard</i>
              <span>Dashboard</span>{" "}
              <i className="material-icons arrow text-dark">expand_more</i>
            </div>
            <div className={`nav flex-column  ${paymentSelection ==='dashboard' && active ? 'd-block' : ''}`}>
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/" activeClassName="active" ><span>Production</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/networking" activeClassName="active"><span>Payment</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/networking" activeClassName="active"><span>Request</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/networking" activeClassName="active"><span>Graph</span></NavLink>
              </div>
            </div>
          </li>
        </ul>
        <h6 className="subtitle fs11 text-dark">Customized</h6>
        <ul className="nav flex-column">
          <li className={`nav-item dropdown ${paymentSelection ==='pages' && active ? 'show' : ''}`}>
            <div className={`nav-link dropdown-toggle text-dark ${paymentSelection ==='pages' ? 'active' : ''}`} id="pages" href='#' onClick={(e) => {
              e.preventDefault();
              this.toggleContent(e);
            }}>
              <i className="material-icons icon text-dark">turned_in_not</i>
              <span>MASTER ID</span>{" "}
              <i className="material-icons arrow text-dark">expand_more</i>
            </div>
            <div className={`nav flex-column  ${paymentSelection ==='pages' && active ? 'd-block' : ''}`}> 
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/manage-id" activeClassName="active"><span>View all ID</span></NavLink>
              </div>              
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/master-request" activeClassName="active"><span>Master ID Request</span></NavLink>
              </div>
              
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/id-plans" activeClassName="active"><span>ID Plans</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/manage-id" activeClassName="active"><span>Manage ID</span></NavLink>
              </div>       
            </div>
          </li>

          <li className={`nav-item dropdown ${paymentSelection ==='user' && active ? 'show' : ''}`}>
            <div className={`nav-link dropdown-toggle text-dark ${paymentSelection ==='user' ? 'active' : ''}`} id="user" href='#' onClick={(e) => {
              e.preventDefault();
              this.toggleContent(e);
            }}>
              <i className="material-icons icon text-dark">turned_in_not</i>
              <span>USER</span>{" "}
              <i className="material-icons arrow text-dark">expand_more</i>
            </div>
            <div className={`nav flex-column  ${paymentSelection ==='user' && active ? 'd-block' : ''}`}>            
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/view-user" activeClassName="active"><span>View All Users</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/servererror" activeClassName="active"><span>Create New User</span></NavLink>
              </div>     
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/servererror" activeClassName="active"><span>Manage User</span></NavLink>
              </div>         
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/servererror" activeClassName="active"><span>Create New Inquiry</span></NavLink>
              </div>   
            </div>
          </li>

          <li className={`nav-item dropdown ${paymentSelection ==='business' && active ? 'show' : ''}`}>
            <div className={`nav-link dropdown-toggle text-dark ${paymentSelection ==='business' ? 'active' : ''}`} id="business" href='#' onClick={(e) => {
              e.preventDefault();
              this.toggleContent(e);
            }}>
              <i className="material-icons icon text-dark">turned_in_not</i>
              <span>BUSINESS</span>{" "}
              <i className="material-icons arrow text-dark">expand_more</i>
            </div>
            <div className={`nav flex-column  ${paymentSelection ==='business' && active ? 'd-block' : ''}`}>            
            <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/view-business" activeClassName="active"><span>View All Business</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/servererror" activeClassName="active"><span>Create New Business</span></NavLink>
              </div>     
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/servererror" activeClassName="active"><span>Manage Business</span></NavLink>
              </div>      
            </div>
          </li>

          <li className={`nav-item dropdown ${paymentSelection ==='customise-plan' && active ? 'show' : ''}`}>
            <div className={`nav-link dropdown-toggle text-dark ${paymentSelection ==='customise-plan' ? 'active' : ''}`} id="customise-plan" href='#' onClick={(e) => {
              e.preventDefault();
              this.toggleContent(e);
            }}>
              <i className="material-icons icon text-dark">turned_in_not</i>
              <span>Plan & Packages</span>{" "}
              <i className="material-icons arrow text-dark">expand_more</i>
            </div>
            <div className={`nav flex-column  ${paymentSelection ==='customise-plan' && active ? 'd-block' : ''}`}>            
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/all-plan" activeClassName="active"><span>View all Plan</span></NavLink>
              </div>       
            </div>
          </li>

          <li className={`nav-item dropdown ${paymentSelection ==='customise-staff' && active ? 'show' : ''}`}>
            <div className={`nav-link dropdown-toggle text-dark ${paymentSelection ==='customise-staff' ? 'active' : ''}`} id="customise-staff" href='#' onClick={(e) => {
              e.preventDefault();
              this.toggleContent(e);
            }}>
              <i className="material-icons icon text-dark">turned_in_not</i>
              <span>Manage Staff</span>{" "}
              <i className="material-icons arrow text-dark">expand_more</i>
            </div>
            <div className={`nav flex-column  ${paymentSelection ==='customise-staff' && active ? 'd-block' : ''}`}>            
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/staff-attendance" activeClassName="active"><span>Staff Attendance</span></NavLink>
              </div>            
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/view-staff" activeClassName="active"><span>View all Staff</span></NavLink>
              </div>               
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/all-plan" activeClassName="active"><span>Staff Permission</span></NavLink>
              </div>     
            </div>
          </li>
        </ul>

        <h6 className="subtitle fs11 text-dark">LAYERS</h6>
        <ul className="nav flex-column">
          <li className={`nav-item dropdown ${paymentSelection === 'category' && active ? 'show' : ''}`}>
            <div className={`nav-link dropdown-toggle text-dark ${paymentSelection === 'category' ? 'active' : ''}`} 
                 id="category" 
                 onClick={this.toggleContent}>
              <i className="material-icons icon text-dark">layers</i>
              <span>Category Management</span>{" "}
              <i className="material-icons arrow text-dark">expand_more</i>
            </div>
            <div className={`nav flex-column ${paymentSelection === 'category' && active ? 'd-block' : ''}`}>            
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/create-category" activeClassName="active"><span>View All Categories</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/create-category" activeClassName="active"><span>Add Category</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/notfound" activeClassName="active"><span>Manage Category</span></NavLink>
              </div>
            </div>
          </li>

          <li className={`nav-item dropdown ${paymentSelection === 'plan_package' && active ? 'show' : ''}`}>
            <div className={`nav-link dropdown-toggle text-dark ${paymentSelection === 'plan_package' ? 'active' : ''}`} 
                 id="plan_package" 
                 onClick={this.toggleContent}>
              <i className="material-icons icon text-dark">layers</i>
              <span>Plan and packages</span>{" "}
              <i className="material-icons arrow text-dark">expand_more</i>
            </div>
            <div className={`nav flex-column ${paymentSelection === 'plan_package' && active ? 'd-block' : ''}`}>            
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/notfound" activeClassName="active"><span>View all Plans</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/notfound" activeClassName="active"><span>Add Plan</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/notfound" activeClassName="active"><span>Manage Plan</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/notfound" activeClassName="active"><span>View all Packages</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/notfound" activeClassName="active"><span>Add Package</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/notfound" activeClassName="active"><span>Manage Package</span></NavLink>
              </div>
            </div>
          </li>

          <li className={`nav-item dropdown ${paymentSelection === 'homepage' && active ? 'show' : ''}`}>
            <div className={`nav-link dropdown-toggle text-dark ${paymentSelection === 'homepage' ? 'active' : ''}`} 
                 id="homepage" 
                 onClick={this.toggleContent}>
              <i className="material-icons icon text-dark">layers</i>
              <span>Home Page</span>{" "}
              <i className="material-icons arrow text-dark">expand_more</i>
            </div>
            <div className={`nav flex-column ${paymentSelection === 'homepage' && active ? 'd-block' : ''}`}>            
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/notfound" activeClassName="active"><span>Manage Homepage</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/notfound" activeClassName="active"><span>Manage Banner</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/notfound" activeClassName="active"><span>Manage Content</span></NavLink>
              </div>
            </div>
          </li>
        </ul>

        <h6 className="subtitle fs11 text-dark">FEATURES</h6>
        <ul className="nav flex-column">
          <li className={`nav-item dropdown ${paymentSelection ==='event' && active ? 'show' : ''}`}>
            <div className={`nav-link dropdown-toggle text-dark ${paymentSelection ==='event' ? 'active' : ''}`} id="event" href='#' onClick={(e) => {
              e.preventDefault();
              this.toggleContent(e);
            }}>
              <i className="material-icons icon text-dark">turned_in_not</i>
              <span>Event</span>{" "}
              <i className="material-icons arrow text-dark">expand_more</i>
            </div>
            <div className={`nav flex-column  ${paymentSelection ==='event' && active ? 'd-block' : ''}`}>            
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/notfound" activeClassName="active"><span>View All Events</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/servererror" activeClassName="active"><span>Create Events</span></NavLink>
              </div>   
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/servererror" activeClassName="active"><span>Manage Events</span></NavLink>
              </div>      
            </div>
          </li>

          <li className={`nav-item dropdown ${paymentSelection ==='attendance' && active ? 'show' : ''}`}>
            <div className={`nav-link dropdown-toggle text-dark ${paymentSelection ==='attendance' ? 'active' : ''}`} id="attendance" href='#' onClick={(e) => {
              e.preventDefault();
              this.toggleContent(e);
            }}>
              <i className="material-icons icon text-dark">turned_in_not</i>
              <span>Attendance</span>{" "}
              <i className="material-icons arrow text-dark">expand_more</i>
            </div>
            <div className={`nav flex-column  ${paymentSelection ==='attendance' && active ? 'd-block' : ''}`}>            
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/servererror" activeClassName="active"><span>Create Attendance</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/servererror" activeClassName="active"><span>View all Attendances</span></NavLink>
              </div>  
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/rfid-machine" activeClassName="active"><span>Manage Attendances</span></NavLink>
              </div>          
            </div>
          </li>

          <li className={`nav-item dropdown ${paymentSelection ==='gate_pass' && active ? 'show' : ''}`}>
            <div className={`nav-link dropdown-toggle text-dark ${paymentSelection ==='gate_pass' ? 'active' : ''}`} id="gate_pass" href='#' onClick={(e) => {
              e.preventDefault();
              this.toggleContent(e);
            }}>
              <i className="material-icons icon text-dark">turned_in_not</i>
              <span>Gate Pass</span>{" "}
              <i className="material-icons arrow text-dark">expand_more</i>
            </div>
            <div className={`nav flex-column  ${paymentSelection ==='gate_pass' && active ? 'd-block' : ''}`}>            
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/notfound" activeClassName="active"><span>View All Entry/Exit</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/servererror" activeClassName="active"><span>Create Entry Pass</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/servererror" activeClassName="active"><span>Create Entry</span></NavLink>
              </div>            
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/notfound" activeClassName="active"><span>Create Guest Entry</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/servererror" activeClassName="active"><span>Create Exit Pass</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/servererror" activeClassName="active"><span>Kids Security</span></NavLink>
              </div>            
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/notfound" activeClassName="active"><span>Contact Information</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/servererror" activeClassName="active"><span>Staff Gate Pass</span></NavLink>
              </div>           
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/notfound" activeClassName="active"><span>Create Special Entry</span></NavLink>
              </div> 
            </div>
          </li>

          <li className={`nav-item dropdown ${paymentSelection ==='booking' && active ? 'show' : ''}`}>
            <div className={`nav-link dropdown-toggle text-dark ${paymentSelection ==='booking' ? 'active' : ''}`} id="booking" href='#' onClick={(e) => {
              e.preventDefault();
              this.toggleContent(e);
            }}>
              <i className="material-icons icon text-dark">turned_in_not</i>
              <span>Booking</span>{" "}
              <i className="material-icons arrow text-dark">expand_more</i>
            </div>
            <div className={`nav flex-column  ${paymentSelection ==='booking' && active ? 'd-block' : ''}`}>            
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/servererror" activeClassName="active"><span>Create Booking</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/servererror" activeClassName="active"><span>View all Bookings</span></NavLink>
              </div>  
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/servererror" activeClassName="active"><span>Manage Bookings</span></NavLink>
              </div>          
            </div>
          </li>

          <li className={`nav-item dropdown ${paymentSelection ==='slot_booking' && active ? 'show' : ''}`}>
            <div className={`nav-link dropdown-toggle text-dark ${paymentSelection ==='slot_booking' ? 'active' : ''}`} id="slot_booking" href='#' onClick={(e) => {
              e.preventDefault();
              this.toggleContent(e);
            }}>
              <i className="material-icons icon text-dark">turned_in_not</i>
              <span>Slot booking</span>{" "}
              <i className="material-icons arrow text-dark">expand_more</i>
            </div>
            <div className={`nav flex-column  ${paymentSelection ==='slot_booking' && active ? 'd-block' : ''}`}>            
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/servererror" activeClassName="active"><span>Create Slot Booking</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/servererror" activeClassName="active"><span>View all Slot Bookings</span></NavLink>
              </div>  
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/servererror" activeClassName="active"><span>Manage Slot Bookings</span></NavLink>
              </div>          
            </div>
          </li>

          <li className={`nav-item dropdown ${paymentSelection ==='plan_packages' && active ? 'show' : ''}`}>
            <div className={`nav-link dropdown-toggle text-dark ${paymentSelection ==='plan_packages' ? 'active' : ''}`} id="plan_packages" href='#' onClick={(e) => {
              e.preventDefault();
              this.toggleContent(e);
            }}>
              <i className="material-icons icon text-dark">turned_in_not</i>
              <span>Slot booking</span>{" "}
              <i className="material-icons arrow text-dark">expand_more</i>
            </div>
            <div className={`nav flex-column  ${paymentSelection ==='plan_packages' && active ? 'd-block' : ''}`}>            
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/servererror" activeClassName="active"><span>Create Plan Package</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/servererror" activeClassName="active"><span>View all Plan Packages</span></NavLink>
              </div>  
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/servererror" activeClassName="active"><span>Manage Plan Packages</span></NavLink>
              </div>          
            </div>
          </li>

          <li className={`nav-item dropdown ${paymentSelection ==='certificate_exam' && active ? 'show' : ''}`}>
            <div className={`nav-link dropdown-toggle text-dark ${paymentSelection ==='certificate_exam' ? 'active' : ''}`} id="certificate_exam" href='#' onClick={(e) => {
              e.preventDefault();
              this.toggleContent(e);
            }}>
              <i className="material-icons icon text-dark">turned_in_not</i>
              <span>Certificate Exam</span>{" "}
              <i className="material-icons arrow text-dark">expand_more</i>
            </div>
            <div className={`nav flex-column  ${paymentSelection ==='certificate_exam' && active ? 'd-block' : ''}`}>            
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/servererror" activeClassName="active"><span>Create Certificate Exam</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/servererror" activeClassName="active"><span>View all Certificates Exam</span></NavLink>
              </div>  
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/servererror" activeClassName="active"><span>Manage Certificates Exam</span></NavLink>
              </div>          
            </div>
          </li>

          <li className={`nav-item dropdown ${paymentSelection ==='classes_batches' && active ? 'show' : ''}`}>
            <div className={`nav-link dropdown-toggle text-dark ${paymentSelection ==='classes_batches' ? 'active' : ''}`} id="classes_batches" href='#' onClick={(e) => {
              e.preventDefault();
              this.toggleContent(e);
            }}>
              <i className="material-icons icon text-dark">turned_in_not</i>
              <span>Classes & Batches</span>{" "}
              <i className="material-icons arrow text-dark">expand_more</i>
            </div>
            <div className={`nav flex-column  ${paymentSelection ==='classes_batches' && active ? 'd-block' : ''}`}>            
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/servererror" activeClassName="active"><span>View all Classes & Batches</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/servererror" activeClassName="active"><span>Manage all Classes & Batches</span></NavLink>
              </div>  
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/servererror" activeClassName="active"><span>Create Classes & Batches</span></NavLink>
              </div>          
            </div>
          </li>

          <li className={`nav-item dropdown ${paymentSelection ==='courses' && active ? 'show' : ''}`}>
            <div className={`nav-link dropdown-toggle text-dark ${paymentSelection ==='courses' ? 'active' : ''}`} id="courses" href='#' onClick={(e) => {
              e.preventDefault();
              this.toggleContent(e);
            }}>
              <i className="material-icons icon text-dark">turned_in_not</i>
              <span>Courses</span>{" "}
              <i className="material-icons arrow text-dark">expand_more</i>
            </div>
            <div className={`nav flex-column  ${paymentSelection ==='courses' && active ? 'd-block' : ''}`}>            
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/servererror" activeClassName="active"><span>View all Courses</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/servererror" activeClassName="active"><span>Manage all Courses</span></NavLink>
              </div>  
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/servererror" activeClassName="active"><span>Create Courses</span></NavLink>
              </div>          
            </div>
          </li>

          <li className={`nav-item dropdown ${paymentSelection ==='staff_management' && active ? 'show' : ''}`}>
            <div className={`nav-link dropdown-toggle text-dark ${paymentSelection ==='staff_management' ? 'active' : ''}`} id="staff_management" href='#' onClick={(e) => {
              e.preventDefault();
              this.toggleContent(e);
            }}>
              <i className="material-icons icon text-dark">turned_in_not</i>
              <span>Staff Management</span>{" "}
              <i className="material-icons arrow text-dark">expand_more</i>
            </div>
            <div className={`nav flex-column  ${paymentSelection ==='staff_management' && active ? 'd-block' : ''}`}>            
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/servererror" activeClassName="active"><span>Create Staff</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/servererror" activeClassName="active"><span>View all Staff</span></NavLink>
              </div>  
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/servererror" activeClassName="active"><span>Manage Staff</span></NavLink>
              </div>                  
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/servererror" activeClassName="active"><span>Manage Staff Duty</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/servererror" activeClassName="active"><span>Create Staff Role</span></NavLink>
              </div>  
              <div className="nav-item">
                <NavLink className="nav-link text-dark" to="/servererror" activeClassName="active"><span>Staff Permissions</span></NavLink>
              </div>    
            </div>
          </li>
        </ul>
      
        {/* Setting link */}
        <ul className="nav flex-column">
          <li className={`nav-item dropdown ${paymentSelection ==='settings' && active ? 'show' : ''}`}>
            <div  className={`nav-link dropdown-toggle text-dark ${paymentSelection ==='settings' ? 'active' : ''}`} id="settings" href='#' onClick={(e)  => {
              e.preventDefault();
              this.toggleContent(e);
            }}>
              <i className="material-icons icon text-dark">settings_applications</i>
              <span>Settings</span>{" "}
              <i className="material-icons arrow text-dark">expand_more</i>
            </div>
            <div className={`nav flex-column  ${paymentSelection ==='settings' && active ? 'd-block' : ''}`}>
              <div className="nav-item">
                <a className="nav-link text-dark" href='#' onClick={e => e.preventDefault()}>
                  <span>Profile Setting</span>
                </a>
              </div>
              <div className="nav-item">
                <a className="nav-link text-dark" href='#' onClick={e => e.preventDefault()}>
                  <span>Privacy</span>
                </a>
              </div>
              <div className="nav-item">
                <a className="nav-link text-dark" href='#' onClick={e => e.preventDefault()}>
                  <span>Email</span>
                </a>
              </div>
            </div>
          </li>
        </ul>
        {/* Setting link */}
      </div>
    );
  }
}

export default Sidebar;
