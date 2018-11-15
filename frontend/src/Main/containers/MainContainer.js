import React from 'react';
import styled from 'styled-components';
import Sidebar from '../../features/sidebar/containers/Sidebar';
import Header from '../../features/header/Header';
import PostContainer from '../../features/post/containers/PostContainer';

const MainBox = styled.div`
  min-width: 100%;
  display: flex;
`;

const BodyContainer = styled.div`
  background-color: #e8e8e8;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0rem 1rem;
`;
const navItems = [
  {
    name: 'Latest Post',
    icon: 'fas fa-burn',
    path: 'new',
  },
  {
    name: 'Trendy Post',
    icon: 'far fa-heart',
    path: 'trendy',
  },
];

const MainContainer = () => (
  <MainBox>
    <Sidebar navItems={navItems} />
    <BodyContainer>
      <Header navItems={navItems} />
      <PostContainer />
    </BodyContainer>
  </MainBox>
);

export default MainContainer;
