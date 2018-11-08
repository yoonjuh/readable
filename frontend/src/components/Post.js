import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import {Mutation} from 'react-apollo';
import {DELETE_POST} from '../documents/mutation/post';
import {GET_ALL_POST} from '../documents/query/post';
import DeleteButton from './DeleteButton';
import Time from './Time';
import {ThumbsUp, ThumbsDown} from './Thumbs';
import Vote from './Vote';

// white-space: ${({ renderFrom }) => (renderFrom === "detail" ? "" : "nowrap")};
// overflow: ${({ renderFrom }) => (renderFrom === "detail" ? "" : "hidden")};
// text-overflow: ${({ renderFrom }) =>
//   renderFrom === "detail" ? "" : "ellipsis"};
//   overflow-wrap: ${({ renderFrom }) =>
//     renderFrom === "detail" ? "break-all" : ""};

const PostContainer = styled.div`
  background-color: #ffffff;
  flex: 1;
  border: 0.12rem red dotted;
  position: relative;
  display: flex;
  flex-warp: wrap;
  flex-direction: column;
  padding: 1rem 2rem;
  margin: 0.5rem 0;
  white-wrap: break-word;
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.div`
  color: #ff292c;
  font-size: 3.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Author = styled.div`
  font-size: 1.4rem;
  color: #6b7485;
`;
const Contents = styled.div`
  font-size: 1.8rem;
  margin-top: 1.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const KeyIndicator = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
`;
const CategoryIcon = styled.div`
  margin-right: 0.7rem;
  width: min-content;
  font-size: 1.3rem;
  background-color: #4169e1;
  color: white;
  border-radius: 0.3rem;
  padding: 0.2rem 0.5rem;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #dc3545;

  :hover {
    text-decoration: none;
    font-weight: bold;
    transition: all 0.2s;
  }

  :focus,
  :visited,
  :link,
  :active {
    text-decoration: none;
  }
`;

const Post = ({
  post: {id, category, voteScore, title, author, body, createdAt, updatedAt},
  renderFrom,
}) => (
  <Mutation
    mutation={DELETE_POST}
    update={(cache, {data}) => {
      const origin = cache.readQuery({query: GET_ALL_POST});
      const newPosts = origin.posts.filter(post => post.id !== id);

      cache.writeQuery({
        query: GET_ALL_POST,
        data: {posts: [...newPosts]},
      });
    }}
  >
    {(deletePost, {data}) => (
      <PostContainer renderFrom={renderFrom}>
        <TitleWrapper>
          <Title>
            <StyledLink to={`/${id}`}>{title}</StyledLink>
          </Title>
          <DeleteButton onClick={() => deletePost({variables: {id}})} />
        </TitleWrapper>
        <Author>{`Posted by ${author}`}</Author>
        <KeyIndicator>
          <CategoryIcon>{category}</CategoryIcon>
          <Vote voteScore={voteScore} />
        </KeyIndicator>
        <Contents>{body}</Contents>

        <Time date={updatedAt} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '2rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ThumbsUp />
            <ThumbsDown />
          </div>
        </div>
      </PostContainer>
    )}
  </Mutation>
);

export default Post;
