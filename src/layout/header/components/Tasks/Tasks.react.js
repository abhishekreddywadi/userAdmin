import React from 'react';
import { Tab, Nav, Dropdown, Button } from 'react-bootstrap';

import user1image from '../../../../assets/img/user1.png';
import user2image from '../../../../assets/img/user2.png';
import user3image from '../../../../assets/img/user3.png';
import user4image from '../../../../assets/img/user4.png';
import backgroundimage from '../../../../assets/img/background-part.png';

var sectionStyle = {
    backgroundImage: 'url(' + backgroundimage + ')'
};


const Tasks = () => {

    return (
        <Dropdown className="nav-item dropdown">
            <Dropdown.Toggle className="nav-link dropdown-toggle active" id="navbarDropdown4" variant="link" >
                <i className="material-icons">view_day</i>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-center no-defaults pt-0 overflow-hidden" aria-labelledby="navbarDropdown4">
                <Tab.Container id="left-tabs-example" defaultActiveKey="home1">
                    <div className="position-relative text-center rounded">
                        <div className="background" style={sectionStyle}></div>
                        <div className="py-3 text-white">
                            <h5 className="font-weight-normal mb-3">Tasks</h5>
                            <div className="px-3">
                                <Nav variant="pills" className="tab-white nav-fill">
                                    <Nav.Item className="nav-item">
                                        <Nav.Link className="nav-link" eventKey="home1">Task</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="nav-item">
                                        <Nav.Link className="nav-link" eventKey="profile1">Activity</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="nav-item">
                                        <Nav.Link className="nav-link" eventKey="alert1">Alert</Nav.Link>
                                    </Nav.Item>
                                </Nav >
                            </div>
                        </div>
                    </div>
                    <Tab.Content className="tab-content" id="tasksContent">
                        <Tab.Pane className="fade" eventKey="home1">
                            <div className="scroll-y h-320 d-block">
                                <div className="dropdown-item status-border border-warning">
                                    <div className="row">
                                        <div className="col-auto align-self-center">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="checktask1" />
                                                <label className="custom-control-label" htmlFor="checktask1" />
                                            </div>
                                        </div>
                                        <div className="col pl-0">
                                            <p className="mb-0">6:33 | Attend Meeting</p>
                                            <p className="small text-mute">Meeting with team regarding new project live integration.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown-item status-border border-danger">
                                    <div className="row">
                                        <div className="col-auto align-self-center">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="checktask2" />
                                                <label className="custom-control-label" htmlFor="checktask2" />
                                            </div>
                                        </div>
                                        <div className="col pl-0">
                                            <p className="mb-0">7:33 | Drink Water</p>
                                            <p className="small text-mute">Reminder for drinking water is very important.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown-item status-border border-warning">
                                    <div className="row">
                                        <div className="col-auto align-self-center">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="checktask3" />
                                                <label className="custom-control-label" htmlFor="checktask3" />
                                            </div>
                                        </div>
                                        <div className="col pl-0">
                                            <p className="mb-0">8:00 | work for timesheet</p>
                                            <p className="small text-mute">Working for calendar module in timesheet. First entry and secondly for display</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown-item status-border border-success">
                                    <div className="row">
                                        <div className="col-auto align-self-center">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="checktask4" />
                                                <label className="custom-control-label" htmlFor="checktask4" />
                                            </div>
                                        </div>
                                        <div className="col pl-0">
                                            <p className="mb-0">10:45 | Reverse proccess Training</p>
                                            <p className="small text-mute mb-2">Must attend training which is basically the most advisable to setup role and descipline.</p>
                                            <figure className="avatar avatar-20 mr-1"><img src={user1image} alt="adminux pro" /></figure>
                                            <figure className="avatar avatar-20 mr-1"><img src={user3image} alt="adminux pro" /></figure>
                                            <figure className="avatar avatar-20 mr-1"><img src={user2image} alt="adminux pro" /></figure>
                                            <figure className="avatar avatar-20 mr-1">20+</figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown-item status-border border-primary">
                                    <div className="row">
                                        <div className="col-auto align-self-center">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="checktask5" />
                                                <label className="custom-control-label" htmlFor="checktask5" />
                                            </div>
                                        </div>
                                        <div className="col pl-0">
                                            <p className="mb-0">6:33 | Attend Meeting</p>
                                            <p className="small text-mute">Meeting with team regarding new project live integration.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown-item border-top">
                                <Button variant="primary" block className="text-white mt-2"><span>Complete</span><i className="material-icons md-18">arrow_forward</i></Button>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane className="fade" id="pills-profile" eventKey="profile1">
                            <div className="scroll-y h-320 d-block">
                                <a className="dropdown-item" href="fake_link">
                                    <div className="row">
                                        <div className="col-auto">
                                            <div className="timeline-circle-wrap">
                                                <div className="timeline-circle border-warning"><span className="bg-warning" /></div>
                                            </div>
                                        </div>
                                        <div className="col pl-0">
                                            <p className="mb-0">We become world most valauble</p>
                                            <p className="small text-mute">Thank you for all of your support and well wishes</p>
                                        </div>
                                    </div>
                                </a>
                                <a className="dropdown-item" href="fake_link">
                                    <div className="row">
                                        <div className="col-auto">
                                            <div className="timeline-circle-wrap">
                                                <div className="timeline-circle border-danger"><span className="bg-danger" /></div>
                                            </div>
                                        </div>
                                        <div className="col pl-0">
                                            <p className="mb-0">Team Closer</p>
                                            <p className="small text-mute mb-1">Maxartkiller Team</p>
                                            <figure className="avatar avatar-30 mr-1"><img src={user1image} alt="adminux pro" /></figure>
                                            <figure className="avatar avatar-30 mr-1"><img src={user3image} alt="adminux pro" /></figure>
                                            <figure className="avatar avatar-30 mr-1"><img src={user2image} alt="adminux pro" /></figure>
                                            <figure className="avatar avatar-30 mr-1"><img src={user4image} alt="adminux pro" /></figure>
                                        </div>
                                    </div>
                                </a>
                                <a className="dropdown-item" href="fake_link">
                                    <div className="row">
                                        <div className="col-auto">
                                            <div className="timeline-circle-wrap">
                                                <div className="timeline-circle border-success"><span className="bg-success" /></div>
                                            </div>
                                        </div>
                                        <div className="col pl-0">
                                            <p className="mb-0">Final Amendments are done </p>
                                            <p className="small text-mute">Creative visual hierarchy completed</p>
                                        </div>
                                    </div>
                                </a>
                                <a className="dropdown-item" href="fake_link">
                                    <div className="row">
                                        <div className="col-auto">
                                            <div className="timeline-circle-wrap">
                                                <div className="timeline-circle border-primary"><span className="bg-primary" /></div>
                                            </div>
                                        </div>
                                        <div className="col pl-0">
                                            <p className="mb-0">Vision deployment done</p>
                                            <p className="small text-mute">UX designer worked upon timline</p>
                                        </div>
                                    </div>
                                </a>
                                <a className="dropdown-item" href="fake_link">
                                    <div className="row">
                                        <div className="col-auto">
                                            <div className="timeline-circle-wrap">
                                                <div className="timeline-circle border-info"><span className="bg-info" /></div>
                                            </div>
                                        </div>
                                        <div className="col pl-0">
                                            <p className="mb-0">Critical Bug resolved</p>
                                            <p className="small text-mute">Cleared list for bugs and development.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane className="fade" id="pills-contact" eventKey="alert1">
                            <div className="scroll-y h-320 d-block">
                                <a className="dropdown-item border-top new" href="fake_link">
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
                                </a>
                                <a className="dropdown-item border-top " href="fake_link">
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
                                </a>
                                <a className="dropdown-item border-top " href="fake_link">
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
                                </a>
                                <a className="dropdown-item border-top" href="fake_link">
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
                                </a>
                                <a className="dropdown-item border-top " href="fake_link">
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
                                </a>
                            </div>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </Dropdown.Menu>
        </Dropdown>
    );

}

export default Tasks;