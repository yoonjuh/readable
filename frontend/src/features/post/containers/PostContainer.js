import React from 'react';
import styled from 'styled-components';
import {graphql} from 'react-apollo';
import Loader from 'react-loader-spinner';
import {GET_ALL_POST} from '../../../documents/query/post';

import Post from '../Post';

const PostBox = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

const PostContainer = ({loading, posts = [], sortBy}) => {
  if (loading) {
    return (
      <PostBox
        style={{
          justifyContent: 'center',
          minHeight: '100rem',
          minWidth: '100rem',
          padding: '10rem',
        }}
      >
        <Loader type="Ball-Triangle" color="#A6ACAF" width="50" height="50" />
      </PostBox>
    );
  }

  return (
    <PostBox>
      {sortBy === 'trendy'
        ? posts
            .sort((a, b) => b.voteScore - a.voteScore)
            .map(post => <Post key={post.id} post={post} />)
        : posts
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
            .map(post => <Post key={post.id} post={post} />)}
    </PostBox>
  );
};

export default graphql(GET_ALL_POST, {
  props: ({data}) => ({
    loading: data.loading,
    posts: data.posts,
  }),
  fetchPolicy: 'cache-and-network',
})(PostContainer);
