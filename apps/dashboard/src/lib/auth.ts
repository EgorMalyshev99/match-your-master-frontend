import NextAuth, { CredentialsSignin, User } from "next-auth";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { config } from "@/config";
import { Route } from "@/enums/navigation";
import { signInSchema } from "@/models/auth";
import { API_PATHS } from "@/const";
import { ZodError } from "zod";

interface Credentials {
  email: string;
  password: string;
}

export const authorize = async (credentials: Credentials): Promise<User> => {
  const res = await fetch(API_PATHS.login, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  const data = await res.json();
  return data;
};

class InvalidDataTypeError extends CredentialsSignin {
  code = "Invalid data type";
}

class InvalidLoginError extends CredentialsSignin {
  code = "Invalid email or password";
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: { email: {}, password: {} },
      authorize: async (credentials) => {
        try {
          let user = null;

          const { email, password } =
            await signInSchema.parseAsync(credentials);

          user = await authorize({
            email: email,
            password: password,
          });

          if (!user) {
            throw new Error("User not found.");
          }

          return user;
        } catch (error) {
          if (error instanceof ZodError) {
            throw new InvalidDataTypeError();
          }

          throw new InvalidLoginError();
        }
      },
    }),
    GitHub,
  ],
  secret: config.nextAuthSecret,
  pages: {
    signIn: Route.LOGIN,
  },
});
