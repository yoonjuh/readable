import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CategoryButton from './CategoryButton'

const CategoryNavigator = ({ categories, categoryToggler }) => (
  <NaviStyleProvider>
    {categories &&
      categories.map(category => (
        <CategoryButton key={category} category={category} categoryToggler={categoryToggler} />
      ))}
  </NaviStyleProvider>
)

export default CategoryNavigator

const NaviStyleProvider = styled.div`
  background-color: green;
`

CategoryNavigator.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  categoryToggler: PropTypes.func.isRequired,
}
