import React from 'react';
import {Link} from 'react-router-dom';
import styled, {keyframes} from 'styled-components';

const hoverEffect = keyframes`
  0% {
    opacity: 0;
    transform: translate(-10rem);
    background-color: #686868;
  }
  80% {
    transform: translate(1rem);
  }
  100% {
    opacity: 1;
    transform: translate(0);
    background-color: black;

  }
`;

const StyledItem = styled(Link)`
  flex: 1;
  font-size: 2rem;
  padding: 1rem 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  color: white;
  &:hover {
    background-color: black;
    color: #e03a72;
    transition: all 0.2s;
    animation: ${hoverEffect} 0.8s 1;
  }
  &:active {
    color: #e03a72;
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
  fill: #e03a72;
`;
const NavItem = ({path, icon, name}) => (
  <StyledItem to={path}>
    <Icon className={icon} />
    {`${name}`}
  </StyledItem>
);
export default NavItem;
