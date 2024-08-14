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
        const { email, password } = credentials;

        await connectDB();

        const user = await User.findOne({ email }).select(
          "+id +name +image +phone +role +profile"
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
          position_tag: user.position_tag,
          introduce: user.introduce,
          my_category: user.my_category,
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
      if (account?.provider !== "credentials") {
        const { name, position_tag, introduce, my_category } = user;
        const { providerAccountId, provider } = account;

        if (!providerAccountId) {
          throw new CredentialsSignin(
            "로그인에 실패했습니다. 다시 시도해주세요."
          );
        }

        await connectDB();

        let socialUserCheck = await User.findOne({ providerAccountId });

        if (!socialUserCheck) {
          const user = await new User({
            name,
            position_tag,
            introduce,
            my_category,
            providerAccountId,
            provider,
          });
          socialUserCheck = await user.save();
          console.log("소셜회원정보 저장 완료" + socialUserCheck);
        }

        user.id = socialUserCheck._id;
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
        token.id = user.id;
        token.account = account;
      }

      return token;
    },

    async session({ session, token }: { session: any; token: any }) {
      session.user.id = token.id;
      session.account = token.account;

      return session;
    },
  },
});

export { auth as getSession };
