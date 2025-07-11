import { loginUser } from "~/server/services/authService";
import { setCookie } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, password } = body;

  const result = await loginUser(username, password);

  if (!result) {
    return { status: 401, message: "Invalid credentials" };
  }

  setCookie(event, "token", result.token, {
    httpOnly: false,
    maxAge: 60 * 60 * 2,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  return { user: result.user };
});
