import React from 'react';
import { Dropdown } from 'react-bootstrap';
import backgroundimage from '../../../../assets/img/background-part.png';

var sectionStyle = {
    backgroundImage: 'url(' + backgroundimage + ')'
};


const Messages = () => {

    return (
        <Dropdown className="nav-item dropdown">
            <Dropdown.Toggle className="nav-link active" id="navbarDropdown5"  variant="link" >
                <i className="material-icons mr-0">email</i>
                <span className="counter bg-danger">1</span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-center dropdown-menu-sm-left  no-defaults pt-0 overflow-hidden">
                <div className="position-relative text-center rounded">
                    <div className="background" style={sectionStyle}>
                    </div>
                    <div className="py-3 text-white">
                        <h5 className="font-weight-normal">Messages</h5>
                        <p>Updates and Status</p>
                    </div>
                </div>
                <div className="scroll-y h-320 d-block">
                    <Dropdown.Item className="dropdown-item border-top new" href="fake_link">
                        <div className="row">
                            <div className="col-auto align-self-center">
                                <i className="material-icons text-template-primary">local_mall</i>
                            </div>
                            <div className="col pl-0">
                                <div className="row mb-1">
                                    <div className="col">
                                        <p className="mb-0">New Order received</p>
                                    </div>
                                    <div className="col-auto pl-0">
                                        <p className="small text-mute text-trucated mt-1">2/12/2019</p>
                                    </div>
                                </div>
                                <p className="small text-mute">Order from Anand Mhatva recieved for Electronics with 6 quanity.</p>
                            </div>
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item border-top " href="fake_link">
                        <div className="row">
                            <div className="col-auto align-self-center">
                                <i className="material-icons text-template-primary">account_balance_wallet</i>
                            </div>
                            <div className="col pl-0">
                                <div className="row mb-1">
                                    <div className="col">
                                        <p className="mb-0">Balance has benn added</p>
                                    </div>
                                    <div className="col-auto pl-0">
                                        <p className="small text-mute text-trucated mt-1">2/12/2019</p>
                                    </div>
                                </div>
                                <p className="small text-mute">Order from Anand Mhatva recieved for Electronics with 6 quanity.</p>
                            </div>
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item border-top " href="fake_link">
                        <div className="row">
                            <div className="col-auto align-self-center">
                                <i className="material-icons text-template-primary">account_circle</i>
                            </div>
                            <div className="col pl-0">
                                <div className="row mb-1">
                                    <div className="col">
                                        <p className="mb-0">Friend request received</p>
                                    </div>
                                    <div className="col-auto pl-0">
                                        <p className="small text-mute text-trucated mt-1">2/12/2019</p>
                                    </div>
                                </div>
                                <p className="small text-mute">New friend request received from Mickey John from Australia</p>
                            </div>
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item border-top" href="fake_link">
                        <div className="row">
                            <div className="col-auto align-self-center">
                                <i className="material-icons text-template-primary">check_circle</i>
                            </div>
                            <div className="col pl-0">
                                <div className="row mb-1">
                                    <div className="col">
                                        <p className="mb-0">Email Updated</p>
                                    </div>
                                    <div className="col-auto pl-0">
                                        <p className="small text-mute text-trucated mt-1">2/12/2019</p>
                                    </div>
                                </div>
                                <p className="small text-mute">Your email change request has been successfully updated</p>
                            </div>
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item border-top " href="fake_link">
                        <div className="row">
                            <div className="col-auto align-self-center">
                                <i className="material-icons text-template-primary">account_balance_wallet</i>
                            </div>
                            <div className="col pl-0">
                                <div className="row mb-1">
                                    <div className="col">
                                        <p className="mb-0">Balance has benn added</p>
                                    </div>
                                    <div className="col-auto pl-0">
                                        <p className="small text-mute text-trucated mt-1">2/12/2019</p>
                                    </div>
                                </div>
                                <p className="small text-mute">Order from Anand Mhatva recieved for Electronics with 6 quanity.</p>
                            </div>
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item border-top " href="fake_link">
                        <div className="row">
                            <div className="col-auto align-self-center">
                                <i className="material-icons text-template-primary">account_circle</i>
                            </div>
                            <div className="col pl-0">
                                <div className="row mb-1">
                                    <div className="col">
                                        <p className="mb-0">Friend request received</p>
                                    </div>
                                    <div className="col-auto pl-0">
                                        <p className="small text-mute text-trucated mt-1">2/12/2019</p>
                                    </div>
                                </div>
                                <p className="small text-mute">New friend request received from Mickey John from Australia</p>
                            </div>
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item border-top" href="fake_link">
                        <div className="row">
                            <div className="col-auto align-self-center">
                                <i className="material-icons text-template-primary">check_circle</i>
                            </div>
                            <div className="col pl-0">
                                <div className="row mb-1">
                                    <div className="col">
                                        <p className="mb-0">Email Updated</p>
                                    </div>
                                    <div className="col-auto pl-0">
                                        <p className="small text-mute text-trucated mt-1">2/12/2019</p>
                                    </div>
                                </div>
                                <p className="small text-mute">Your email change request has been successfully updated</p>
                            </div>
                        </div>
                    </Dropdown.Item>
                </div>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default Messages;