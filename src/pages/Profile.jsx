import React, { Component } from "react";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../store/actions/userAction";

class Profile extends Component {
  goHome = () => {
    this.props.history.push("/");
  };

  logOut = async () => {
    // console.warn("cek propslogout", this.props);
    await this.props.logoutUser();
    this.props.history.push("/signin");
  };

  render() {
    if (!this.props.dataUser.login_status) {
      return (
        <Redirect
          to={{
            pathname: "/signin",
            state: { message: "Anda harus login terlebih dahulu!" },
          }}
        />
      );
    } else {
      return (
        <React.Fragment>
          <div class="page-wrapper bg-gra-02 profile font-poppins">
            <div class="card-container">
              <span class="pro">PRO</span>
              <img src={require("../assets/images/ava.jpeg")} alt="user" />
              <h3>Fazlur Rahman</h3>
              <h6>Malang</h6>
              <p>Full Stack Developer</p>
              <div class="buttons mb-5">
                <button class="primary" onClick={this.goHome}>
                  Home
                </button>
                <button class="primary ghost" onClick={this.logOut}>
                  Logout
                </button>
              </div>
              {/* <div class="skills">
        <h6>Skills</h6>
        <ul>
          <li>Python</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>MySQL</li>
          <li>Django</li>
          <li>Rest API</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node</li>
        </ul>
      </div> */}
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}
const mapStateToProps = (state) => {
  return {
    dataUser: state.user,
  };
};
const mapDispatchToProps = {
  logoutUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
