import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink, HttpLink } from "apollo-link-http";
import App from "./routes/app";

const cache = new InMemoryCache({});
const link = new HttpLink({
  uri: "http://localhost:3002/graphql"
});
const client = new ApolloClient({ uri: "http://localhost:3002/graphql" });

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.querySelector("#root")
);
