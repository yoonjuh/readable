import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CategoryButton = ({ category = '', currentCategory = '', categoryToggler = () => {}, defaultValue = false }) => (
  <Button
    onClick={() => categoryToggler(category)}
    category={category}
    currentCategory={currentCategory}
    defaultValue={defaultValue}
  >
    {category}
  </Button>
)

export default CategoryButton

const Button = styled.div`
  display: flex;
  justify-content: center;
  width: 7rem;
  padding: 0.2rem 0.2rem;
  font-size: 1.4rem;
  margin-left: 0.4rem;
  margin-right: 0.4rem;
  border-radius: 0.5rem;
  border: ${({ category, currentCategory, defaultValue }) =>
    category === currentCategory || (category === 'All' && defaultValue && currentCategory === '')
      ? ''
      : '0.05rem black solid'};
  color: ${({ category, currentCategory, defaultValue }) =>
    category === currentCategory || (category === 'All' && defaultValue && currentCategory === '') ? 'white' : 'black'};
  background-color: ${({ category, currentCategory, defaultValue }) =>
    category === currentCategory || (category === 'All' && defaultValue && currentCategory === '')
      ? 'rgba(231,0,65, 0.7)'
      : 'white'};
  box-shadow: ${({ category, currentCategory, defaultValue }) =>
    category === currentCategory || (category === 'All' && defaultValue && currentCategory === '')
      ? '0 0 1.5rem rgba(231,0,65, 0.5)'
      : ''};
  font-weight: 400;
  :hover {
    background-color: ${({ category, currentCategory, defaultValue }) =>
      category === currentCategory || (category === 'All' && defaultValue && currentCategory === '')
        ? '#dc3545'
        : 'rgba(55, 60, 66, 0.8)'};
    color: white;
    transition: 0.7s;
  }
`
CategoryButton.propTypes = {
  category: PropTypes.string.isRequired,
  currentCategory: PropTypes.string.isRequired,
  categoryToggler: PropTypes.func.isRequired,
}
