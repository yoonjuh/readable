import React from 'react';
import styled from 'styled-components';
import Comment from './Comment';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CommentContainer = ({comments}) => (
  <StyledContainer>
    {comments &&
      comments.map(comment => <Comment comment={comment} key={comment.id} />)}
  </StyledContainer>
);

export default CommentContainer;
