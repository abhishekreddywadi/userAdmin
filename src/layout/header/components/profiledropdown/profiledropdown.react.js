import React from 'react';
import { Dropdown } from 'react-bootstrap';

import userimage from '../../../../assets/img/user1.png';
import backgroundimage from '../../../../assets/img/background-part.png';

var sectionStyle = {
    backgroundImage: 'url('+ backgroundimage +')'
};

const Profiledropdown = () => {

    return (
        <Dropdown className="nav-item ml-0 ml-sm-4 ">
            <Dropdown.Toggle className="nav-link profile-link active" id="navbarDropdown6" variant="link" >
                <figure className="rounded avatar avatar-30">
                    <img src={userimage} alt="adminux pro" />
                </figure>
                <div className="username-text ml-2 mr-2 d-none d-lg-inline-block">
                    <h6 className="username"><span>Welcome,</span>Maxartkiller</h6>
                </div>
                <figure className="rounded avatar avatar-30 d-none d-md-inline-block">
                    <i className="material-icons">expand_more</i>
                </figure>
            </Dropdown.Toggle>
            <Dropdown.Menu alignRight className="w-300 pt-0 overflow-hidden active" style={{zIndex:"9999"}} aria-labelledby="navbarDropdown6">
                <div className="position-relative text-center rounded py-5">
                    <div className="background" style={sectionStyle}></div>
                </div>
                <div className="text-center mb-3 top-60 z-2">
                    <figure className="avatar avatar-120 mx-auto shadow"><img src={userimage} alt="adminux pro" /></figure>
                </div>
                <h5 className="text-center mb-0">Maxartkiller</h5>
                <p className="text-center">UX Designer</p>
                <p className="text-center text-secondary fs13">Delhi, India</p>
                <Dropdown.Item className="dropdown-item border-top" href="fake_link">
                    <div className="row">
                        <div className="col-auto align-self-center">
                            <i className="material-icons text-success">account_box</i>
                        </div>
                        <div className="col pl-0">
                            <p className="mb-0">My Profile</p>
                            <p className="small text-mute text-trucated">Update details and information</p>
                        </div>
                        <div className="col-auto align-self-center text-right pl-0">
                            <i className="material-icons text-mute small">chevron_right</i>
                        </div>
                    </div>
                </Dropdown.Item>
                <Dropdown.Item className="dropdown-item border-top" href="fake_link">
                    <div className="row">
                        <div className="col-auto align-self-center">
                            <i className="material-icons text-info">account_balance_wallet</i>
                        </div>
                        <div className="col pl-0">
                            <p className="mb-0">My Wallet</p>
                            <p className="small text-mute text-trucated">Add Money or withdrow</p>
                        </div>
                        <div className="col-auto align-self-center text-right pl-0">
                            <i className="material-icons text-mute small">chevron_right</i>
                        </div>
                    </div>
                </Dropdown.Item>
                <Dropdown.Item className="dropdown-item border-top" href="fake_link">
                    <div className="row">
                        <div className="col-auto align-self-center">
                            <i className="material-icons text-warning">date_range</i>
                        </div>
                        <div className="col pl-0">
                            <p className="mb-0">My Schedule</p>
                            <p className="small text-mute text-trucated">Appointments and schedules</p>
                        </div>
                        <div className="col-auto align-self-center text-right pl-0">
                            <i className="material-icons text-mute small">chevron_right</i>
                        </div>
                    </div>
                </Dropdown.Item>
                <Dropdown.Item className="dropdown-item border-top" href="fake_link">
                    <div className="row">
                        <div className="col-auto align-self-center">
                            <i className="material-icons text-danger">exit_to_app</i>
                        </div>
                        <div className="col pl-0">
                            <p className="mb-0 text-danger">Lougout</p>
                        </div>
                        <div className="col-auto align-self-center text-right pl-0">
                            <i className="material-icons text-mute small text-danger">chevron_right</i>
                        </div>
                    </div>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );

}

export default Profiledropdown;