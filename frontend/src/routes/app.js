import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import PostByCategory from '../components/PostByCategory'
import './app.css'
import Header from '../components/Header'
import NewPostForm from '../components/NewPostForm'

const categories = ['', 'React', 'Graphql']

const App = () => (
  <Router>
    {/* <div> */}
    <AppContainer>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <PostByCategory categories={categories} />} />
        <Route exact path="/post/new" render={() => <NewPostForm categories={categories} />} />
      </Switch>
    </AppContainer>
    {/* </div> */}
  </Router>
)

export default App

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
