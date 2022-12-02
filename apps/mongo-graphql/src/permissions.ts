import { shield, deny, allow, rule } from 'graphql-shield'
import 'reflect-metadata'

const isOwner = rule()(async (_, args, ctx) => {

    if (ctx.user.id === args.where.id) {
        return true
    }

    return new Error('Custom error from rule.')
})

export const permissions = shield({
    Query: {
        users: allow,
        aggregateUser: allow,
    },
    Mutation: {
        updateOneUser: isOwner,
    },
    User: allow,
    AggregateUser: allow,
    UserCountAggregate: allow,
}, {
    fallbackRule: allow
})