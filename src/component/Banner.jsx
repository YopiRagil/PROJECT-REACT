import React from "react";
import PropTypes from "prop-types";

const Banner = (props) => {
  return (
    <section>
      <div className="rounded float-right container mt-5" id="banner-div">
        <img
          className="img-fluid"
          src={require("../assets/images/newyork.jpeg")}
          alt="city banner"
          id="city-banner"
        />
        <div className="text-block">
          <h1 className="display-5" id="city-banner-name">
            New York
          </h1>
        </div>
      </div>
    </section>
  );
};
export default Banner;
