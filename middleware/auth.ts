export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie("token");

  console.log("token", token.value);

  if (!token.value) {
    return navigateTo("/login");
  }
});
