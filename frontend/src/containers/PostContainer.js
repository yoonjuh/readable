import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import PropTypes from "prop-types";
import { compose, withState, withHandlers, withStateHandlers } from "recompose";
import { isEmpty } from "ramda";
import CategoryNavigator from "../components/CategoryNavigator";
import NewPostButton from "../components/NewPostButton";
import Posts from "../components/Posts";

const PostContainer = ({ categoryToggler, categories, posts }, ...props) => {
  const [currentCat, setCurrentCat] = useState("all");
  const [sortedPosts, sortPost] = useState([]);
  useEffect(
    () => {
      if (currentCat === "all") {
        const newPosts = posts.filter(post => post.category === currentCat);
        sortPost(newPosts);
      } else {
        const newPosts = posts.filter(post => post.category === currentCat);
        sortPost(newPosts);
      }
    },
    [currentCat]
  );

  return (
    <MainContainer>
      <NvaiContainer>
        <CategoryNavigator
          categories={categories}
          currentCat={currentCat}
          categoryToggler={setCurrentCat}
        />
      </NvaiContainer>
      <NewPostButton />
      <Posts posts={isEmpty(sortedPosts) ? posts : sortedPosts} />
    </MainContainer>
  );
};
export default PostContainer;

const MainContainer = Styled.div`
  padding: 0rem 3rem;
  max-width: 100%;
  min-width: 100%;
  max-height: 100%;
  margin: 0rem 1rem;
  display: flex;
  flex-direction: column;
`;

const NvaiContainer = Styled.div`
  flex: 1;
`;

PostContainer.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired
};
