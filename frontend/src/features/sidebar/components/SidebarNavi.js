import React from 'react';
import styled from 'styled-components';
import NavItem from './NavItem';

const naviItems = [
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

const NaviContainer = styled.div`
  font-size: 1.5rem;
  margin-top: 2rem;
`;

const SidebarNavi = () => (
  <NaviContainer>
    {naviItems.map(({name, icon, path}) => (
      <NavItem key={name} icon={icon} name={name} path={path} />
    ))}
  </NaviContainer>
);
export default SidebarNavi;
