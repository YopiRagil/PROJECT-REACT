import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
// import { logoutUser } from "../store/actions/userAction";
import Header from "../component/Header"
import Banner from "../component/Banner"
import ProductResult from "../component/ProductResult"

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="text-center mt-4" id="recommendation-title">
                    <h1>OUR RECOMMENDATIONS</h1>
                </div>
                <Banner />
                <ProductResult />
                <ProductResult />
                <ProductResult />
            </div>
        )
    }
}

export default withRouter(Home);
