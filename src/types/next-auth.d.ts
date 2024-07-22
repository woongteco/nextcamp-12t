import NextAuth from "next-auth";
import { PostItem, UserType } from "../types";

declare module "next-auth" {
  interface Session {
    account: {
      access_token: string;
      refresh_token: string;
      provider: string;
      providerAccountId: string;
    };
    user: {
      id: string;
      email: string | null;
      name: string | null;
      image: string | null;
    };
  }
}
