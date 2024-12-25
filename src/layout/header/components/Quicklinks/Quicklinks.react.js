import React from 'react';
import { Dropdown } from 'react-bootstrap';

import backgroundimage from '../../../../assets/img/background-part.png';

var sectionStyle = {
    backgroundImage: 'url('+ backgroundimage +')'
};


const Quicklinks = () => {

    return (
        <Dropdown className="nav-item dropdown d-none d-sm-flex">
            <Dropdown.Toggle className="nav-link dropdown-toggle active" id="navbarDropdown2" variant="link" >
                <i className="material-icons">apps</i>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu dropdown-menu-center no-defaults pt-0 overflow-hidden" aria-labelledby="navbarDropdown2">
                <div className="position-relative text-center rounded">
                    <div className="background" style={sectionStyle}></div>
                    <div className="pt-4 pb-5 text-white">
                        <h5 className="font-weight-normal">Quick Access</h5>
                        <p>Get Quick access to your<br />favorite applications</p>
                        <br />
                    </div>
                </div>
                <div className="row mx-0 top-60">
                    <div className="col-12 col-md-11 mx-auto">
                        <div className="row">
                            <div className="col-6">
                                <div className="card border-0 shadow mb-3">
                                    <div className="card-body text-center">
                                        <i className="avatar avatar-40 material-icons text-template-primary my-3">favorite</i>
                                        <p>Dashboard</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="card border-0 shadow mb-3">
                                    <div className="card-body text-center">
                                        <i className="avatar avatar-40 material-icons bg-light-warning text-warning my-3">style</i>
                                        <p>Sidebar</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="card border-0 shadow mb-3">
                                    <div className="card-body text-center">
                                        <i className="avatar avatar-40 material-icons bg-light-danger text-danger my-3">library_books</i>
                                        <p>Pages</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="card border-0 shadow mb-3">
                                    <div className="card-body text-center">
                                        <i className="avatar avatar-40 material-icons bg-light-success text-success my-3">poll</i>
                                        <p>Charts</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Dropdown.Menu>
        </Dropdown>
    );

}

export default Quicklinks;