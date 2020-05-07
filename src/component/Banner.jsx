import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { doSearch, changeInputSearch } from "../store/actions/productAction";

const Banner = (props) => {
  // componentDidMount = async () => {
  //   this.props.getImg();
  // };
  let imageJumbotron;
  // if (props.img.jumbotronImg.largeImageURL !== undefined) {
  console.log("cek weather", props.img.weather);
  // imageJumbotron = props.img.jumbotronImg.hits[0].largeImageURL;
  // }

  // render() {
  return (
    <div className="rounded float-right container mt-5" id="banner-div">
      {/* <Link value="bali" onClick={(e)=> this.props.asa(e)} */}
      <img
        className="img-fluid"
        // if ()
        src={props.img}
        alt="city banner"
        id="city-banner"
      />
      {/* </Link> */}
      <div className="text-block">
        <h1
          className="display-4"
          style={{ fontSize: "30px" }}
          id="city-banner-name"
        >
          {props.img.tags}
        </h1>
      </div>
    </div>
  );
};
// }

// const mapStateToProps = (state) => {
//   return {
//     img: state.product,
//   };
// };
export default Banner;

// export default Banner;
