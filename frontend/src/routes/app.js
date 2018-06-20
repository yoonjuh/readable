import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../components/Header";
import AllCats from "../components/AllCats";

export default () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={AllCats} />
        <Route exact path="/:category" component={AllCats} />
      </Switch>
    </div>
  </Router>
);
