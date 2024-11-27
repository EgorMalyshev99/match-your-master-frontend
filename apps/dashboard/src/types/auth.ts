import NextAuth from "next-auth";
import { User as UserModel } from "@/models/user";

export interface AuthResponse {
  success: boolean;
}

declare module "next-auth" {
  interface User extends UserModel {
    xsrf: string | null;
    cookies: string[] | undefined;
  }
  interface Session {
    user: User;
  }
}
