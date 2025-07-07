import { getUserById } from "~/server/services/userService";

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id!;
  const method = getMethod(event);

  if (method === "GET") return await getUserById(id);
  //   if (method === 'PUT') {
  //     const body = await readBody(event);
  //     return await updateUser(id, body);
  //   }
  //   if (method === 'DELETE') return await deleteUser(id);

  return createError({ statusCode: 405, statusMessage: "Method Not Allowed" });
});
