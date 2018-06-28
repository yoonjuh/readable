import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import { getAllCategory } from "./../redux/actions";
import Navigator from "./Navigator";
import RadioButton from "./RadioButton";

class Home extends Component {
  state = { selectedValue: "date" };
  componentDidMount() {
    this.props.getAllCategory();
  }
  onChange = e => {
    this.setState({ selectedValue: e.target.value });
  };
  render() {
    return (
      <HomeContainer>
        <Navigator categories={this.props.category.category} />

        <RadioBTNContainer onChange={this.onChange}>
          <div style={{ minHeight: "2rem", fontSize: "1.4rem" }}>SortBy</div>
          <RadioButton
            selectedValue={this.state.selectedValue}
            onChange={this.onChange}
          />
        </RadioBTNContainer>
      </HomeContainer>
    );
  }
}

export default connect(
  state => ({
    category: state.category
  }),
  { getAllCategory }
)(Home);

Home.propTypes = {
  category: PropTypes.object.isRequired
};
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  justify-content: center;
  align-items: center;
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
