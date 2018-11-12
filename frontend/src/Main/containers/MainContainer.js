import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';

const MainBox = styled.div`
  width: 100%;
  display: flex;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const MainHeader = styled.div``;
const MainBody = styled.div`
  flex: 1;
  border: 0.5rem red solid;
`;

const MainContainer = () => {
  console.log('');
  return (
    <MainBox>
      <Sidebar />
      <BodyContainer>
        <MainHeader>Header</MainHeader>
        <MainBody>Body</MainBody>
      </BodyContainer>
    </MainBox>
  );
};

export default MainContainer;
