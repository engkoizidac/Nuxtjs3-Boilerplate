import { user } from "~/server/db/schema";
import { drizzle } from "drizzle-orm/mysql2";
import { eq } from "drizzle-orm";

const db = drizzle(process.env.DATABASE_URL!);

// Get all users
export const getAllUsers = async () => {
  return await db.select().from(user);
};

// Get user by ID
export const getUserById = async (id: string) => {
  const result = await db.select().from(user).where(eq(user.id, id)).limit(1);
  return result[0] ?? null;
};

// // Create a new user

// export const createUser = async (data: { name: string; email: string }) => {
//   return db.insert(user).values(data);
// };

// // Update an existing user
// export const updateUser = async (
//   id: number,
//   data: { name?: string; email?: string }
// ) => {
//   return await db.update(user).set(data).where(eq(user.id, id));
// };

// // Delete a user
// export const deleteUser = async (id: number) => {
//   return await db.delete(user).where(eq(user.id, id));
// };
