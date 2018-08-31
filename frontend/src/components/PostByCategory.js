import React, { Component } from 'react'
import Styled from 'styled-components'
import CategoryNavigator from './CategoryNavigator'
import NewPostButton from './NewPostButton'
import Posts from './Posts'

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
  max-width: 80%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
`

const NvaiContainer = Styled.div`
  flex: 1;
`
