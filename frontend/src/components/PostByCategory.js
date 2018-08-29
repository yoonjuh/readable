import React, { Component } from 'react'
import CategoryNavigator from './CategoryNavigator'

const categories = ['All', 'React', 'Graphql']

class PostByCategory extends Component {
  state = {
    currentCategory: '',
  }
  categoryToggler = newCategory => {
    this.setState({ currentCategory: newCategory })
  }
  render() {
    console.log(this.state.currentCategory)
    return (
      <div>
        <CategoryNavigator categories={categories} categoryToggler={this.categoryToggler} />
      </div>
    )
  }
}
export default PostByCategory
