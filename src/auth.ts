import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import connectDB from "./lib/db";
import { User } from "./lib/schema";
import { compare } from "bcryptjs";
import google from "next-auth/providers/google";
import kakao from "next-auth/providers/kakao";
import github from "next-auth/providers/github";

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

        await connectDB();

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

    github({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
  },

  callbacks: {
    async signIn({ user, account }: { user: any; account: any }) {
      console.log("확인", user, account);

      if (account?.provider !== "credentials") {
        const { name } = user;
        const { providerAccountId, provider } = account;

        await connectDB();

        const socialUserCheck = await User.findOne({
          providerAccountId,
          provider,
        });

        if (!socialUserCheck) {
          const user = await new User({
            name,
            providerAccountId,
            provider,
          });
          const dbSave = await user.save();
          console.log("소셜회원정보 저장 완료" + dbSave);
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

      if (user) {
        token.user = user;
      }

      return token;
    },

    async session({ session, token }: { session: any; token: any }) {
      session.user = token.user;

      return session;
    },
  },
});

export { auth as getSession };
