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
  padding: 0rem 0.5rem;
`;
const MainBody = styled.div`
  flex: 1;
  border: 0.5rem red solid;
`;

const MainContainer = () => (
  <MainBox>
    <Sidebar />
    <BodyContainer>
      <Header />
      <PostContainer />
    </BodyContainer>
  </MainBox>
);

export default MainContainer;
