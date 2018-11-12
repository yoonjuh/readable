import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import SidebarNavi from '../components/SidebarNavi';

const StyledSidebar = styled.aside`
  width: 20rem;
  border: 0.5rem red solid;
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  display: flex;
  padding: 1.5rem 2.5rem;
  align-items: flex-start;
  font-size: 2.5rem;
  font-family: -apple-system, 'Segoe UI', Roboto, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  text-decoration: none;
  color: black;
  font-weight: 400;
`;

const Sidebar = () => (
  <StyledSidebar>
    <StyledLink to="/">Readable</StyledLink>
    <SidebarNavi />
  </StyledSidebar>
);

export default Sidebar;
