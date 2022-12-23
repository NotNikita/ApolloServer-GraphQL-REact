import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import { schema as rawSchema } from './schema/Schema';
import { ApolloServer } from 'apollo-server';
import { buildSchema, GraphQLSchema } from 'graphql';
import { getUsersByPage } from './schema/User/Queries/GetUsersByPage';
import { createUser } from './schema/User/Mutations/CreateUser';
import { getUserById } from './schema/User/Queries/GetUserById';
import { userResolver } from './resolvers/User/UserResolver';
const schema: GraphQLSchema = buildSchema(rawSchema);

export const LOCALHOST = 'https://localhost';
export const PORT = 3000;

const app = express();
app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema: schema,
  }),
);
app.listen(5000, () => console.log('Backend started'));

const queries = [getUsersByPage, getUserById];
const mutations = [createUser];

const resolvers = {
  Query: {
    ...userResolver.Query,
  },
  Mutation: {
    ...userResolver.Mutation,
  },
};

const server = new ApolloServer({
  typeDefs: [schema, queries, mutations],
  resolvers,
});

exports.graphqlHandler = server.listen({ path: LOCALHOST, port: PORT }, () =>
  console.log(`Start listening port ${PORT}`),
);
