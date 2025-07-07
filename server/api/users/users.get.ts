import { getAllUsers } from "~/server/services/userService";

export default defineEventHandler(async () => {
  return await getAllUsers();
});
