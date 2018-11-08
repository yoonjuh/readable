import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import Post from './Post';

const PostsContainer = Styled.div`
  margin-top: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Posts = ({posts = [], renderFrom = ''}) => (
  <PostsContainer>
    {posts &&
      posts.map(post => (
        <Post post={post} key={post.id} renderFrom={renderFrom} />
      ))}
  </PostsContainer>
);
export default Posts;

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
