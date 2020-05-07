import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { doSearch, changeInputSearch } from "../store/actions/productAction";

// import { logoutUser } from "../store/actions/userAction";

import Header from "../component/Header";
import Banner from "../component/Banner";
import ProductResult from "../component/ProductResult";
import Sidebar from "../component/Sidebar";

class Home extends Component {
  componentDidMount() {
    this.props.getImg();
  }
  render() {
    {
      console.log("cek2", this.props.img.jumbotronImg);
    }
    return (
      <div>
        <Header
          doSearch={(event) => this.props.changeInputSearch(event)}
          {...this.props}
        />
        <div className="text-center mt-4" id="recommendation-title">
          <h1>OUR RECOMMENDATIONS</h1>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <Sidebar />
          </div>
          {/* {this.props.img.} */}
          <div className="col-sm-8">
            <Banner {...this.props} />
            <ProductResult />
            <ProductResult />
            <ProductResult />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    img: state.product,
  };
};
const mapDispatchToProps = {
  getImg: (e) => doSearch(e),
  changeInputSearch: (e) => changeInputSearch(e),
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
