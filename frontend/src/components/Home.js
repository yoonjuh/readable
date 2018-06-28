import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllCategory } from "./../redux/actions";
import Navigator from "./Navigator";

class Home extends Component {
  componentDidMount() {
    this.props.getAllCategory();
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "70%",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Navigator categories={this.props.category.category} />
        <div>All Categories</div>
      </div>
    );
  }
}

export default connect(
  state => ({
    category: state.category
  }),
  { getAllCategory }
)(Home);
