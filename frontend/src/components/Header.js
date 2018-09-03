import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default props => (
  <HeaderContainer>
    <Link to="/">{'Readable'}</Link>
  </HeaderContainer>
)

const HeaderContainer = styled.div`
  background-color: #373c42;
  margin-top: 1.5rem;
  width: 100%;
  display: flex;
  flex: 1;
  flex-wrap: no-wrap;
  a {
    font-size: 1.5rem;
    margin: 1rem 0;
    text-decoration: none;
    color: white;
    width: max-content;
    padding-left: 1.5rem;
  }
  a:hover {
    color: #d3d3d3;
  }
`
