import React from "react";
import PropTypes from "prop-types";

const ProductResult = (props) => {
  return (
    <div class="card mb-3" style={{ maxWidth: "540px" }}>
      <div class="row no-gutters">
        <div class="col-md-4">
          <img
            src={require("../assets/images/product_pic.jpg")}
            class="card-img"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              Carhartt Men's Quilted Flannel Lined Duck Active Jacket
            </h5>
            <p class="card-text">Price : 65 USD</p>
            <p class="card-text">Rating : 4.6</p>
            <p class="card-text">Page : See detail Here</p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductResult;
