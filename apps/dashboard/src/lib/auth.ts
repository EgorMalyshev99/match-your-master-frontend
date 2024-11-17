import NextAuth, { CredentialsSignin, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { config } from "@/config";
import { Route } from "@/enums/navigation";
import { signInSchema } from "@/models/auth";
import { ZodError } from "zod";

class InvalidDataTypeError extends CredentialsSignin {
  code = "Invalid data type";
}

class InvalidLoginError extends CredentialsSignin {
  code = "Invalid email or password";
}

const mockAuthorize = async (email: string): Promise<User | null> => {
  return {
    id: "1",
    email: email,
    name: "Test User",
    image: "",
  };
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: { email: {}, password: {} },
      authorize: async (credentials) => {
        try {
          const { email, password } =
            await signInSchema.parseAsync(credentials);

          if (!email || !password) {
            throw new Error("Empty data.");
          }

          return mockAuthorize(email);
        } catch (error) {
          console.error(error);

          if (error instanceof ZodError) {
            throw new InvalidDataTypeError();
          }

          throw new InvalidLoginError();
        }
      },
    }),
  ],
  secret: config.nextAuthSecret,
  pages: {
    signIn: Route.LOGIN,
  },
  trustHost: true,
});
