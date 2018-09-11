import React, { Component } from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { uniq } from 'ramda'
import { Query } from 'react-apollo'
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
    console.log(this.props)
    const { categories, posts } = this.props
    return (
      <MainContainer>
        <NvaiContainer>
          <CategoryNavigator
            categories={uniq(categories.concat(['ALL'])).sort()}
            currentCategory={this.state.currentCategory}
            categoryToggler={this.categoryToggler}
          />
        </NvaiContainer>
        <NewPostButton />
        <Posts {...this.props} posts={posts} />
      </MainContainer>
    )
  }
}
export default PostByCategory
// props => (
//   <Query query={GET_ALL_POST}>{({ data, loading }) => <PostByCategory {...props} data={data} />}</Query>
// )

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
