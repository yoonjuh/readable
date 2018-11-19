import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import HeaderTab from '../../components/header/HeaderTab';
import HeaderUserThumbnail from '../../components/header/HeaderUserThumbnail';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 1rem;

  @media screen and (max-width: 650px) {
    padding: 1rem;
  }
`;
const HeaderContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  font-size: 1.4rem;
`;
const NewPostButton = styled.button`
  cursor: pointer;
  background-color: #3a5fcd;
  color: white;
  padding: 0.5rem 0.7rem;
  font-size: 1.6rem;
  border-radius: 0.5rem;
  font-weight: 400;
  &:hover {
    background-color: #5478e4;
    transition: all 0.2s;
  }
`;
const ProjectTitle = styled(Link)`
  display: flex;
  padding: 0.5rem 0.5rem;
  align-items: flex-start;
  font-size: 1.7rem;
  font-family: 'Open Sans', 'Helvetica Neue';
  text-decoration: none;
  color: ${props => props.color};
  font-weight: 500;
  &:hover {
    color: #5478e4;
    transition: all 0.2s;
  }
  @media screen and (min-width: 900px) {
    display: none;
  }
`;

const Header = ({navItems, onClick = () => {}}) => (
  <Box>
    <HeaderContainer>
      <NewPostButton onClick={onClick}>New Post</NewPostButton>
      <ProjectTitle to="/" color="black">
        Readable
      </ProjectTitle>
      <HeaderUserThumbnail />
    </HeaderContainer>
    <HeaderTab navItems={navItems} />
  </Box>
);

export default Header;
