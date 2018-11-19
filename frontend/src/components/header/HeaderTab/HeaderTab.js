import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const TabContainer = styled.div`
  flex: 1;
  display: flex;
  @media screen and (min-width: 650px) {
    display: none;
  }
`;
const StyledLink = styled(NavLink)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  text-decoration: none;
  color: #424949;
  font-family: 'open Sans';
`;
const HeaderTab = ({navItems}) => (
  <TabContainer>
    {navItems &&
      navItems.map(({name, path, icon}) => (
        <StyledLink
          key={name}
          to={path}
          activeStyle={{color: '#3498db', borderBottom: '.2rem #424949 solid'}}
        >
          {name}
        </StyledLink>
      ))}
  </TabContainer>
);

export default HeaderTab;
