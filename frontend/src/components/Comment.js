import React from 'react';
import styled from 'styled-components';
import DeleteButton from './DeleteButton';
import Time from './Time';
import Vote from './Vote';
import {ThumbsUp, ThumbsDown} from './Thumbs';

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 1rem;
  border: 0.12rem red dotted;
  margin-bottom: 1rem;
`;
const CommentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CommentBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.9rem;
`;
const Author = styled.div`
  margin-top: 0.3rem;
  margin-right: 1.5rem;
  font-size: 1.8rem;
`;
const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CommentVote = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;
const ThumbsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Comment = ({comment: {body, author, updatedAt, voteScore = 0}}) => (
  <CommentBox>
    <CommentInfo>
      <InfoContainer>
        <Author>{author}</Author>
        <Time date={updatedAt} />
      </InfoContainer>
      <DeleteButton onClick={() => {}} />
    </CommentInfo>
    <CommentBody>{body}</CommentBody>
    <CommentVote>
      <Vote voteScore={voteScore} />
      <ThumbsContainer>
        <ThumbsUp />
        <ThumbsDown />
      </ThumbsContainer>
    </CommentVote>
  </CommentBox>
);

export default Comment;
