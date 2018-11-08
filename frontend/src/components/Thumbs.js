import React from 'react';
import styled from 'styled-components';

const ThumbsUpButtom = styled.div`
  color: #4169e1;
  border: 0.1rem #4169e1 solid;
  border-radius: 0.3rem;
  width: min-content;
  padding: 0 0.5rem;
  margin-right: 1rem;

  :hover {
    background-color: #4169e1;
    color: white;
  }
`;
const Icon = styled.i`
  font-size: 2rem;
  padding-bottom: 0.3rem;
`;
const ThumbsDownButton = styled.div`
  border: 0.1rem grey solid;
  border-radius: 0.3rem;
  width: min-content;
  padding: 0 0.5rem;
  :hover {
    background-color: grey;
    color: white;
  }
`;

export const ThumbsUp = () => (
  <ThumbsUpButtom>
    <Icon className="far fa-thumbs-up" />
  </ThumbsUpButtom>
);

export const ThumbsDown = () => (
  <ThumbsDownButton>
    <Icon className="far fa-thumbs-down" />
  </ThumbsDownButton>
);
