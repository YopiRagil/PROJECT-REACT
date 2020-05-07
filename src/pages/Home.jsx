import React, { Component } from "react";
// import { withRouter } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  doSearch,
  changeInputSearch,
  filteringProductCategory,
} from "../store/actions/productAction";

// import { logoutUser } from "../store/actions/userAction";
import {
  checkedFilter,
  changeInputFilter,
} from "../store/actions/filterAction";

import Header from "../component/Header";
import Banner from "../component/Banner";
import ProductResult from "../component/ProductResult";
import Sidebar from "../component/Sidebar";

class Home extends Component {
  componentDidMount() {
    this.props.getImg();
  }
  render() {
    console.log("cek2", this.props.img.jumbotronImg);
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
            <Sidebar
              listProduct={this.props.product.listProduct}
              data={this.props.product}
              filter={this.props.filterState}
              checkedFilter={(e) => this.props.checkedFilter(e)}
              changeInputFilter={(e) => this.props.changeInputFilter(e)}
              filterProduct={(data, filter, minPrice, maxPrice, rate) =>
                filteringProductCategory(
                  this.props.data,
                  this.props.filter,
                  this.props.minPrice,
                  this.props.maxPrice,
                  this.props.rate
                )
              }
              {...this.props}
            />
          </div>
          {/* {this.props.img.} */}
          <div className="col-sm-8">
            <Banner img={this.props.img} {...this.props} />
            <ProductResult />
            <ProductResult />
            <ProductResult />
          </div>
        </div>
      </div>
      // console.warn("props", this.props);
    );
  }
}
const mapStateToProps = (state) => {
  return {
    filterState: state.filter,
    img: state.product.jumbotronImg,
    product: state.product,
    data: state.product.listProduct,
    filter: state.filter.filter,
    minPrice: state.filter.minPrice,
    maxPrice: state.filter.maxPrice,
    rate: state.filter.rating,
  };
};

const mapDispatchToProps = {
  getImg: (e) => doSearch(e),
  checkedFilter: (e) => checkedFilter(e),
  changeInputFilter: (e) => changeInputFilter(e),
  changeInputSearch: (e) => changeInputSearch(e),
  filteringProductCategory: (data, filter, minPrice, maxPrice, rate) =>
    filteringProductCategory(data, filter, minPrice, maxPrice, rate),
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
