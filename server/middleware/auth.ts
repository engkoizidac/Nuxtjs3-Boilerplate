import { defineEventHandler, getCookie, createError } from "h3";
import { verifyJwt } from "../utils/jwt";

export default defineEventHandler(async (event) => {
  const publicPaths = ["/", "/login"];

  const url = event.node.req.url || "";
  const isPublic = publicPaths.some((path) => url.startsWith(path));

  if (isPublic) return;

  const token = getCookie(event, "token") || "";
  const user = await verifyJwt(token);

  if (!user) {
    throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }

  event.context.auth = user;
});
