import React, { Component } from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import CategoryNavigator from './CategoryNavigator'
import NewPostButton from './NewPostButton'
import Posts from './Posts'

class PostByCategory extends Component {
  state = {
    currentCategory: '',
  }
  categoryToggler = newCategory => {
    this.setState({ currentCategory: newCategory })
  }
  render() {
    const { categories } = this.props
    return (
      <MainContainer>
        <NvaiContainer>
          <CategoryNavigator
            categories={categories}
            currentCategory={this.state.currentCategory}
            categoryToggler={this.categoryToggler}
          />
        </NvaiContainer>
        <NewPostButton />
        <Posts />
      </MainContainer>
    )
  }
}
export default PostByCategory

const MainContainer = Styled.div`
  max-width: 90%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
`

const NvaiContainer = Styled.div`
  flex: 1;
`

PostByCategory.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
}
