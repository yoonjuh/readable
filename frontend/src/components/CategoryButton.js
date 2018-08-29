import React from 'react'
import PropTypes from 'prop-types'

const CategoryButton = ({ category = '', categoryToggler = () => {} }) => (
  <div onClick={() => categoryToggler(category)}>{category}</div>
)

export default CategoryButton

CategoryButton.propTypes = {
  category: PropTypes.string.isRequired,
  categoryToggler: PropTypes.func.isRequired,
}
