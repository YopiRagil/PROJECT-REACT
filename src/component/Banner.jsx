import React from "react";
import PropTypes from "prop-types";

const Banner = (props) => {
  return (
    <div className="rounded float-right container mt-5" id="banner-div">
      <img src={require("../assets/images/newyork.jpeg")} alt="city banner" id="city-banner" />
      <div className="text-block">
        <h1 className="display-4" id="city-banner-name">New York</h1>
      </div>
    </div>
  )
}
export default Banner;