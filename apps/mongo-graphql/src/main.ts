import 'reflect-metadata'
import * as tq from 'type-graphql'
import { ApolloServer } from 'apollo-server'
import { PrismaClient } from './generated/prisma';
import { applyResolversEnhanceMap, resolvers, ResolversEnhanceMap, UpdateOneApplicationArgs, UpdateOneUserArgs } from "./generated/typegraphql";
import { MiddlewareFn, UseMiddleware } from 'type-graphql';
import { inspect } from "util";


const updateUser: MiddlewareFn = async ({ args }, next) => {

  const updatedName = (args as UpdateOneUserArgs).data.name?.set;

  const res = await next()

  if (updatedName) {
    const user = await prisma.user.findFirst({ where: args.where, select: { id: true, applications: true } })
    await prisma.application.updateMany({ where: { id: { in: user.applications.map(({ id }) => id) } }, data: { candidate: { set: { id: user.id, name: updatedName } } } })
  }

  return res;
}

const updateApplication: MiddlewareFn = async ({ args }, next) => {

  const updatedStatus = (args as UpdateOneApplicationArgs).data.status?.set

  const res = await next()

  if (updatedStatus) {
    const application = await prisma.application.findFirst({ where: args.where, select: { id: true, candidate: true } })

    const candidate = await prisma.user.findFirst({ where: { id: application.candidate.id }, select: { id: true, applications: true } })

    await prisma.user.update({ where: { id: candidate.id }, data: { applications: candidate.applications.map(app => ({ ...app, status: app.id === application.id ? updatedStatus : app.status })) } })
  }

  return res;
}

const resolversEnhanceMap: ResolversEnhanceMap = {
  User: {
    updateOneUser: [UseMiddleware(updateUser)],
  },
  Application: {
    updateOneApplication: [UseMiddleware(updateApplication)]
  }
}

applyResolversEnhanceMap(resolversEnhanceMap)

const PORT = '3333'

const prisma = new PrismaClient()

const app = async () => {
  // const schema = await tq.buildSchema({ resolvers, authChecker: customAuthChecker })
  const schema = await tq.buildSchema({ resolvers })

  new ApolloServer({
    schema,
    // schema: applyMiddleware(schema, permissions),
    context: ({ req }) => {
      // const user = getUser(req.headers.authorization)

      // if (!user) {
      //   throw new GraphQLError('User is not authenticated');
      // }

      return {
        prisma,
        // user,
      }

    }
  }).listen({ port: PORT }, () =>
    console.log(`🚀 Server ready at: <http://localhost:${PORT}>`)
  )
}

app()