import React, { Component } from "react";
// import "../style/style.css";
import Search from "./Search";
import ToolProfil from "./ToolProfil";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light row">

        <div className="col-sm-1 mr-5">
          <a className="navbar-brand ml-lg-5" href="#">
            <img
              className="navbar-brand"
              src={require("../assets/images/mlaku.png")}
              class="navbar-brand"
              alt="logo"
              style={{ width: "15vmin" }}
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
        </div>

        <Search {...this.props} />
        <div className="ml-lg-auto mr-lg-5 col-sm-2">
          <ToolProfil {...this.props} />
        </div>

      </nav>
    );
  }
}

export default Header;
