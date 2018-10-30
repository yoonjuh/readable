import React, { Component } from "react";
import Styled from "styled-components";
import PropTypes from "prop-types";
import { compose, withState, withHandlers } from "recompose";
import CategoryNavigator from "./CategoryNavigator";
import NewPostButton from "./NewPostButton";
import Posts from "./Posts";

const EnhancedPostByCategory = compose(
  withState("currentCat", "setCategory", ""),
  withHandlers({
    categoryToggler: ({ setCategory }) => newCat => {
      setCategory(newCat);
    }
  })
)(({ currentCat, categoryToggler, categories = [], posts = [] }) => (
  <MainContainer>
    <NvaiContainer>
      <CategoryNavigator
        categories={categories}
        currentCat={currentCat}
        categoryToggler={categoryToggler}
      />
    </NvaiContainer>
    <NewPostButton />
    <Posts {...this.props} posts={posts} />
  </MainContainer>
));
export default EnhancedPostByCategory;

const MainContainer = Styled.div`
  max-width: 90%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
`;

const NvaiContainer = Styled.div`
  flex: 1;
`;

EnhancedPostByCategory.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired
};
