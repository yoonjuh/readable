import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import gql from "graphql-tag";
import { graphql, Query } from "react-apollo";
import { compose } from "recompose";
import PostByCategory from "../components/PostByCategory";
import "./app.css";
import Header from "../components/Header";
import NewPostForm from "../components/NewPostForm";
import { GET_ALL_POST } from "../documents/query/post";
import { GET_ALL_CATEGORIES } from "../documents/query/category";

const App = ({ loadingCat, loadingPosts, categories, posts }) => {
  if (loadingCat || loadingPosts) return <span>Loading....</span>;
  const cat = categories.map(category => category.name);
  return (
    <Router>
      <AppContainer>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <PostByCategory categories={cat} posts={posts} />}
          />
          <Route
            exact
            path="/post/new"
            render={() => (
              <NewPostForm
                categories={cat.filter(category => category !== "all")}
              />
            )}
          />
        </Switch>
      </AppContainer>
    </Router>
  );
};
export default compose(
  graphql(GET_ALL_CATEGORIES, {
    props: ({ data }) => ({
      loadingCat: data.loading,
      categories: data.categories
    })
  }),
  graphql(GET_ALL_POST, {
    props: ({ data }) => ({
      loadingPosts: data.loading,
      posts: data.posts
    }),
    fetchPolicy: "cache-and-network"
  })
)(App);

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
`;
