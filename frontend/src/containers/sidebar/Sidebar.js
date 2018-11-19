import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import SidebarNav from '../../components/sidebar/SidebarNav';

const StyledSidebar = styled.aside`
  min-width: 25rem;
  display: flex;
  flex-direction: column;
  background-color: #686868;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  padding: 1.5rem 2.5rem;
  align-items: flex-start;
  font-size: 2.5rem;
  font-family: -apple-system, 'Segoe UI', Roboto, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  text-decoration: none;
  color: white;
  font-weight: 400;
  &:hover {
    color: #5478e4;
    transition: all 0.2s;
  }
`;

const Sidebar = ({navItems}) => (
  <StyledSidebar>
    <StyledLink to="/">Readable</StyledLink>
    <SidebarNav navItems={navItems} />
  </StyledSidebar>
);

export default Sidebar;
