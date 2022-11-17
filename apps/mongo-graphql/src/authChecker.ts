import { AuthChecker } from "type-graphql";

export const customAuthChecker: AuthChecker<Record<string, string>> = (
  { root, args, context, info },
) => {

  console.log({
    root, args, user: context.user, info
  })

  // here we can read the user from context
  // and check his permission in the db against the `roles` argument
  // that comes from the `@Authorized` decorator, eg. ["ADMIN", "MODERATOR"]

  return true; // or false if access is denied
};