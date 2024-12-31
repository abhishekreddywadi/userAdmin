import React from 'react';
import { Tab, Nav, Dropdown, Button } from 'react-bootstrap';
import Circularprogress2 from './Circularprogress2/Circularprogress2.react';
import Circularprogress from '../Production/Circularprogress/Circularprogress.react';
import Vectormap from '../Production/Vectormap/Vectormap.react';
import Mixbarcharts from './Mixbarcharts/Mixbarcharts.react';
import Dougnutchart from '../Production/Dougnutchart/Dougnutchart.react';
import Linechart from '../Production/Linechart/Linechart.react';
import Barchartviews from '../Production/Barchartviews/Barchartviews.react';


import userimage1 from '../../assets/img/user1.png';
import userimage2 from '../../assets/img/user2.png';
import userimage3 from '../../assets/img/user3.png';
import userimage4 from '../../assets/img/user4.png';
import userimage5 from '../../assets/img/user5.png';

import newsimage1 from '../../assets/img/newzimage.png';

var backgroundnews = {
    backgroundImage : 'url('+ newsimage1 +')'
};


class Networking extends React.Component {

    render() {
        return (
            <div className="container main-container" id="main-container">
            {/* Main container starts */}
            <div className="row">
                <div className="col-12 col-md-6 col-lg-6 col-xl-3">
                <div className="card border-0 shadow-sm overflow-hidden mb-4">
                    <div className="card-body">
                    <div className="row">
                        <div className="col-auto text-center">
                        <i className="material-icons icons bg-primary md-36 icon-50">monetization_on</i>
                        </div>
                        <div className="col pl-0">
                        <p className="mb-0">Total Profit</p>
                        <h4 className="font-weight-light"><small>$</small> 25,410</h4>
                        </div>
                    </div>
                    <div className="progress h-5 mt-2">
                        <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-3">
                <div className="card border-0 shadow-sm overflow-hidden mb-4">
                    <div className="card-body">
                    <div className="row">
                        <div className="col-auto text-center">
                        <i className="material-icons icons bg-danger md-36 icon-50">remove_from_queue</i>
                        </div>
                        <div className="col pl-0">
                        <p className="mb-0">Total Loss</p>
                        <h4 className="font-weight-light"><small>$</small> 15,410</h4>
                        </div>
                    </div>
                    <div className="progress h-5 mt-2">
                        <div className="progress-bar bg-danger" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-3">
                <div className="card border-0 shadow-sm overflow-hidden mb-4">
                    <div className="card-body">
                    <div className="row">
                        <div className="col-auto align-self-center">
                        <div className="progress-summary">
                            <p className="mb-0">60%<br /><small><span className="d-block small text-template-primary">Global</span></small></p>
                            <Circularprogress></Circularprogress>
                        </div>
                        </div>
                        <div className="col pl-0 ">
                        <p className="mb-1">Awareness<span className="text-template-primary d-block small">Frequency</span></p>
                        <h4 className="font-weight-light mb-0">76.98%</h4>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-3">
                <div className="card border-0 shadow-sm overflow-hidden mb-4">
                    <div className="card-body">
                    <div className="row">
                        <div className="col ">
                        <p className="mb-0">Total Deals</p>
                        <h4 className="font-weight-light">15410 <small>+15%</small></h4>
                        </div>
                        <div className="col-auto text-center pl-0">
                        <i className="material-icons icons bg-warning md-36 icon-50">language</i>
                        </div>
                    </div>
                    <div className="progress h-5 mt-2">
                        <div className="progress-bar bg-warning" role="progressbar" style={{width: '65%'}} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                <div className="card border-0 shadow-sm overflow-hidden mb-4">
                    <div className="card-header border-0 bg-none">
                    <div className="row">
                        <div className="col">
                        <p className="fs15">User Session Overview<br /><small className="text-template-primary-light">Per Quarter</small></p>
                        </div>
                        <form className="form-inline search align-self-center">
                        <input className="form-control form-control-sm" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-link btn-sm" type="submit"><i className="material-icons">search</i></button>
                        </form>
                        <div className="col-auto">
                        <button className="btn btn-sm btn-outline-template">
                            <i className="material-icons md-18 mr-2">print</i> Print
                        </button>
                        <button className="btn btn-sm btn-outline-template ml-2">
                            <i className="material-icons md-18">cloud_download</i> Export
                        </button>
                        <Dropdown className="dropdown d-inline-block">
                                <Dropdown.Toggle className="btn dropdown-toggle btn-sm btn-link" type="button" variant="link">
                                <i className="material-icons">more_horiz</i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu dropdown-menu-sm dropdown-menu-right" alignRight>
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another</a>
                                <a className="dropdown-item" href="#">Something</a>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    </div>
                    <div className="card-body">
                    <br />
                    <div className="areachart">
                        <Mixbarcharts></Mixbarcharts>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-auto">
                        <div className="row">
                            <div className="col-auto">
                            <i className="material-icons text-template-primary fs15 vm">album</i>
                            </div>
                            <div className="col pl-0">
                            <p>IT User <small className="d-block"><span className="text-template-primary">25600</span></small></p>
                            </div>
                        </div>
                        </div>
                        <div className="col-auto border-left-dashed">
                        <div className="row">
                            <div className="col-auto">
                            <i className="material-icons text-success fs15 vm">album</i>
                            </div>
                            <div className="col pl-0">
                            <p>Non-IT <small className="d-block"><span className="text-template-primary">6548</span></small></p>
                            </div>
                        </div>
                        </div>
                        <div className="col-auto border-left-dashed">
                        <div className="row">
                            <div className="col-auto">
                            <i className="material-icons text-danger fs15 vm">album</i>
                            </div>
                            <div className="col pl-0">
                            <p>Trainee <small className="d-block"><span className="text-template-primary">15548</span></small></p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-4  mb-4">
                    <div className="card border-0 shadow-sm overflow-hidden h-100">
                        <div className="card-header border-0 bg-none">
                            <div className="row">
                                <div className="col">
                                <p className="fs15">Page Views<br /><small className="text-template-primary-light">This week vs Last week</small></p>
                                </div>
                                <div className="col-auto">
                                <Dropdown className="dropdown">
                                        <Dropdown.Toggle className="btn dropdown-toggle btn-sm btn-link" type="button" variant="link">
                                        <i className="material-icons">more_horiz</i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="dropdown-menu dropdown-menu-sm dropdown-menu-right" alignRight>
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another</a>
                                        <a className="dropdown-item" href="#">Something</a>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        <Tab.Container  defaultActiveKey="tabs1" >
                            <div className="card-body">
                                <Tab.Content className="tab-content" id="myTabContent">
                                    <Tab.Pane className="tab-pane fade" eventKey="tabs1">
                                        <div className="barcharts">
                                            <Barchartviews></Barchartviews>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane className="tab-pane fade" eventKey="tabs2">..Tab 2..</Tab.Pane>
                                    <Tab.Pane className="tab-pane fade" eventKey="tabs3">..Tab 3..</Tab.Pane>
                                </Tab.Content>
                            </div>
                            <div className="card-footer p-0 border-0 bg-none">
                                <Nav className="nav nav-tabs nav-fill" id="myTab" role="tablist">
                                    <Nav.Item className="nav-item">
                                    <Nav.Link className="nav-link" eventKey="tabs1">
                                        <p className="mb-1">New User</p>
                                        <p className="text-template-primary-light">2540 <span className="badge badge-success vm">+21%</span></p>
                                    </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="nav-item">
                                    <Nav.Link className="nav-link" eventKey="tabs2">
                                        <p className="mb-1">Returning User</p>
                                        <p className="text-template-primary-light">1540 <span className="badge badge-danger vm">-21%</span></p>
                                    </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="nav-item">
                                    <Nav.Link className="nav-link" eventKey="tabs3">
                                        <p className="mb-1">Referral</p>
                                        <p className="text-template-primary-light">10 <span className="badge badge-danger vm">-21%</span></p>
                                    </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </Tab.Container>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                <div className="card border-0 shadow-sm mb-4">
                    <div className="card-header border-0 bg-none">
                    <div className="row">
                        <div className="col align-self-center">
                        <p className="fs15">Sales by Categories</p>
                        </div>
                        <div className="col-auto">
                        <Dropdown className="dropdown">
                                <Dropdown.Toggle className="btn dropdown-toggle btn-sm btn-link" type="button" variant="link">
                                <i className="material-icons">more_horiz</i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu dropdown-menu-sm dropdown-menu-right" alignRight>
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another</a>
                                <a className="dropdown-item" href="#">Something</a>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    </div>
                    <div className="card-body pt-2">
                    <div className="row">
                        <div className="col-auto text-center align-self-center">
                        <div className="donughtchart">
                            <Dougnutchart></Dougnutchart>
                        </div>
                        </div>
                        <div className="col">
                        <div className="row mb-1">
                            <div className="col-auto">
                            <i className="material-icons text-template-primary fs15 vm">album</i>
                            </div>
                            <div className="col pl-0">
                            <p>Referral Sale <small className="d-block"><span className="text-template-primary">2548</span> <span className="text-danger">20%</span></small></p>
                            </div>
                        </div>
                        <div className="row mb-1">
                            <div className="col-auto">
                            <i className="material-icons text-success fs15 vm">album</i>
                            </div>
                            <div className="col pl-0">
                            <p>Direct Sales <small className="d-block"><span className="text-template-primary">2548</span> <span className="text-success">15%</span></small></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-auto">
                            <i className="material-icons text-danger fs15 vm">album</i>
                            </div>
                            <div className="col pl-0">
                            <p>Offline Sales <small className="d-block"><span className="text-template-primary">2548</span> <span className="text-success">18%</span></small></p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="card border-0 shadow-sm mb-4">
                    <div className="card-header border-0 bg-none">
                    <div className="row">
                        <div className="col align-self-center">
                        <p className="fs15">Bounce Rate</p>
                        </div>
                        <div className="col-auto">
                        <Dropdown className="dropdown">
                                <Dropdown.Toggle className="btn dropdown-toggle btn-sm btn-link" type="button" variant="link">
                                <i className="material-icons">more_horiz</i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu dropdown-menu-sm dropdown-menu-right" alignRight>
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another</a>
                                <a className="dropdown-item" href="#">Something</a>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    </div>
                    <div className="card-body">
                    <div className="row">
                        <div className="col-12 text-center align-self-center">
                        <div className="linechart-large">
                            <Linechart></Linechart>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                <div className="card border-0 shadow-sm mb-4">
                    <div className="card-header border-0 bg-none">
                    <div className="row">
                        <div className="col">
                        <p className="fs15">Internet Speed<br /><small className="text-template-primary-light">Speed Check Server 1</small></p>
                        </div>
                        <div className="col-auto">
                        <Dropdown className="dropdown">
                                <Dropdown.Toggle className="btn dropdown-toggle btn-sm btn-link" type="button" variant="link">
                                <i className="material-icons">more_horiz</i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu dropdown-menu-sm dropdown-menu-right" alignRight>
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another</a>
                                <a className="dropdown-item" href="#">Something</a>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    </div>
                    <div className="card-body">
                    <div className="guagechart text-center">
                        <h3>20.8<br /><small className="text-template-primary">mbps</small></h3>
                        <Circularprogress2 className="mx-auto text-center"></Circularprogress2>
                    </div>
                    <h3 className="text-warning text-center mb-4">
                        <i className="material-icons">star_outline</i>
                        <i className="material-icons">star_outline</i>
                        <i className="material-icons">star_outline</i>
                    </h3>
                    <div className="row">
                        <div className="col-6 text-right">
                        <p className="mb-1">Total Sales <i className="material-icons text-template-primary fs15 vm">album</i></p>
                        <p className="text-template-primary-light">25600</p>
                        </div>
                        <div className="col-6 border-left-dashed">
                        <p className="mb-1"><i className="material-icons text-template-primary-light fs15 vm">album</i> Referral Sales</p>
                        <p className="text-template-primary-light">6500</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-12">
                <div className="card border-0 shadow-sm overflow-hidden mb-4">
                    <div className="card-header border-0 bg-none">
                    <div className="row">
                        <div className="col-12 col-md">
                        <p className="fs15">Assigned Tickets and Status<br /><small className="text-template-primary-light">This week vs Last week</small></p>
                        </div>
                        <form className="form-inline search col-auto align-self-center px-0">
                        <input className="form-control form-control-sm" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-link btn-sm" type="submit"><i className="material-icons">search</i></button>
                        </form>
                        <div className="col-auto align-self-center">
                        <button className="btn btn-sm btn-outline-template ml-2">
                            <i className="material-icons md-18">cloud_download</i> Export
                        </button>
                        </div>
                    </div>
                    </div>
                    <div className="card-body">
                    <table className="table datatable display responsive w-100">
                        <thead>
                        <tr>
                            <th className="all">Order ID</th>
                            <th className="min-tablet">Order From</th>
                            <th className="min-desktop">Date</th>
                            <th>Amount</th>
                            <th>Payment Method</th>
                            <th>Transaction ID</th>
                            <th>Status</th>
                            <th className="min-desktop">Order Receiver </th>
                            <th />
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>ID0001</td>
                            <td>
                            <div className="media">
                                <figure className="mb-0 avatar avatar-40 mr-2">
                                <img src={userimage3} alt="AdminuxPRO" />
                                </figure>
                                <div className="media-body">
                                <p className="mb-0 template-inverse">John Alexandar</p>
                                <p className="text-template-primary-light">Sydney, Australia</p>
                                </div>
                            </div>
                            </td>
                            <td>12-12-2019</td>
                            <td>
                                <span className="text-success font-weight-bold">$1,299.00</span>
                            </td>
                            <td>
                                <span className="badge badge-info">Credit Card</span>
                            </td>
                            <td>
                                <span className="text-muted">TXN_123456789</span>
                            </td>
                            <td>
                            <div className="btn-success btn btn-sm">Accepted</div>
                            </td>
                            <td>
                            <div className="media">
                                <figure className="mb-0 avatar avatar-40 mr-2">
                                <img src={userimage1}  alt="AdminuxPRO" />
                                </figure>
                                <div className="media-body">
                                <p className="mb-0 template-inverse">Sonya Wilson</p>
                                <p className="text-template-primary-light">Aquaguaard Manager</p>
                                </div>
                            </div>
                            </td>
                            <td>
                            <Dropdown className="dropdown">
                                    <Dropdown.Toggle className="btn dropdown-toggle btn-sm btn-link" type="button" variant="link">
                                    <i className="material-icons">more_horiz</i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu dropdown-menu-sm dropdown-menu-right" alignRight>
                                    <a className="dropdown-item" href="#">View Details</a>
                                    <a className="dropdown-item" href="#">Download Invoice</a>
                                    <a className="dropdown-item text-danger" href="#">Report Issue</a>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                        <tr>
                            <td>ID0002</td>
                            <td>
                            <div className="media">
                                <figure className="mb-0 avatar avatar-40 mr-2">
                                A
                                </figure>
                                <div className="media-body">
                                <p className="mb-0 template-inverse">Anthony Desouza</p>
                                <p className="text-template-primary-light">Sydney, Australia</p>
                                </div>
                            </div>
                            </td>
                            <td>12-12-2019</td>
                            <td>
                                <span className="text-success font-weight-bold">$899.00</span>
                            </td>
                            <td>
                                <span className="badge badge-warning">PayPal</span>
                            </td>
                            <td>
                                <span className="text-muted">TXN_987654321</span>
                            </td>
                            <td>
                            <div className="btn-primary btn btn-sm">Accepted</div>
                            </td>
                            <td>
                            <div className="media">
                                <figure className="mb-0 avatar avatar-40 mr-2">
                                <img src={userimage2} alt="AdminuxPRO" />
                                </figure>
                                <div className="media-body">
                                <p className="mb-0 template-inverse">Anjali Govind</p>
                                <p className="text-template-primary-light">Aquaguaard Manager</p>
                                </div>
                            </div>
                            </td>
                            <td>
                            <Dropdown className="dropdown">
                                    <Dropdown.Toggle className="btn dropdown-toggle btn-sm btn-link" type="button" variant="link">
                                    <i className="material-icons">more_horiz</i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu dropdown-menu-sm dropdown-menu-right" alignRight>
                                    <a className="dropdown-item" href="#">View Details</a>
                                    <a className="dropdown-item" href="#">Download Invoice</a>
                                    <a className="dropdown-item text-danger" href="#">Report Issue</a>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                        <tr>
                            <td>ID0003</td>
                            <td>
                            <div className="media">
                                <figure className="mb-0 avatar avatar-40 mr-2">
                                M
                                </figure>
                                <div className="media-body">
                                <p className="mb-0 template-inverse">Mark Zukarburgs</p>
                                <p className="text-template-primary-light">Sydney, Australia</p>
                                </div>
                            </div>
                            </td>
                            <td>12-12-2019</td>
                            <td>
                                <span className="text-success font-weight-bold">$1,299.00</span>
                            </td>
                            <td>
                                <span className="badge badge-info">Credit Card</span>
                            </td>
                            <td>
                                <span className="text-muted">TXN_123456789</span>
                            </td>
                            <td>
                            <div className="btn-warning btn btn-sm">Accepted</div>
                            </td>
                            <td>
                            <div className="media">
                                <figure className="mb-0 avatar avatar-40 mr-2">
                                <img src={userimage3}  alt="AdminuxPRO" />
                                </figure>
                                <div className="media-body">
                                <p className="mb-0 template-inverse">Syam Prashad</p>
                                <p className="text-template-primary-light">Aquaguaard Manager</p>
                                </div>
                            </div>
                            </td>
                            <td>
                            <Dropdown className="dropdown">
                                    <Dropdown.Toggle className="btn dropdown-toggle btn-sm btn-link" type="button" variant="link">
                                    <i className="material-icons">more_horiz</i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu dropdown-menu-sm dropdown-menu-right" alignRight>
                                    <a className="dropdown-item" href="#">View Details</a>
                                    <a className="dropdown-item" href="#">Download Invoice</a>
                                    <a className="dropdown-item text-danger" href="#">Report Issue</a>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                        <tr>
                            <td>ID0004</td>
                            <td>
                            <div className="media">
                                <figure className="mb-0 avatar avatar-40 mr-2">
                                <img src={userimage3}  alt="AdminuxPRO" />
                                </figure>
                                <div className="media-body">
                                <p className="mb-0 template-inverse">John Doe</p>
                                <p className="text-template-primary-light">Sydney, Australia</p>
                                </div>
                            </div>
                            </td>
                            <td>12-12-2019</td>
                            <td>
                                <span className="text-success font-weight-bold">$899.00</span>
                            </td>
                            <td>
                                <span className="badge badge-warning">PayPal</span>
                            </td>
                            <td>
                                <span className="text-muted">TXN_987654321</span>
                            </td>
                            <td>
                            <div className="btn-danger btn btn-sm">Accepted</div>
                            </td>
                            <td>
                            <div className="media">
                                <figure className="mb-0 avatar avatar-40 mr-2">
                                S
                                </figure>
                                <div className="media-body">
                                <p className="mb-0 template-inverse">Sonya Wilson</p>
                                <p className="text-template-primary-light">Aquaguaard Manager</p>
                                </div>
                            </div>
                            </td>
                            <td>
                            <Dropdown className="dropdown">
                                    <Dropdown.Toggle className="btn dropdown-toggle btn-sm btn-link" type="button" variant="link">
                                    <i className="material-icons">more_horiz</i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu dropdown-menu-sm dropdown-menu-right" alignRight>
                                    <a className="dropdown-item" href="#">View Details</a>
                                    <a className="dropdown-item" href="#">Download Invoice</a>
                                    <a className="dropdown-item text-danger" href="#">Report Issue</a>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                        <tr>
                            <td>ID0005</td>
                            <td>
                            <div className="media">
                                <figure className="mb-0 avatar avatar-40 mr-2">
                                M
                                </figure>
                                <div className="media-body">
                                <p className="mb-0 template-inverse">Mark Zukarburgs</p>
                                <p className="text-template-primary-light">Sydney, Australia</p>
                                </div>
                            </div>
                            </td>
                            <td>12-12-2019</td>
                            <td>
                                <span className="text-success font-weight-bold">$1,299.00</span>
                            </td>
                            <td>
                                <span className="badge badge-info">Credit Card</span>
                            </td>
                            <td>
                                <span className="text-muted">TXN_123456789</span>
                            </td>
                            <td>
                            <div className="btn-success btn btn-sm">Accepted</div>
                            </td>
                            <td>
                            <div className="media">
                                <figure className="mb-0 avatar avatar-40 mr-2">
                                <img src={userimage4}  alt="AdminuxPRO" />
                                </figure>
                                <div className="media-body">
                                <p className="mb-0 template-inverse">Sonya Wilson</p>
                                <p className="text-template-primary-light">Aquaguaard Manager</p>
                                </div>
                            </div>
                            </td>
                            <td>
                            <Dropdown className="dropdown">
                                    <Dropdown.Toggle className="btn dropdown-toggle btn-sm btn-link" type="button" variant="link">
                                    <i className="material-icons">more_horiz</i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu dropdown-menu-sm dropdown-menu-right" alignRight>
                                    <a className="dropdown-item" href="#">View Details</a>
                                    <a className="dropdown-item" href="#">Download Invoice</a>
                                    <a className="dropdown-item text-danger" href="#">Report Issue</a>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-4 ">
                <div className="card border-0 shadow-sm overflow-hidden mb-4">
                    <div className="card-header border-0 bg-none">
                    <div className="row">
                        <div className="col">
                        <p className="fs15">Activity Wall<br /><small className="text-template-primary-light">Most recent activities done</small></p>
                        </div>
                    </div>
                    </div>
                    <div className="card-body scroll-y h-400 p-0">
                    <div className="list-group timeline-list roudned-0">
                        <div className="list-group-item border-0">
                        <div className="row">
                            <div className="col mw-80 pr-0">
                            <p className="mb-0">11:20am</p>
                            </div>
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
                        </div>
                        <div className="list-group-item border-0">
                        <div className="row">
                            <div className="col mw-80 pr-0">
                            <p className="mb-0">08:45am</p>
                            </div>
                            <div className="col-auto">
                            <div className="timeline-circle-wrap">
                                <div className="timeline-circle border-danger"><span className="bg-danger" /></div>
                            </div>
                            </div>
                            <div className="col pl-0">
                            <p className="mb-0">Team Closer</p>
                            <p className="small text-template-primary-light mb-1">Maxartkiller Team</p>
                            </div>
                            <div className="col pl-0 align-self-center">
                            <figure className="avatar avatar-20"><img src={userimage1}  alt="AdminuxPRO" /></figure>
                            <figure className="avatar avatar-20"><img src={userimage2}  alt="AdminuxPRO" /></figure>
                            <figure className="avatar avatar-20"><img src={userimage3}  alt="AdminuxPRO" /></figure>
                            <figure className="avatar avatar-20"><img src={userimage4}  alt="AdminuxPRO" /></figure>
                            </div>
                        </div>
                        </div>
                        <div className="list-group-item border-0">
                        <div className="row">
                            <div className="col mw-80 pr-0">
                            <p className="mb-0">09:10am</p>
                            </div>
                            <div className="col-auto">
                            <div className="timeline-circle-wrap">
                                <div className="timeline-circle border-success"><span className="bg-success" /></div>
                            </div>
                            </div>
                            <div className="col pl-0">
                            <p className="mb-0">Final Amendments are done </p>
                            <p className="small text-template-primary-light">Creative visual hierarchy completed</p>
                            </div>
                        </div>
                        </div>
                        <div className="list-group-item border-0">
                        <div className="row">
                            <div className="col mw-80 pr-0">
                            <p className="mb-0">10:15am</p>
                            </div>
                            <div className="col-auto">
                            <div className="timeline-circle-wrap">
                                <div className="timeline-circle border-primary"><span className="bg-primary" /></div>
                            </div>
                            </div>
                            <div className="col pl-0">
                            <p className="mb-0">Vision deployment done</p>
                            <p className="small text-template-primary-light">UX designer worked upon timline</p>
                            </div>
                        </div>
                        </div>
                        <div className="list-group-item border-0">
                        <div className="row">
                            <div className="col mw-80 pr-0">
                            <p className="mb-0">11:20am</p>
                            </div>
                            <div className="col-auto">
                            <div className="timeline-circle-wrap">
                                <div className="timeline-circle border-primary"><span className="bg-primary" /></div>
                            </div>
                            </div>
                            <div className="col pl-0">
                            <p className="mb-0">Vision deployment done</p>
                            <p className="small text-template-primary-light">UX designer worked upon timline</p>
                            </div>
                        </div>
                        </div>
                        <div className="list-group-item border-0">
                        <div className="row">
                            <div className="col mw-80 pr-0">
                            <p className="mb-0">11:45am</p>
                            </div>
                            <div className="col-auto">
                            <div className="timeline-circle-wrap">
                                <div className="timeline-circle border-primary"><span className="bg-primary" /></div>
                            </div>
                            </div>
                            <div className="col pl-0">
                            <p className="mb-0">Vision deployment done</p>
                            <p className="small text-template-primary-light">UX designer worked upon timline</p>
                            </div>
                        </div>
                        </div>
                        <div className="list-group-item border-0">
                        <div className="row">
                            <div className="col mw-80 pr-0">
                            <p className="mb-0">12:00am</p>
                            </div>
                            <div className="col-auto">
                            <div className="timeline-circle-wrap">
                                <div className="timeline-circle border-info"><span className="bg-info" /></div>
                            </div>
                            </div>
                            <div className="col pl-0">
                            <p className="mb-0">Critical Bug resolved</p>
                            <p className="small text-template-primary-light">Cleared list for bugs and development.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                <div className="card border-0 shadow-sm mb-4">
                    <div className="card-header border-0 bg-none">
                    <div className="row">
                        <div className="col align-self-center">
                        <p className="fs15">Sales by Country<br /><small className="text-template-primary-light">Locate best popular country</small></p>
                        </div>
                    </div>
                    </div>
                    <div className="card-body pt-2">
                        <Vectormap></Vectormap>
                    <hr />
                    <div className="row">
                        <div className="col text-right">
                        <div className="row mb-2">
                            <div className="col pl-0">
                            <p>Sydeny <small className="d-block"><span className="text-template-primary">2548</span> <span className="text-danger">20%</span></small></p>
                            </div>
                            <div className="col-auto">
                            <i className="material-icons text-template-primary fs15 vm">album</i>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col pl-0">
                            <p>WestIndies <small className="d-block"><span className="text-template-primary">2548</span> <span className="text-success">15%</span></small></p>
                            </div>
                            <div className="col-auto">
                            <i className="material-icons text-template-primary fs15 vm">album</i>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col pl-0">
                            <p>Newzealand <small className="d-block"><span className="text-template-primary">2548</span> <span className="text-success">18%</span></small></p>
                            </div>
                            <div className="col-auto">
                            <i className="material-icons text-template-primary fs15 vm">album</i>
                            </div>
                        </div>
                        </div>
                        <div className="col">
                        <div className="row mb-2">
                            <div className="col-auto">
                            <i className="material-icons text-template-primary fs15 vm">album</i>
                            </div>
                            <div className="col pl-0">
                            <p>Brazil <small className="d-block"><span className="text-template-primary">2548</span> <span className="text-danger">20%</span></small></p>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-auto">
                            <i className="material-icons text-template-primary fs15 vm">album</i>
                            </div>
                            <div className="col pl-0">
                            <p>India <small className="d-block"><span className="text-template-primary">2548</span> <span className="text-success">15%</span></small></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-auto">
                            <i className="material-icons text-template-primary fs15 vm">album</i>
                            </div>
                            <div className="col pl-0">
                            <p>England <small className="d-block"><span className="text-template-primary">2548</span> <span className="text-success">18%</span></small></p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                <div className="card border-0 shadow-sm mb-4">
                    <div className="card-header border-0 bg-none">
                    <div className="row">
                        <div className="col align-self-center">
                        <p className="fs15">New Users<br /><small className="text-template-primary-light">Most recent new registrations</small></p>
                        </div>
                    </div>
                    </div>
                    <div className="card-body ">
                    <div className="row">
                        <div className="col-6 mb-4 text-center">
                        <figure className="avatar avatar-110 mb-3">
                            <button className="btn btn-sm text-danger user-like"><i className="material-icons md-18">favorite</i></button>
                            <img src={userimage2}  alt="AdminuxPRO" />
                        </figure>
                        <p className="mb-1">Anjali Govind</p>
                        <p className="text-template-primary-light">Team Lead</p>
                        </div>
                        <div className="col-6 mb-4 text-center">
                        <figure className="avatar avatar-110 mb-3">
                            <button className="btn btn-sm text-danger user-like"><i className="material-icons md-18">favorite</i></button>
                            <img src={userimage3}  alt="AdminuxPRO" />
                        </figure>
                        <p className="mb-1">Sonya Wilson</p>
                        <p className="text-template-primary-light">Marketing Lead</p>
                        </div>
                        <div className="col-6 text-center">
                        <figure className="avatar avatar-110 mb-3">
                            <button className="btn btn-sm text-danger user-like"><i className="material-icons md-18">favorite</i></button>
                            <img src={userimage4}  alt="AdminuxPRO" />
                        </figure>
                        <p className="mb-1">Syam Prashad</p>
                        <p className="text-template-primary-light">Production Manager</p>
                        </div>
                        <div className="col-6 text-center">
                        <figure className="avatar avatar-110 mb-3">
                            <button className="btn btn-sm text-danger user-like"><i className="material-icons md-18">favorite</i></button>
                            <img src={userimage5}  alt="AdminuxPRO" />
                        </figure>
                        <p className="mb-1">John Doe</p>
                        <p className="text-template-primary-light">CEO, Aquaagaurd</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* Main container ends */}
            </div>

        );
    }
}

export default Networking;