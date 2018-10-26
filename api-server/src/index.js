import { ApolloServer } from "apollo-server-express";
import express from "express";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

const { PORT = 4000, NODE_ENV = "development" } = process.env;
const IN_PRODUCTION = NODE_ENV === "production";

const app = express();

//Disable unnescessary header
app.disable("x-powered-by");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: !IN_PRODUCTION
});

server.applyMiddleware({ app });

app.listen({ port: PORT }, () => {
  console.log(`http://localhost:${PORT}${server.graphqlPath}`);
});
