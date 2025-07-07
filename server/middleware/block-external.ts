export default defineEventHandler((event) => {
  const referer = getHeader(event, "referer") || "";
  const origin = getHeader(event, "origin") || "";
  const host = getHeader(event, "host") || "";

  // Example: allow only same-origin requests
  const isLocal = referer.includes(host) || origin.includes(host);

  if (!isLocal) {
    throw createError({
      statusCode: 403,
      statusMessage: "Forbidden: External API access is blocked",
    });
  }
});
