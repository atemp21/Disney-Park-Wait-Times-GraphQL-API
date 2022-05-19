import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import http from 'http';
import typeDefs  from './typedefs';
import resolvers from './resolvers';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';

const startServer = async () => {
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        typeDefs, resolvers, 
        plugins: [ApolloServerPluginDrainHttpServer({httpServer})]
    });

    await server.start();
    server.applyMiddleware({ app });
    await new Promise<void>(resolve => httpServer.listen({ port: 4000 }, resolve));
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
}

startServer();