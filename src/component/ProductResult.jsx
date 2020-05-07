import React from "react";
import PropTypes from "prop-types";

const ProductResult = (props) => {
  return (
    <div className="rounded float-right container mt-5 mb-5" id="product-results-div">
      <div className="row">

        <div className="col-sm-4">
          <img src={require("../assets/images/product_pic.jpg")} alt="product" id="product-image" />
        </div>
        <div className="col-sm-7">
          <p className="display-4" id="product-title">Carhartt Men's Quilted Flannel Lined Duck Active Jacket </p>
          <table class="table table-borderless">
            <tbody>
              <tr>
                <th scope="row">Price</th>
                <td>65 USD</td>
              </tr>
              <tr>
                <th scope="row">Rating</th>
                <td>4.6</td>
              </tr>
              <tr>
                <th scope="row">Page</th>
                <td colspan="2"><a href="/" target="blank">See details here</a></td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

export default ProductResult;