import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import Home from "../components/Home";
import { setSortMethod } from "../redux/actions";

class SortingToggler extends Component {
  categoryToggler = e => {
    this.props.setSortMethod(e.target.value);
  };
  render() {
    return <Home sortMethodToggler={this.categoryToggler} />;
  }
}

export default connect(
  null,
  { setSortMethod }
)(SortingToggler);

SortingToggler.propTypes = {
  setSortMethod: PropTypes.func.isRequired
};
