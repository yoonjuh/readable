import React from 'react';
import styled from 'styled-components';

const CloseButton = styled.div`
  color: #b4b4b4;
  font-weight: bold;
  padding-left: 2rem;
  font-size: 2rem;

  :hover {
    color: #dc3545;
    transition-duration: 0.7s;
  }
`;
const DeleteButton = ({onClick}) => (
  <CloseButton onClick={onClick}>×</CloseButton>
);

export default DeleteButton;
