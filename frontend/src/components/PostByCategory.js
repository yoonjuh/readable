import React, { Component } from 'react'
import styled from 'styled-components'
import CategoryNavigator from './CategoryNavigator'
import NewPostButton from './NewPostButton'

const categories = ['All', 'React', 'Graphql']

class PostByCategory extends Component {
  state = {
    currentCategory: 'All',
  }
  categoryToggler = newCategory => {
    this.setState({ currentCategory: newCategory })
  }
  render() {
    console.log(this.state.currentCategory)
    return (
      <div>
        <NvaiContainer>
          <CategoryNavigator
            categories={categories}
            currentCategory={this.state.currentCategory}
            categoryToggler={this.categoryToggler}
          />
        </NvaiContainer>
        <NewPostButton />
      </div>
    )
  }
}
export default PostByCategory

const NvaiContainer = styled.div`
  width: 80vw;
`
