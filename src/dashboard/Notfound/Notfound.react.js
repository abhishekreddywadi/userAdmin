import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import teamimg from "../../assets/img/404.jpg";

var sectionStyle = {
  backgroundImage: "url(" + teamimg + ")"
};
class Notfound extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row login-row-height" style={{ minHeight: "calc(100vh - 200px)" }}>
        <div class="background opac" style={sectionStyle}></div>

        <div className="col-8 col-md-6 col-lg-5 col-xl-4 mx-auto align-self-center text-center">
          <h1 className="display-0 mb-0">404</h1>
          <h1 className="font-weight-light mt-0">Page not found!</h1>
          <p>There might be some issue with Typing or URL</p>
          <br />
          <NavLink to="/production" className="btn btn-outline-light">
            Go back to Dashboard
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Notfound;
