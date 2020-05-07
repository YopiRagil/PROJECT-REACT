import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
// import { logoutUser } from "../store/actions/userAction";
import Header from "../component/Header"

class Home extends Component {
    render() {
        return (
            <Header />
        )
    }
}

export default withRouter(Home);
