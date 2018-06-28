import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default props => {
  console.log(props.categories);
  return (
    <StyledDiv>
      {props.categories.map(category => (
        <div className="link-wrapper">
          <Link key={category} to={`/${category}`}>
            {category.toUpperCase()}
          </Link>
        </div>
      ))}
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 4rem;
  flex-wrap: wrap;

  .link-wrapper {
    display: flex;
    justify-content: center;
    flex: 1;
    border: 0.1rem solid red;
    margin: auto 0.5rem;
  }

  a {
    color: #eee;
    margin: auto 1rem;
    font-size: 1.5rem;
    text-decoration: none;
  }
`;
