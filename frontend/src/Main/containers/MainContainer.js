import React from 'react';
import styled from 'styled-components';
import Sidebar from '../../features/sidebar/containers/Sidebar';
import Header from '../../features/header/Header';

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
      <MainBody>Body</MainBody>
    </BodyContainer>
  </MainBox>
);

export default MainContainer;
