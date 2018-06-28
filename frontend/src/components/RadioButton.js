import React from "react";
import PropTypes from "prop-types";

const RadioButton = ({ selectedValue, onChange }) => (
  <div className="radio-container">
    <label className="radio-label" htmlFor="radioForSort">
      <div className="radio-text">DATE</div>
      <input
        type="radio"
        value="date"
        checked={selectedValue === "date"}
        onChange={onChange}
      />
    </label>
    <label className="radio-label" htmlFor="radioForSort">
      <div className="radio-text">SCORE</div>
      <input
        type="radio"
        value="score"
        checked={selectedValue === "score"}
        onChange={onChange}
      />
    </label>
  </div>
);

export default RadioButton;

RadioButton.defaultProps = {
  selectedValue: "",
  onChange: () => {}
};

RadioButton.propTypes = {
  selectedValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

