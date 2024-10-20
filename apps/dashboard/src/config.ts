export const publicConfig = {
  apiHost: process.env.NEXT_PUBLIC_API_HOST,
  isDev: process.env.NODE_ENV === "development",
  isProd: process.env.NODE_ENV === "production",
};
