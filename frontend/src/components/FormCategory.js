import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'

const FormCategory = ({ category = '', currentCategory = '', onChange = () => {} }) => (
  <Input type="radio" value={category} onChange={onChange} disabled />
)

export default FormCategory

const Input = Styled.input.attrs({
  type: 'radio',
  value: ({ category }) => category,
  id: 'category',
  onChange: ({ onChange }) => onChange,
  disabled: true,
})`
  display: none;

`
