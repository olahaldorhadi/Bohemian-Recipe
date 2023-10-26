import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import { typeDefs, resolvers } from './schema/index.mjs';  // Import your typeDefs and resolvers

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
app.use(cors());

// Start the Apollo Server
(async () => {
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });  // GraphQL endpoint
  
  app.listen({ port: 4000 }, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  });
})();



