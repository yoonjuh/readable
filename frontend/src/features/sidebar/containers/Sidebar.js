import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import SidebarNavi from '../components/SidebarNavi';

const StyledSidebar = styled.aside`
  min-width: 17rem;
  display: flex;
  flex-direction: column;
  background-color: #686868;
  @media screen and (max-width: 650px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  padding: 1.5rem 2.5rem;
  align-items: flex-start;
  font-size: 2rem;
  font-family: -apple-system, 'Segoe UI', Roboto, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  text-decoration: none;
  color: white;
  font-weight: 400;
  &:hover {
    color: #3498db;
    transition: all 0.2s;
  }
`;

const Sidebar = ({navItems}) => (
  <StyledSidebar>
    <StyledLink to="/">Readable</StyledLink>
    <SidebarNavi navItems={navItems} />
  </StyledSidebar>
);

export default Sidebar;
