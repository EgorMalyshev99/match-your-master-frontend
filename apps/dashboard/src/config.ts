export const publicConfig = {
  host: process.env.NEXT_PUBLIC_HOST,
  hostName: process.env.NEXT_PUBLIC_HOSTNAME,
  apiHost: process.env.NEXT_PUBLIC_API_HOST,
  port: process.env.NEXT_PUBLIC_PORT ?? "3000",
  isDev: process.env.NODE_ENV === "development",
  isProd: process.env.NODE_ENV === "production",
};

export const config = {
  nextAuthSecret: process.env.NEXTAUTH_SECRET as string,
};
