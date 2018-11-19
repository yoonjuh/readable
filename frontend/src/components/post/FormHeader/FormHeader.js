import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem;
  background-color: #17202a;
`;
const Icon = styled.i`
  padding: 0rem 1rem;
  font-size: 4rem;
  justify-content: center;
  align-items: center;
  /* border: 0.1rem red solid; */
  color: white;
`;
const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
`;
const TitleInput = styled.input`
  font-size: 3rem;
  font-family: 'Open Sans';
  width: 80%;
  margin: 1rem 2rem;
  height: 100%;
  background-color: #17202a;
  border: none;
  color: #d7dbdd;
  &:focus {
    outline: none;
  }
`;

const NewPostButton = styled.button`
  font-size: 1.7rem;
  cursor: pointer;
  background-color: #3a5fcd;
  color: white;
  padding: 0.3rem 0.5rem;
  border-radius: 0.5rem;
  font-weight: 400;
  &:hover {
    background-color: #5478e4;
    transition: all 0.2s;
  }
`;

const FormHeader = ({onChange = () => {}, value = ''}) => (
  <HeaderContainer>
    <StyledLink to="/">
      <Icon className="fas fa-arrow-left" />
    </StyledLink>
    <TitleInput placeholder="Enter Title here.." />
    <NewPostButton>Publish it!</NewPostButton>
  </HeaderContainer>
);
export default FormHeader;
