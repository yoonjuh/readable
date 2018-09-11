import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink, HttpLink } from 'apollo-link-http'
import App from './routes/app'

const cache = new InMemoryCache()
const httpLink = new HttpLink({
  uri: 'http://localhost:4000',
})
const client = new ApolloClient({ uri: 'http://localhost:4000', cache })

// const client = new ApolloClient({ HttpLink, cache })

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.querySelector('#root')
)
