import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import { getAllCategory } from "./../redux/actions";
import Navigator from "./Navigator";
import RadioButton from "./RadioButton";
import ByCategory from "./ByCategory";

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <div className="head-section-container">
          <Navigator categories={this.props.category} />

          <RadioBTNContainer onChange={this.onChange}>
            <div style={{ minHeight: "2rem", fontSize: "1.4rem" }}>SortBy</div>
            <RadioButton
              sortMethod={this.props.sortMethod}
              sortMethodToggler={this.props.sortMethodToggler}
            />
          </RadioBTNContainer>
        </div>
        <div className="default-posts-container">
          <ByCategory {...this.props} />
        </div>
      </HomeContainer>
    );
  }
}

export default connect(
  state => ({
    category: state.category,
    sortMethod: state.sortMethod
  }),
  { getAllCategory }
)(Home);

Home.propTypes = {
  category: PropTypes.array.isRequired,
  sortMethod: PropTypes.string.isRequired,
  sortMethodToggler: PropTypes.func.isRequired
};
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  justify-content: center;
  align-items: center;
  height: 100%;

  .head-section-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .default-posts-container {
    width: 100%;
  }
`;
const RadioBTNContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 4rem;
  justify-content: flex-start;
  align-items: center;

  .radio-container {
    display: flex;
  }
  .radio-label {
    display: flex;
    align-items: center;
    margin: auto 0.5rem;
  }
  .radio-text {
    font-size: 1.4rem;
    margin: auto 0.3rem;
  }
`;
