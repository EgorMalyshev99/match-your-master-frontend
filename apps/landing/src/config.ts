export const publicConfig = {
  apiHost: process.env.NEXT_PUBLIC_API_HOST,
  dashHost: process.env.NEXT_PUBLIC_DASH_HOST ?? "",
  port: process.env.NEXT_PUBLIC_PORT ?? "3000",
  isDev: process.env.NODE_ENV === "development",
  isProd: process.env.NODE_ENV === "production",
};
