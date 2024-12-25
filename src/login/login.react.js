import React from "react";
import {
    Route,
    BrowserRouter as Router,
    NavLink
} from "react-router-dom";

import logoimg from '../assets/img/logoicon.svg';
import teamimg from '../assets/img/team.jpg';

var sectionStyle = {
    backgroundImage: 'url(' + teamimg + ')'
};

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: true };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({
            isLoggedIn: true
        });    
        this.props.onLogin(this.state.isLoggedIn);    
    }

    render() {
        return (
            <div className="wrapper">
                <div className="content shadow-sm position-relative">
                    <header className="header">
                        {/* Fixed navbar */}
                        <nav className="container-fluid">
                            <div className="row">
                                <div className="col align-self-center">
                                    <a className="logo text-white">
                                        <img src={logoimg} alt="adminux pro" className="logo-icon" />
                                        <div className="logo-text">
                                            <h5 className="fs22 mb-0">
                                                AdminUX <sup className="badge badge-danger">PRO</sup>
                                            </h5>
                                            <p className="text-uppercase fs11">Admin Dashboard</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col text-right align-self-center">
                                    <a className="btn btn-sm btn-primary text-uppercase">Register</a>
                                </div>
                            </div>
                        </nav>
                    </header>
                    <div className="background opac blur" style={sectionStyle}>
                    </div>
                    {/* Main container starts */}
                    <div className="container main-container" id="main-container">
                        <div className="row login-row-height" style={{ minHeight: "calc(100vh - 300px)" }}>
                            <div className="col-12 col-md-6 col-lg-5 col-xl-4 mx-auto align-self-center">
                                <div className="card border-0 shadow-lg blur">
                                    <div className="card-body py-5">
                                        <h5 className="font-weight-light mb-1 text-mute-high">
                                            Welcome, </h5>
                                        <h3 className="font-weight-normal mb-4">Please Sign In</h3>
                                        <div className="card  mb-2 overflow-hidden">
                                            <div className="card-body p-0">
                                                <label htmlFor="inputEmail" className="sr-only">Email address </label>
                                                <input type="email" id="inputEmail" className="form-control rounded-0 border-0" placeholder="Email address" required autoFocus />
                                                <hr className="my-0" />
                                                <label htmlFor="inputPassword" className="sr-only">
                                                    Password </label>
                                                <input type="password" id="inputPassword" className="form-control rounded-0 border-0" placeholder="Password" required />
                                            </div>
                                        </div>
                                        <div className="my-3 row">
                                            <div className="col-12 col-md py-1">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck1" defaultChecked />
                                                    <label className="custom-control-label" htmlFor="customCheck1" >Remember Me</label>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md py-1 text-left text-md-right">
                                                <a href='#' onClick={e => e.preventDefault()} className="template-primary" >Forgot Password? </a>
                                            </div>
                                        </div>
                                        <div className="mb-4">                                             
                                            <button onClick={this.handleClick} className=" btn btn-primary btn-block" >Sign In <i className="material-icons md-18">arrow_forward</i> </button>
                                        </div>
                                        <div>
                                            <p className="text-mute"> Do not have account yet?<br />Please <NavLink to="/register" className="text-template-primary-light"> Sign up</NavLink> here.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Main container ends */}
                </div>
                <footer className="footer" style={{ marginTop: "-58px" }}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-md text-center text-md-left align-self-center">
                                <p>All rights reserved by <a href='#' onClick={e => e.preventDefault()}>Maxartkiller</a></p>
                            </div>
                            <div className="col-12 col-md-auto text-center text-md-right">
                                <ul className="nav justify-content-center justify-md-content-end">
                                    <li className="nav-item">
                                        <a className="nav-link active" href='#' onClick={e => e.preventDefault()}>Terms of use</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href='#' onClick={e => e.preventDefault()}>Privacy Policy</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href='#' onClick={e => e.preventDefault()}>Contact us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* wrapper ends */}
            </div>
        );
    }
}

export default Login;
