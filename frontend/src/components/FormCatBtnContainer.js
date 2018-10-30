import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import FormCategory from './FormCategory';

const Label = Styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .2rem .2rem;
  width: 7rem;
  background-color: ${({ category, currentCategory, categories }) =>
    category === currentCategory
      ? '#C6002D'
      : category === categories[1] && currentCategory === ''
        ? '#C6002D'
        : 'gray'}
  color: white;
  font-size: 1.3rem;
  border-radius: 0.2rem;
`;

const FormCatBtnContainer = ({ categories, currentCategory, onClick }) => (
  <div style={{ display: 'flex' }}>
    {categories.filter(category => category.length > 0).map(category => (
      <Label
        category={category}
        categories={categories}
        currentCategory={currentCategory}
        key={category}
        htmlFor="category"
        onClick={() => onClick(category)}
      >
        {category}
        <FormCategory
          category={category}
          currentCategory={currentCategory}
          isSelected={category === currentCategory}
          categoryToggler={this.categoryToggler}
        />
      </Label>
    ))}
  </div>
);

export default FormCatBtnContainer;

FormCatBtnContainer.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentCategory: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
