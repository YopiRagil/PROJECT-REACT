import React, { Component } from "react";
import { connect } from "react-redux";

import { doLogin, changeInputUser } from "../store/actions/userAction";

class SignIn extends Component {
  postLogin = async () => {
    await this.props.doLogin();
    const login_status = this.props.login;
    if (login_status) {
      this.props.history.push("/profile");
    }
  };

  render() {
    const message = this.props.location.state
      ? this.props.location.state.message
      : "";

    return (
      <React.Fragment>
        <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins signin">
          <div className="wrapper wrapper--w780">
            <div className="card card-3">
              <div className="card-heading"></div>
              <div className="card-body">
                <h2 className="title">Sign In</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="input-group">
                    <input
                      className="input--style-3"
                      type="text"
                      placeholder="Username"
                      name="userName"
                      onChange={(e) => this.props.changeInput(e)}
                    />
                  </div>
                  <div className="input-group">
                    <input
                      className="input--style-3"
                      type="password"
                      placeholder="Password"
                      name="passWord"
                      onChange={(e) => this.props.changeInput(e)}
                    />
                  </div>
                  <div className="p-t-10">
                    <button
                      className="btn btn--pill btn--green"
                      onClick={() => this.postLogin()}
                    >
                      Sign In
                    </button>
                    <p style={{ color: "red", marginTop: "10px" }}>{message}</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userName: state.user.userName,
    passWord: state.user.passWord,
    login: state.user.login_status,
  };
};

const mapDispatchToProps = {
  changeInput: (e) => changeInputUser(e),
  doLogin: doLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
