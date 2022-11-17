const { applyMiddleware } = require("graphql-middleware");
import 'reflect-metadata'
import * as tq from 'type-graphql'
import { ApolloServer } from 'apollo-server'
import { PrismaClient } from './generated/prisma';
import { resolvers } from "./generated/typegraphql";
import { getUser } from './getUser';
import { GraphQLError } from 'graphql';
import { customAuthChecker } from './authChecker';
import { permissions } from './permissions';

const PORT = '3333'

const prisma = new PrismaClient()

const app = async () => {
  const schema = await tq.buildSchema({ resolvers, authChecker: customAuthChecker })

  new ApolloServer({
    schema: applyMiddleware(schema, permissions),
    context: ({ req }) => {
      const user = getUser(req.headers.authorization)

      if (!user) {
        throw new GraphQLError('User is not authenticated');
      }

      return {
        prisma,
        user,
      }

    }
  }).listen({ port: PORT }, () =>
    console.log(`🚀 Server ready at: <http://localhost:${PORT}>`)
  )
}

app()