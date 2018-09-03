import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import FormCategory from './FormCategory'
import FormCatBtnContainer from './FormCatBtnContainer'

const FormContainer = Styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 95%;
  margin-top: 3rem;
`

const CategoryLabel = Styled.label`
  flex: 1;
  font-size: 1.7rem;
`
const Label = Styled.label`
   margin-top: 1rem;
   display: flex;
   flex-direction: column;
   font-size: 1.7rem;
`

const Group = Styled.div`
  flex: 1;
`
const Button = Styled.button`
  width: 100%;
  background-color: blue;
  color: white;
  height: 3rem;
`

class NewPostForm extends Component {
  state = {
    currentCategory: '',
    title: '',
    content: '',
    author: '',
  }

  onChangeHandler = e => {
    const nextState = {}
    nextState[e.target.name] = e.target.value
    this.setState(nextState)
  }
  categoryToggler = newCategory => this.setState({ currentCategory: newCategory })
  submitHandler = e => {
    e.preventDefault()
    console.log(e)
    /** make an apu call and redirection to home! */
  }

  render() {
    const { categories } = this.props
    const { currentCategory, title, content, author } = this.state
    console.log(title)
    return (
      <FormContainer>
        <Group>
          <CategoryLabel htmlFor="categories">
            {'Category'}
            <FormCatBtnContainer
              id="categories"
              categories={categories}
              currentCategory={currentCategory}
              onClick={this.categoryToggler}
            />
          </CategoryLabel>
        </Group>
        <Group>
          <Label htmlFor="title">
            {'Title '}
            <input
              style={{ height: '3rem' }}
              name="title"
              type="text"
              id="title"
              value={title}
              onChange={this.onChangeHandler}
            />
          </Label>
        </Group>
        <Group>
          <Label htmlFor="content">
            {'Content '}
            <textarea
              style={{ height: '10rem' }}
              type="text"
              id="content"
              name="content"
              value={content}
              onChange={this.onChangeHandler}
            />
          </Label>
        </Group>
        <Group>
          <Label>
            {'Author '}
            <input
              style={{ height: '3rem' }}
              name="author"
              type="text"
              id="author"
              value={author}
              onChange={this.onChangeHandler}
            />
          </Label>
        </Group>
        <div style={{ marginTop: '2rem' }}>
          <Button type="submit" onSubmit={this.submitHandler}>
            {'Submit'}
          </Button>
        </div>
      </FormContainer>
    )
  }
}

export default NewPostForm

NewPostForm.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
}
