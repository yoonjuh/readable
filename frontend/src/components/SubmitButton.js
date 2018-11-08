import React from 'react';
import Styled from 'styled-components';

const Button = Styled.button`
  margin-top: 1rem;
  width: 100;
  background-color: 	#4169e1;
  color: white;
  height: 2.5rem;
  border: none;
  border-radius: .5rem;
`;

const SubmitBtn = ({isSubmit, onClick}) => (
  <Button type={isSubmit} onClick={isSubmit === 'submit' ? null : onClick}>
    Submit
  </Button>
);
export default SubmitBtn;
