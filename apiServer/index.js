const { ApolloServer, gql } = require('apollo-server');

const data = [
  {
    id: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1467166872634,
    title: 'Udacity is the best place to learn React',
    body: 'Everyone says so after all.',
    author: 'thingtwo',
    category: 'react',
    voteScore: 6,
    deleted: false,
    commentCount: 2
  },
  {
    id: '6ni6ok3ym7mf1p33lnez',
    timestamp: 1468479767190,
    title: 'Learn graphql in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'thingone',
    category: 'graphql',
    voteScore: -5,
    deleted: false,
    commentCount: 0
  },
  {
    id: '42k3jklrjlkdfsd9fd9sdf',
    timestamp: 1468479768222,
    title: 'Redux Core Concepts',
    body: 'Redux is a predictable state container for JavaScript apps. (Not to be confused with a WordPress framework – Redux Framework.) It helps you write applications that behave consistently, run in different environments (client, server, and nativ',
    author: 'Dan Abramov',
    category: 'redux',
    voteScore: 11,
    deleted: false,
    commentCount: 0
  },
  {
    id: 'dfjkdfd890u38782hjh2d8',
    timestamp: 1468479767323,
    title: 'React Nanodegree Program',
    body: "For the Readable project, you will build a content and comment web app. Users will be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users will also be able to edit and delete posts and comments.",
    author: 'mentor',
    category: 'udacity',
    voteScore: 12,
    deleted: false,
    commentCount: 0
  },
]

const typeDefs = gql`
  type Post {
    id: String
    timestamp: Int
    title: String
    body: String
    author: String
    category: String
    voteScore: Int
    deleted: Boolean
    commentCount: Int
  }

  type Query {
    getAllPosts: [Post]
  }
`;
const resolvers = {
  Query: {
    getAllPosts: () => data
  },
};
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});