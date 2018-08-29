import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CategoryButton = ({ category = '', currentCategory, categoryToggler = () => {} }) => (
  <Button onClick={() => categoryToggler(category)} category={category} currentCategory={currentCategory}>
    {category}
  </Button>
)

export default CategoryButton

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 7rem;
  padding: 0.2rem 0.2rem;
  font-size: 1.7rem;
  margin-right: 1.3rem;
  border-radius: 0.5rem;
  border: ${({ category, currentCategory }) => (category === currentCategory ? '' : '0.05rem black solid')};
  color: ${({ category, currentCategory }) => (category === currentCategory || category === '' ? 'white' : 'black')};
  background-color: ${({ category, currentCategory }) =>
    category === currentCategory || category === '' ? 'red' : 'white'};
  box-shadow: ${({ category, currentCategory }) =>
    category === currentCategory ? '0 0 1.5rem rgba(231,0,65, 0.5)' : ''};
  font-weight: 400;
`
CategoryButton.propTypes = {
  category: PropTypes.string.isRequired,
  currentCategory: PropTypes.string.isRequired,
  categoryToggler: PropTypes.func.isRequired,
}
