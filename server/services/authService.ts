import { db } from "../utils/db";
import { user } from "../db/schema";
import { eq, and } from "drizzle-orm";
import { signJwt } from "../utils/jwt";
import bcrypt from "bcryptjs";

type User = typeof user.$inferSelect;

type LoginResponse = {
  token: string;
  user: User;
} | null;

export async function loginUser(
  username: string,
  password: string
): Promise<LoginResponse> {
  const result = await db
    .select()
    .from(user)
    .where(and(eq(user.username, username), eq(user.status, "Activated")));

  const existingUser = result[0];
  if (!existingUser) return null;

  const isMatch = await bcrypt.compare(password, existingUser.password);
  if (!isMatch) return null;

  const token = await signJwt({
    id: existingUser.id,
    username: existingUser.username,
  });

  return { token, user: existingUser };
}
