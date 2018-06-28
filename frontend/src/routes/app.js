import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";
import ByCategory from "../components/ByCategory";
import PostForm from "../components/PostForm";
import "./app.css";

export default () => (
  <Router>
    <div className="main-container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/new" component={PostForm} />
        <Route exact path="/:category" component={ByCategory} />
      </Switch>
    </div>
  </Router>
);
