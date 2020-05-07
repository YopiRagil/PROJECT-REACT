import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
// import { logoutUser } from "../store/actions/userAction";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Sidebar />
      </React.Fragment>
    );
  }
}

export default withRouter(Home);
