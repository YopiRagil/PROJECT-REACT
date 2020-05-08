import React, { Component } from "react";
// import { withRouter } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  doSearch,
  changeInputSearch,
  filteringProductCategory,
  getListProduct,
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
    console.warn("props data", this.props.data);

    let listProduct = this.props.data;
    const listProductFilter = this.props.data.filter((item) => {
      if (item.title.toLowerCase().includes(...this.props.filter)) {
        return item;
      }
      return false;
    });

    if (this.props.filter.length !== 0) {
      listProduct = listProductFilter;
    }
    if (this.props.rate) {
      listProduct = listProduct.filter((item) => {
        if (item.rating >= this.props.rate) {
          return item;
        }
        return false;
      });
    }

    if (this.props.minPrice && this.props.maxPrice) {
      listProduct = listProduct.filter((item) => {
        // console.log("harga", item.price.substr(1));
        if (
          this.props.minPrice <= +item.price.slice(1) &&
          +item.price.slice(1) <= this.props.maxPrice
        ) {
          return item;
        }
        return false;
      });
    }
    return (
      <div>
        <Header
          getList={(keyword) => getListProduct(keyword)}
          doSearch={(event) => this.props.changeInputSearch(event)}
          {...this.props}
        />
        <div className="text-center mt-4" id="recommendation-title">
          <p style={{ fontWeight: "bolder", fontSize: "8vmin" }}>
            OUR RECOMMENDATIONS
          </p>
        </div>
       <div className="container-fluid">
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
          {this.props.product.search.length == 0 ? (
            <div className="col-sm-8">
              <Banner img={this.props.img} {...this.props} />
            </div>
          ) : (
            <div className="col-sm-8">
              <Banner img={this.props.img} {...this.props} />

              {listProduct.map((item, index) => (
                <ProductResult
                  title={listProduct[index].title}
                  imageUrl={listProduct[index].imageUrl}
                  price={listProduct[index].price}
                  rating={listProduct[index].rating}
                  detailPageURL={listProduct[index].detailPageURL}
                />
              ))}
              {/* <ProductResult />
              <ProductResult /> */}
            </div>
          )}
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
  getListProduct: (keyword) => getListProduct(keyword),
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
