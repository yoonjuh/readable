import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Header.css";

const Header = () => (
  <StyledDiv>
    <Link to="/">Readable</Link>
  </StyledDiv>
);
export default Header;

const StyledDiv = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;

  a {
    text-decoration: none;
    color: white;
    font-size: 3rem;
  }
`;
