export const publicConfig = {
  host: process.env.NEXT_PUBLIC_HOST,
  apiHost: process.env.NEXT_PUBLIC_API_HOST,
  githubHost: process.env.NEXT_PUBLIC_GITHUB_HOST,
  githubClientId: process.env.AUTH_GITHUB_ID as string,
  port: process.env.NEXT_PUBLIC_PORT ?? "3000",
  isDev: process.env.NODE_ENV === "development",
  isProd: process.env.NODE_ENV === "production",
};

export const config = {
  nextAuthSecret: process.env.NEXTAUTH_SECRET as string,
  githubClientSecret: process.env.AUTH_GITHUB_SECRET as string,
};
