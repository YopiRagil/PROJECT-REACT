import React, { Component } from "react";
import "../style/style.css";
import Search from "./search";
import ToolProfil from "./toolProfil";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="#">
            <img
              className="navbar-brand"
              src={require("../media/mlaku.png")}
              class="navbar-brand"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Search {...this.props} />
            <div className="ml-lg-auto mr-lg-5">
              <ToolProfil {...this.props} />
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
