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
    const currentState = this.state.active;
    event.preventDefault();
    this.setState({
      paymentSelection: event.target.id,
      active: !currentState
    })
  }


  render() {
    const { paymentSelection } = this.state;
    const { active } = this.state;


    return (
      <div className="sidebar">
        {/* Logo sidebar */}
        <a href='#' onClick={e => e.preventDefault()} className="logo">
          <img src={logoimg} alt="adminux pro" className="logo-icon" />
          <div className="logo-text">
            <h5 className="fs22 mb-0">
              AdminUX <sup className="badge badge-danger">PRO</sup>
            </h5>
            <p className="text-uppercase fs11">Admin Dashboard</p>
          </div>
        </a>
        {/* Logo sidebar ends */}
        {/* Navigation menu sidebar*/}
        <h6 className="subtitle fs11">Navigation Menu</h6>
        <ul className="nav flex-column">
          <li className={`nav-item dropdown ${paymentSelection ==='dashboard' ? 'show' : ''}`}>
            <div className={`nav-link dropdown-toggle ${paymentSelection ==='dashboard' ? 'active' : ''}`} id="dashboard" href='#' onClick={(e) => {
              e.preventDefault();
              this.toggleContent(e);
            }}>
              <i className="material-icons icon">dashboard</i>
              <span>Dashboard</span>{" "}
              <i className="material-icons arrow">expand_more</i>
            </div>
            <div className={`nav flex-column  ${paymentSelection ==='dashboard' ? 'd-block' : ''}`}>
              <div className="nav-item">
                <NavLink className="nav-link" to="/" activeClassName="active" ><span>Production</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link" to="/networking" activeClassName="active"><span>Payment</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link" to="/networking" activeClassName="active"><span>Request</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link" to="/networking" activeClassName="active"><span>Graph</span></NavLink>
              </div>
            </div>
          </li>
        </ul>
        <h6 className="subtitle fs11">Customized</h6>
        <ul className="nav flex-column">
          <li className={`nav-item dropdown ${paymentSelection ==='pages' ? 'show' : ''}`}>
            <div className={`nav-link dropdown-toggle ${paymentSelection ==='pages' ? 'active' : ''}`} id="pages" href='#' onClick={(e) => {
              e.preventDefault();
              this.toggleContent(e);
            }}>
              <i className="material-icons icon">turned_in_not</i>
              <span>MASTER ID</span>{" "}
              <i className="material-icons arrow">expand_more</i>
            </div>
            <div className={`nav flex-column  ${paymentSelection ==='pages' ? 'd-block' : ''}`}> 
              <div className="nav-item">
                <NavLink className="nav-link" to="/manage-id" activeClassName="active"><span>View all ID</span></NavLink>
              </div>              
              <div className="nav-item">
                <NavLink className="nav-link" to="/master-request" activeClassName="active"><span>Master ID Request</span></NavLink>
              </div>
              
              <div className="nav-item">
                <NavLink className="nav-link" to="/id-plans" activeClassName="active"><span>ID Plans</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link" to="/manage-id" activeClassName="active"><span>Manage ID</span></NavLink>
              </div>       
            </div>
          </li>

          <li className={`nav-item dropdown ${paymentSelection ==='user' ? 'show' : ''}`}>
            <div className={`nav-link dropdown-toggle ${paymentSelection ==='user' ? 'active' : ''}`} id="user" href='#' onClick={(e) => {
              e.preventDefault();
              this.toggleContent(e);
            }}>
              <i className="material-icons icon">turned_in_not</i>
              <span>USER</span>{" "}
              <i className="material-icons arrow">expand_more</i>
            </div>
            <div className={`nav flex-column  ${paymentSelection ==='user' ? 'd-block' : ''}`}>            
              <div className="nav-item">
                <NavLink className="nav-link" to="/view-user" activeClassName="active"><span>View All Users</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>Create New User</span></NavLink>
              </div>     
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>Manage User</span></NavLink>
              </div>         
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>Create New Inquiry</span></NavLink>
              </div>   
            </div>
          </li>

          <li className={`nav-item dropdown ${paymentSelection ==='business' ? 'show' : ''}`}>
            <div className={`nav-link dropdown-toggle ${paymentSelection ==='business' ? 'active' : ''}`} id="business" href='#' onClick={(e) => {
              e.preventDefault();
              this.toggleContent(e);
            }}>
              <i className="material-icons icon">turned_in_not</i>
              <span>BUSINESS</span>{" "}
              <i className="material-icons arrow">expand_more</i>
            </div>
            <div className={`nav flex-column  ${paymentSelection ==='business' ? 'd-block' : ''}`}>            
            <div className="nav-item">
                <NavLink className="nav-link" to="/view-business" activeClassName="active"><span>View All Business</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>Create New Business</span></NavLink>
              </div>     
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>Manage Business</span></NavLink>
              </div>      
            </div>
          </li>

          <li className={`nav-item dropdown ${paymentSelection ==='customise-plan' ? 'show' : ''}`}>
            <div className={`nav-link dropdown-toggle ${paymentSelection ==='customise-plan' ? 'active' : ''}`} id="customise-plan" href='#' onClick={(e) => {
              e.preventDefault();
              this.toggleContent(e);
            }}>
              <i className="material-icons icon">turned_in_not</i>
              <span>Plan & Packages</span>{" "}
              <i className="material-icons arrow">expand_more</i>
            </div>
            <div className={`nav flex-column  ${paymentSelection ==='customise-plan' ? 'd-block' : ''}`}>            
              <div className="nav-item">
                <NavLink className="nav-link" to="/all-plan" activeClassName="active"><span>View all Plan</span></NavLink>
              </div>       
            </div>
          </li>

          <li className={`nav-item dropdown ${paymentSelection ==='customise-staff' ? 'show' : ''}`}>
            <div className={`nav-link dropdown-toggle ${paymentSelection ==='customise-staff' ? 'active' : ''}`} id="customise-staff" href='#' onClick={(e) => {
              e.preventDefault();
              this.toggleContent(e);
            }}>
              <i className="material-icons icon">turned_in_not</i>
              <span>Manage Staff</span>{" "}
              <i className="material-icons arrow">expand_more</i>
            </div>
            <div className={`nav flex-column  ${paymentSelection ==='customise-staff' ? 'd-block' : ''}`}>            
              <div className="nav-item">
                <NavLink className="nav-link" to="/staff-attendance" activeClassName="active"><span>Staff Attendance</span></NavLink>
              </div>            
              <div className="nav-item">
                <NavLink className="nav-link" to="/view-staff" activeClassName="active"><span>View all Staff</span></NavLink>
              </div>               
              <div className="nav-item">
                <NavLink className="nav-link" to="/all-plan" activeClassName="active"><span>Staff Permission</span></NavLink>
              </div>     
            </div>
          </li>
        </ul>

        <h6 className="subtitle fs11">LAYERS</h6>
        <ul className="nav flex-column">
          <li className={`nav-item dropdown ${paymentSelection ==='category' ? 'show' : ''}`}>
            <div className={`nav-link dropdown-toggle ${paymentSelection ==='category' ? 'active' : ''}`} id="category" href='#' onClick={(e) => {
              e.preventDefault();
              this.toggleContent(e);
            }}>
              <i className="material-icons icon">turned_in_not</i>
              <span>Category Management</span>{" "}
              <i className="material-icons arrow">expand_more</i>
            </div>
            <div className={`nav flex-column  ${paymentSelection ==='category' ? 'd-block' : ''}`}>            
              <div className="nav-item">
                <NavLink className="nav-link" to="/notfound" activeClassName="active"><span>View All Categories</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link" to="/create-category" activeClassName="active"><span>Create New Category</span></NavLink>
              </div>   
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>Manage Category</span></NavLink>
              </div>      
            </div>
          </li>

          <li className={`nav-item dropdown ${paymentSelection ==='plan_package' ? 'show' : ''}`}>
            <div className={`nav-link dropdown-toggle ${paymentSelection ==='plan_package' ? 'active' : ''}`} id="plan_package" href='#' onClick={(e) => {
              e.preventDefault();
              this.toggleContent(e);
            }}>
              <i className="material-icons icon">turned_in_not</i>
              <span>Plan and packages</span>{" "}
              <i className="material-icons arrow">expand_more</i>
            </div>
            <div className={`nav flex-column  ${paymentSelection ==='plan_package' ? 'd-block' : ''}`}>            
              <div className="nav-item">
                <NavLink className="nav-link" to="/notfound" activeClassName="active"><span>View all Plans</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>Create Plan and Packages</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>View all Packages</span></NavLink>
              </div>  
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>Manage Plans</span></NavLink>
              </div>  
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>Manage Packages</span></NavLink>
              </div>          
            </div>
          </li>

          <li className={`nav-item dropdown ${paymentSelection ==='homepage' ? 'show' : ''}`}>
            <div className={`nav-link dropdown-toggle ${paymentSelection ==='homepage' ? 'active' : ''}`} id="homepage" href='#' onClick={(e) => {
              e.preventDefault();
              this.toggleContent(e);
            }}>
              <i className="material-icons icon">turned_in_not</i>
              <span>Home Page</span>{" "}
              <i className="material-icons arrow">expand_more</i>
            </div>
            <div className={`nav flex-column  ${paymentSelection ==='homepage' ? 'd-block' : ''}`}>            
              <div className="nav-item">
                <NavLink className="nav-link" to="/notfound" activeClassName="active"><span>Manage Homepage</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>Homepage Terms and Conditions</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>View Homepage</span></NavLink>
              </div>        
            </div>
          </li>
        </ul>

        <h6 className="subtitle fs11">FEATURES</h6>
        <ul className="nav flex-column">
          <li className={`nav-item dropdown ${paymentSelection ==='event' ? 'show' : ''}`}>
            <div className={`nav-link dropdown-toggle ${paymentSelection ==='event' ? 'active' : ''}`} id="event" href='#' onClick={(e) => {
              e.preventDefault();
              this.toggleContent(e);
            }}>
              <i className="material-icons icon">turned_in_not</i>
              <span>Event</span>{" "}
              <i className="material-icons arrow">expand_more</i>
            </div>
            <div className={`nav flex-column  ${paymentSelection ==='event' ? 'd-block' : ''}`}>            
              <div className="nav-item">
                <NavLink className="nav-link" to="/notfound" activeClassName="active"><span>View All Events</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>Create Events</span></NavLink>
              </div>   
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>Manage Events</span></NavLink>
              </div>      
            </div>
          </li>

          <li className={`nav-item dropdown ${paymentSelection ==='attendance' ? 'show' : ''}`}>
            <div className={`nav-link dropdown-toggle ${paymentSelection ==='attendance' ? 'active' : ''}`} id="attendance" href='#' onClick={(e) => {
              e.preventDefault();
              this.toggleContent(e);
            }}>
              <i className="material-icons icon">turned_in_not</i>
              <span>Attendance</span>{" "}
              <i className="material-icons arrow">expand_more</i>
            </div>
            <div className={`nav flex-column  ${paymentSelection ==='attendance' ? 'd-block' : ''}`}>            
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>Create Attendance</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>View all Attendances</span></NavLink>
              </div>  
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>Manage Attendances</span></NavLink>
              </div>          
            </div>
          </li>

          <li className={`nav-item dropdown ${paymentSelection ==='gate_pass' ? 'show' : ''}`}>
            <div className={`nav-link dropdown-toggle ${paymentSelection ==='gate_pass' ? 'active' : ''}`} id="gate_pass" href='#' onClick={(e) => {
              e.preventDefault();
              this.toggleContent(e);
            }}>
              <i className="material-icons icon">turned_in_not</i>
              <span>Gate Pass</span>{" "}
              <i className="material-icons arrow">expand_more</i>
            </div>
            <div className={`nav flex-column  ${paymentSelection ==='gate_pass' ? 'd-block' : ''}`}>            
              <div className="nav-item">
                <NavLink className="nav-link" to="/notfound" activeClassName="active"><span>View All Entry/Exit</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>Create Entry Pass</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>Create Entry</span></NavLink>
              </div>            
              <div className="nav-item">
                <NavLink className="nav-link" to="/notfound" activeClassName="active"><span>Create Guest Entry</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>Create Exit Pass</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>Kids Security</span></NavLink>
              </div>            
              <div className="nav-item">
                <NavLink className="nav-link" to="/notfound" activeClassName="active"><span>Contact Information</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>Staff Gate Pass</span></NavLink>
              </div>           
              <div className="nav-item">
                <NavLink className="nav-link" to="/notfound" activeClassName="active"><span>Create Special Entry</span></NavLink>
              </div> 
            </div>
          </li>

          <li className={`nav-item dropdown ${paymentSelection ==='booking' ? 'show' : ''}`}>
            <div className={`nav-link dropdown-toggle ${paymentSelection ==='booking' ? 'active' : ''}`} id="booking" href='#' onClick={(e) => {
              e.preventDefault();
              this.toggleContent(e);
            }}>
              <i className="material-icons icon">turned_in_not</i>
              <span>Booking</span>{" "}
              <i className="material-icons arrow">expand_more</i>
            </div>
            <div className={`nav flex-column  ${paymentSelection ==='booking' ? 'd-block' : ''}`}>            
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>Create Booking</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>View all Bookings</span></NavLink>
              </div>  
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>Manage Bookings</span></NavLink>
              </div>          
            </div>
          </li>

          <li className={`nav-item dropdown ${paymentSelection ==='slot_booking' ? 'show' : ''}`}>
            <div className={`nav-link dropdown-toggle ${paymentSelection ==='slot_booking' ? 'active' : ''}`} id="slot_booking" href='#' onClick={(e) => {
              e.preventDefault();
              this.toggleContent(e);
            }}>
              <i className="material-icons icon">turned_in_not</i>
              <span>Slot booking</span>{" "}
              <i className="material-icons arrow">expand_more</i>
            </div>
            <div className={`nav flex-column  ${paymentSelection ==='slot_booking' ? 'd-block' : ''}`}>            
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>Create Slot Booking</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>View all Slot Bookings</span></NavLink>
              </div>  
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>Manage Slot Bookings</span></NavLink>
              </div>          
            </div>
          </li>

          <li className={`nav-item dropdown ${paymentSelection ==='plan_packages' ? 'show' : ''}`}>
            <div className={`nav-link dropdown-toggle ${paymentSelection ==='plan_packages' ? 'active' : ''}`} id="plan_packages" href='#' onClick={(e) => {
              e.preventDefault();
              this.toggleContent(e);
            }}>
              <i className="material-icons icon">turned_in_not</i>
              <span>Slot booking</span>{" "}
              <i className="material-icons arrow">expand_more</i>
            </div>
            <div className={`nav flex-column  ${paymentSelection ==='plan_packages' ? 'd-block' : ''}`}>            
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>Create Plan Package</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>View all Plan Packages</span></NavLink>
              </div>  
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>Manage Plan Packages</span></NavLink>
              </div>          
            </div>
          </li>

          <li className={`nav-item dropdown ${paymentSelection ==='certificate_exam' ? 'show' : ''}`}>
            <div className={`nav-link dropdown-toggle ${paymentSelection ==='certificate_exam' ? 'active' : ''}`} id="certificate_exam" href='#' onClick={(e) => {
              e.preventDefault();
              this.toggleContent(e);
            }}>
              <i className="material-icons icon">turned_in_not</i>
              <span>Certificate Exam</span>{" "}
              <i className="material-icons arrow">expand_more</i>
            </div>
            <div className={`nav flex-column  ${paymentSelection ==='certificate_exam' ? 'd-block' : ''}`}>            
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>Create Certificate Exam</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>View all Certificates Exam</span></NavLink>
              </div>  
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>Manage Certificates Exam</span></NavLink>
              </div>          
            </div>
          </li>

          <li className={`nav-item dropdown ${paymentSelection ==='classes_batches' ? 'show' : ''}`}>
            <div className={`nav-link dropdown-toggle ${paymentSelection ==='classes_batches' ? 'active' : ''}`} id="classes_batches" href='#' onClick={(e) => {
              e.preventDefault();
              this.toggleContent(e);
            }}>
              <i className="material-icons icon">turned_in_not</i>
              <span>Classes & Batches</span>{" "}
              <i className="material-icons arrow">expand_more</i>
            </div>
            <div className={`nav flex-column  ${paymentSelection ==='classes_batches' ? 'd-block' : ''}`}>            
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>View all Classes & Batches</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>Manage all Classes & Batches</span></NavLink>
              </div>  
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>Create Classes & Batches</span></NavLink>
              </div>          
            </div>
          </li>

          <li className={`nav-item dropdown ${paymentSelection ==='courses' ? 'show' : ''}`}>
            <div className={`nav-link dropdown-toggle ${paymentSelection ==='courses' ? 'active' : ''}`} id="courses" href='#' onClick={(e) => {
              e.preventDefault();
              this.toggleContent(e);
            }}>
              <i className="material-icons icon">turned_in_not</i>
              <span>Courses</span>{" "}
              <i className="material-icons arrow">expand_more</i>
            </div>
            <div className={`nav flex-column  ${paymentSelection ==='courses' ? 'd-block' : ''}`}>            
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>View all Courses</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>Manage all Courses</span></NavLink>
              </div>  
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>Create Courses</span></NavLink>
              </div>          
            </div>
          </li>

          <li className={`nav-item dropdown ${paymentSelection ==='staff_management' ? 'show' : ''}`}>
            <div className={`nav-link dropdown-toggle ${paymentSelection ==='staff_management' ? 'active' : ''}`} id="staff_management" href='#' onClick={(e) => {
              e.preventDefault();
              this.toggleContent(e);
            }}>
              <i className="material-icons icon">turned_in_not</i>
              <span>Staff Management</span>{" "}
              <i className="material-icons arrow">expand_more</i>
            </div>
            <div className={`nav flex-column  ${paymentSelection ==='staff_management' ? 'd-block' : ''}`}>            
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>Create Staff</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>View all Staff</span></NavLink>
              </div>  
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>Manage Staff</span></NavLink>
              </div>                  
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>Manage Staff Duty</span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>Create Staff Role</span></NavLink>
              </div>  
              <div className="nav-item">
                <NavLink className="nav-link" to="/servererror" activeClassName="active"><span>Staff Permissions</span></NavLink>
              </div>    
            </div>
          </li>
        </ul>
      
        {/* Setting link */}
        <ul className="nav flex-column">
          <li className={`nav-item dropdown ${paymentSelection ==='settings' ? 'show' : ''}`}>
            <div  className={`nav-link dropdown-toggle ${paymentSelection ==='settings' ? 'active' : ''}`} id="settings" href='#' onClick={(e)  => {
              e.preventDefault();
              this.toggleContent(e);
            }}>
              <i className="material-icons icon">settings_applications</i>
              <span>Settings</span>{" "}
              <i className="material-icons arrow">expand_more</i>
            </div>
            <div className={`nav flex-column  ${paymentSelection ==='settings' ? 'd-block' : ''}`}>
              <div className="nav-item">
                <a className="nav-link" href='#' onClick={e => e.preventDefault()}>
                  <span>Profile Setting</span>
                </a>
              </div>
              <div className="nav-item">
                <a className="nav-link" href='#' onClick={e => e.preventDefault()}>
                  <span>Privacy</span>
                </a>
              </div>
              <div className="nav-item">
                <a className="nav-link" href='#' onClick={e => e.preventDefault()}>
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
