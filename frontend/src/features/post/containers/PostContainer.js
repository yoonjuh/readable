import React from 'react';
import styled from 'styled-components';
import {graphql} from 'react-apollo';
import {GET_ALL_POST} from '../../../documents/query/post';
import Post from '../components/Post';

const PostBox = styled.div`
  border: 0.5rem red solid;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
`;

const PostContainer = ({loading, posts}) => {
  if (loading) return <div>Loading...</div>;
  console.log(posts);
  return (
    <PostBox>
      {posts && posts.map(post => <Post key={post.id} post={post} />)}
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
