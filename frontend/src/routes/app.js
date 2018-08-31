import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import PostByCategory from '../components/PostByCategory'
import './app.css'
import Header from '../components/Header'

const App = () => (
  <Router>
    <div>
      <Header />
      <AppContainer>
        <Switch>
          <Route exact path="/" render={() => <PostByCategory />} />
          <Route exact path="/about" render={() => <div>{'about'}</div>} />
        </Switch>
      </AppContainer>
    </div>
  </Router>
)

export default App

const AppContainer = styled.div`
  background-color: #eee;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  font-size: 5rem;
  flex-direction: column;
  margin: 0.1rem auto;
`
