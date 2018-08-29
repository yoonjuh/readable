import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PostByCategory from '../components/PostByCategory'

export default () => (
  <div>
    <Router>
      <Switch>
        <Route path="/" render={() => <PostByCategory />} />
      </Switch>
    </Router>
  </div>
)
