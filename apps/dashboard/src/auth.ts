import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { config } from "@/config";
import { Route } from "@/enums/navigation";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  secret: config.nextAuthSecret,
  // pages: {
  //   signIn: Route.LOGIN,
  // },
});
