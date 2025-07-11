export default defineEventHandler((event) => {
  // const referer = getHeader(event, "referer") || "";
  // const origin = getHeader(event, "origin") || "";
  // const host = getHeader(event, "host") || "";
  // let refererHost = "";
  // let originHost = "";
  // try {
  //   refererHost = referer ? new URL(referer).host : "";
  // } catch {}
  // try {
  //   originHost = origin ? new URL(origin).host : "";
  // } catch {}
  // const isLocal =
  //   refererHost === host ||
  //   originHost === host ||
  //   (!referer && !origin && process.env.NODE_ENV !== "production");
  // console.log({ referer, origin, host, refererHost, originHost, isLocal });
  // if (!isLocal) {
  //   throw createError({
  //     statusCode: 403,
  //     statusMessage: "Forbidden: External API access is blocked",
  //   });
  // }
});
