import React from 'react';
import styled from 'styled-components';

const VoteScore = styled.div`
  display: flex;
  justifycontent: center;
  align-items: center;
  width: min-content;
  font-size: 1.3rem;
  background-color: ${({voteScore}) => (voteScore >= 10 ? '#dc3545' : 'gray')};
  color: white;
  border-radius: 0.3rem;
  padding: 0.2rem 0.5rem;
`;
const VoteScoreNumber = styled.div`
  color: #ffc900;
  margin-left: 0.3rem;
  font-size: 1.3rem;
`;

const Vote = ({voteScore}) => (
  <VoteScore voteScore={voteScore}>
    {'Vote'}
    <VoteScoreNumber>
      {`${voteScore < 0 ? '-' : ''}${voteScore}`}{' '}
    </VoteScoreNumber>
  </VoteScore>
);
export default Vote;
