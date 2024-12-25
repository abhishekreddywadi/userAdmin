import React, {Component} from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Login from './login/login.react';
import Dashboard from './dashboard/dashboard.react';


//import logo from './assets/img/logoicon.svg';
import './assets/vendor/material-icons/material-icons.css';
//import './assets/vendor/flags/css/flag-icon.min.css';
import './assets/scss/style-darkblue-dark.scss';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  onLogin(login) {
    this.setState({ isLoggedIn: login });
  }
  render() {
    return (
      <Router basename={`${process.env.PUBLIC_URL}`}>
      {!this.state.isLoggedIn ? <Login onLogin={this.onLogin.bind(this)}></Login> : null}
      {this.state.isLoggedIn ? <Dashboard></Dashboard> : null}
      </Router>
    );
  }
}

export default App;