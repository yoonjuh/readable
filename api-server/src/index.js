import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

import {
  PORT,
  NODE_ENV,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_PORT,
  IN_PRODUCTION
} from "../config";

(async () => {
  console.log(DB_PORT);
  try {
    await mongoose.connect(
      `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
      { useNewUrlParser: true }
    );

    const app = express();
    app.use(cors());

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
  } catch (e) {
    console.error(e);
  }
})();
