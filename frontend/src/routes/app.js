import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import PostForm from "../components/PostForm";
import SortingToggler from "./SortingToggler";
import "./app.css";

export default () => (
    <Router>
      <div className="main-container">
        <Header />
        <Switch>
          <Route exact path="/" component={SortingToggler} />
          <Route exact path="/new" component={PostForm} />
          <Route exact path="/:category" component={SortingToggler} />
        </Switch>
      </div>
    </Router>
  );
