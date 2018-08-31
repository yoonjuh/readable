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
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  color: black;
  margin-top: 3rem;
  align-items: center;
  padding-left: 1rem;
`
const FilterText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  margin-right: 0.7rem;
  margin-left: 1.5rem;
  color: black;
`

CategoryNavigator.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentCategory: PropTypes.string.isRequired,
  categoryToggler: PropTypes.func.isRequired,
}
