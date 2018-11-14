import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledItem = styled(Link)`
  flex: 1;
  font-size: 1.5rem;
  padding: 1rem 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  color: white;
  &:hover {
    background-color: black;
    /* background-color: #e0e0e0; */
    color: #3498db;
    transition: all 0.2s;
  }
  &:active {
    color: #3a5fcd;
  }
`;
const Icon = styled.i`
  margin-top: 0.3rem;
  margin-right: 1rem;
  max-width: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  padding-bottom: 0.5rem;
  min-width: 2.5rem;
`;
const NavItem = ({path, icon, name}) => (
  <StyledItem to={path}>
    <Icon className={icon} />
    {`${name}`}
  </StyledItem>
);
export default NavItem;
