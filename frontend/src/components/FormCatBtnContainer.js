import React from "react";
import Styled from "styled-components";
import PropTypes from "prop-types";
import FormCategory from "./FormCategory";

const Label = Styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .2rem .2rem;
  width: 7rem;
  background-color: ${({ category, currentCategory, categories }) =>
    category === currentCategory ? "#C6002D" : "gray"}
  color: white;
  font-size: 1.3rem;
  border-radius: 0.2rem;
`;

const FormCatBtnContainer = ({ categories, currentCat, onClick }) => (
  <div style={{ display: "flex" }}>
    {categories.map(category => (
      <Label
        category={category}
        categories={categories}
        currentCat={currentCat}
        key={category}
        htmlFor="category"
        onClick={() => onClick(category)}
      >
        {category.toUpperCase()}
        <FormCategory
          category={category}
          isSelected={category === currentCat}
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
  onClick: PropTypes.func.isRequired
};
