import { Route } from "@/enums/navigation";
import { config } from "@/config";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInSchema } from "@/models/validation/auth";
import { authApi } from "@/lib/axiosInstance";
import { API_PATHS } from "@/constants/routes";
import { getCookiesFromResponse, getCookieValue } from "@/lib/cookie";
import { AuthResponse } from "@/types/auth";
import { parseImageUrl } from "@/lib/image";
import { NextAuthOptions, User } from "next-auth";
import { redirect } from "next/navigation";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: Route.LOGIN,
    signOut: Route.LOGOUT,
  },
  secret: config.nextAuthSecret,
  session: {
    maxAge: 7200,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          user: user,
        };
      }

      return token;
    },
    async session({ session, token }) {
      if (token.user) {
        session.user = token.user as User;
      }
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      credentials: { email: {}, password: {} },
      async authorize(credentials) {
        try {
          const { email, password } =
            await signInSchema.parseAsync(credentials);

          const csrfResponse = await authApi.get(API_PATHS.csrf);
          let cookies = getCookiesFromResponse(csrfResponse);
          let xsrfTokenCookie = getCookieValue(cookies, "XSRF-TOKEN");
          let sessionTokenCookie = getCookieValue(
            cookies,
            "match_your_master_session",
          );

          const authResponse = await authApi.post<AuthResponse>(
            API_PATHS.login,
            { email, password },
            {
              headers: {
                "Content-Type": "application/json",
                "X-XSRF-TOKEN": xsrfTokenCookie?.value,
                Cookie: `match_your_master_session=${sessionTokenCookie?.value}`,
              },
            },
          );
          cookies = getCookiesFromResponse(authResponse);
          sessionTokenCookie = getCookieValue(
            cookies,
            "match_your_master_session",
          );

          if (authResponse.data.success) {
            const userResponse = await authApi.get<User>(
              API_PATHS.userProfile,
              {
                headers: {
                  "Content-Type": "application/json",
                  "X-XSRF-TOKEN": xsrfTokenCookie?.value,
                  Cookie: `match_your_master_session=${sessionTokenCookie?.value}`,
                },
              },
            );

            const user = userResponse.data;
            return {
              ...user,
              name: user.first_name + " " + user.last_name,
              avatar: user.avatar ? parseImageUrl(user.avatar) : null,
              xsrf: xsrfTokenCookie?.value ?? "",
              cookies: cookies,
            };
          } else {
            return null;
          }
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
  ],
};
