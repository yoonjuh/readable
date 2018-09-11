import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { graphql, Query } from 'react-apollo'
import PostByCategory from '../components/PostByCategory'
import './app.css'
import Header from '../components/Header'
import NewPostForm from '../components/NewPostForm'

const GET_INITIAL_DATA = gql`
  {
    posts: getAllPosts {
      id
      timestamp
      title
      body
      author
      category
      voteScore
      deleted
      commentCount
    }
    categories: getAllCategories
  }
`

const categories = ['', 'React', 'Graphql', 'Redux']
const App = ({ data }) => {
  console.log(`from App ${JSON.stringify(data)}`)
  if (data.loading) return null
  return (
    <Router>
      <AppContainer>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <PostByCategory categories={categories} posts={data.posts} categories={data.categories} />}
          />
          <Route exact path="/post/new" render={() => <NewPostForm categories={categories} />} />
        </Switch>
      </AppContainer>
      {/* </div> */}
    </Router>
  )
}
export default graphql(GET_INITIAL_DATA)(App)

const AppContainer = styled.div`
  max-width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  font-size: 5rem;
  flex-direction: column;
  margin: 0.2rem auto;
`
