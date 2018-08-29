import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import PostByCategory from '../components/PostByCategory'
import './app.css'

const App = () => (
  <AppContainer>
    <Router>
      <Switch>
        <Route path="/" render={() => <PostByCategory />} />
      </Switch>
    </Router>
  </AppContainer>
)

export default App

const AppContainer = styled.div`
  border: 0.5rem red solid;
  background-color: #eee;
  display: flex;
  height: 100%;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  font-size: 5rem;
  flex-direction: column;
  margin: 1rem auto;
`
