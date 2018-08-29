import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CategoryButton from './CategoryButton'

const CategoryNavigator = ({ categories, currentCategory, categoryToggler }) => (
  <NaviStyleProvider>
    <FilterText>{'Filter: '}</FilterText>
    {categories &&
      categories.map(category => (
        <CategoryButton
          key={category}
          category={category}
          currentCategory={currentCategory}
          categoryToggler={categoryToggler}
        />
      ))}
  </NaviStyleProvider>
)

export default CategoryNavigator

const NaviStyleProvider = styled.div`
  border: 0.3rem red solid;
  display: flex;
  width: 90vw;
  height: 5vw;
  color: black;
  margin-top: 3rem;
`
const FilterText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  margin-right: 0.7rem;
  margin-left: 0.5rem;
  color: black;
`

CategoryNavigator.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentCategory: PropTypes.string.isRequired,
  categoryToggler: PropTypes.func.isRequired,
}
