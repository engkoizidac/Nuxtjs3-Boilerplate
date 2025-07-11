import auth from "~/server/middleware/auth";

export default defineEventHandler(async (event) => {
  await auth(event); // use middleware

  return { user: event.context.auth };
});
