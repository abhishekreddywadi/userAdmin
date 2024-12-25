import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import Profiledropdown from "./components/profiledropdown/profiledropdown.react";
import Messages from "./components/Messages/Messages.react";
import Flags from "./components/Flags/Flags.react";
import Cart from "./components/Cart/Cart.react";
import Tasks from "./components/Tasks/Tasks.react";
import Quicklinks from "./components/Quicklinks/Quicklinks.react";

class Header extends Component {
  toggleSidebar() {
    document.body.classList.toggle("sidemenu-open");
  }
  render() {
    return (
      <div className="row header">
        <div className="container-fluid " id="header-container">
          <div className="row">
            <nav className="navbar col-12 navbar-expand ">
              <button
                className="menu-btn btn btn-link btn-sm d-none d-md-block"
                type="button"
                onClick={this.toggleSidebar}
              >
                <i className="material-icons">menu</i>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                {/* search starts */}
                <form className="form-inline search mr-auto">
                  <Form.Control type="search" placeholder="Search" size="sm" />
                  <Button variant="link" size="sm" type="submit">
                    <i className="material-icons">search</i>
                  </Button>
                </form>
                <div className="navbar-nav ml-auto">
                  <Flags />
                  <Quicklinks />
                  <Cart />
                  <Tasks />
                  <Messages />
                  <Profiledropdown />
                </div>
                <button
                className="menu-btn btn btn-link btn-sm d-md-none"
                type="button"
                onClick={this.toggleSidebar}
              >
                <i className="material-icons">menu</i>
              </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
