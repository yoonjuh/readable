import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.7rem;
  border: none;
  padding: 3rem 0rem;
`;
const NewPostButton = styled.button`
  cursor: pointer;
  background-color: #3a5fcd;
  color: white;
  padding: 0.3rem 0.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  &:hover {
    background-color: #5478e4;
    transition: all 0.2s;
  }
`;

const Header = ({onClick = () => {}}) => (
  <HeaderContainer>
    <NewPostButton onClick={onClick}>New Post</NewPostButton>
    <div>login placeholder</div>
  </HeaderContainer>
);

export default Header;
