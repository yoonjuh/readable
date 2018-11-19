import React, {useState} from 'react';
import styled from 'styled-components';
import Sidebar from '../sidebar/Sidebar';
import Header from '../header/Header';
import PostContainer from '../post/PostContainer';

const MainBox = styled.div`
  min-width: 100%;
  display: flex;
`;

const BodyContainer = styled.div`
  background-color: #e8e8e8;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0rem 2rem;
  @media screen and (max-width: 900px) {
    padding: 0rem;
  }
`;
const navItems = [
  {
    name: 'Latest Post',
    icon: 'fas fa-burn',
    path: 'latest',
  },
  {
    name: 'Trendy Post',
    icon: 'far fa-heart',
    path: 'trendy',
  },
];

const MainContainer = ({sortBy}) => (
  <MainBox>
    <Sidebar navItems={navItems} />
    <BodyContainer>
      <Header navItems={navItems} />
      <PostContainer sortBy={sortBy} />
    </BodyContainer>
  </MainBox>
);

export default MainContainer;
