import NextAuth from "next-auth";
import { PostItem, UserType } from "../types";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string | null;
      name: string | null;
      image: string | null;
    };
  }
}
