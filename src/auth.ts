import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import connectDB from "./lib/db";
import { User } from "./lib/schema";
import { compare } from "bcryptjs";
import google from "next-auth/providers/google";
import kakao from "next-auth/providers/kakao";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        console.log("크레덴셜", credentials);
        const { email, password } = credentials;

        if (!email || !password) {
          throw new CredentialsSignin("정보를 다시 확인해주세요.");
        }

        connectDB();

        const user = await User.findOne({ email }).select(
          "+id +name +image +phone +role"
        );

        if (!user) {
          throw new CredentialsSignin("가입되지 않는 회원입니다.");
        }

        const passwordCheck = await compare(String(password), user.password);

        if (!passwordCheck) {
          throw new CredentialsSignin("비밀번호가 일치하지 않습니다.");
        }

        return {
          id: user._id,
          email: user.email,
          name: user.name,
          image: user.profile_img,
          phone: user.phone,
          role: user.role,
        };
      },
    }),

    google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),

    kakao({
      clientId: process.env.AUTH_KAKAO_ID,
      clientSecret: process.env.AUTH_KAKAO_SECRET,
    }),
  ],

  // session: {
  //   strategy: 'jwt',
  //   maxAge: 30 * 24 * 60 * 60, // jwt 유효 기본값 30일
  // },

  callbacks: {
    signIn: async ({ user, account }: { user: any; account: any }) => {
      console.log("확인", user, account);

      if (account?.provider === "google" || account?.provider === "kakao") {
        const { email, name } = user;

        console.log("소셜정보", email, name);

        await connectDB();
        const socialUserCheck = await User.findOne({
          email,
          authProviderId: "google" || "kakao",
        });

        if (!socialUserCheck) {
          await new User({
            name,
            email,
          });
        }
      }

      return true;
    },

    async jwt({
      token,
      user,
      account,
    }: {
      token: any;
      user: any;
      account: any;
    }) {
      console.log("JWT", token, "USER", user, "ACCOUNT", account);

      if (account) {
        token.id = user.id;
        token.phone = user.phone;
        token.role = user.role;
        token.accessToken = account.access_token;
      }

      return token;
    },

    async session({
      session,
      token,
      user,
    }: {
      session: any;
      token: any;
      user: any;
    }) {
      if (token) {
        session.user.id = token.id;
        session.user.phone = token.phone;
        session.user.role = token.role;
        session.accessToken = token.accessToken;
      }
      return session;
    },
  },
});
