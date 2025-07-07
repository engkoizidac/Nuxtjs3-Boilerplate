import { user } from "~/server/db/schema";
import { drizzle } from "drizzle-orm/mysql2";

const db = drizzle(process.env.DATABASE_URL!);

export default defineEventHandler(async () => {
  const users = await db.select().from(user);
  return users;
});
