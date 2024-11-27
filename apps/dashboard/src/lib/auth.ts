import { Route } from "@/enums/navigation";
import { config } from "@/config";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInSchema } from "@/models/auth";
import { authApi } from "@/lib/axiosInstance";
import { API_PATHS } from "@/constants/routes";
import {
  getCookiesFromResponse,
  getCSRFToken,
  getSessionToken,
} from "@/lib/cookie";
import { AuthResponse } from "@/types/auth";
import { parseImageUrl } from "@/lib/image";
import { NextAuthOptions, User } from "next-auth";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: Route.LOGIN,
  },
  secret: config.nextAuthSecret,
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

          if (!email || !password) {
            throw new Error("Empty data.");
          }

          const csrfResponse = await authApi.get(API_PATHS.csrf);
          let cookies = getCookiesFromResponse(csrfResponse);
          const xsrfToken = getCSRFToken(cookies);
          let sessionToken = getSessionToken(cookies);

          const authResponse = await authApi.post<AuthResponse>(
            API_PATHS.login,
            { email, password },
            {
              headers: {
                "Content-Type": "application/json",
                "X-XSRF-TOKEN": xsrfToken ?? "",
                Cookie: `match_your_master_session=${sessionToken ?? ""}`,
              },
            },
          );
          cookies = getCookiesFromResponse(authResponse);
          sessionToken = getSessionToken(cookies);

          if (authResponse.data.success) {
            const userResponse = await authApi.get<User>(
              API_PATHS.userProfile,
              {
                headers: {
                  "Content-Type": "application/json",
                  "X-XSRF-TOKEN": xsrfToken,
                  Cookie: `match_your_master_session=${sessionToken ?? ""}`,
                },
              },
            );

            const user = userResponse.data;
            return {
              ...user,
              name: user.first_name + " " + user.last_name,
              avatar: parseImageUrl(user.avatar),
              xsrf: xsrfToken,
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
