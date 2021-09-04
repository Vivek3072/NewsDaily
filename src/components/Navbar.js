import React, { Component } from "react";
import news from "../news.png";
// import PropTypes from 'prop-types'

export class Navbar extends Component {
  // static propTypes = {

  // }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img
                className="mx-2"
                src={news}
                alt="logo"
                style={{ width: "30px" }}
              />
              NewsDaily
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/"
                    tabIndex="-1"
                    aria-disabled="true"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
