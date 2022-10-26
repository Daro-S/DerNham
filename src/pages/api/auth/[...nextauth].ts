import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
// import AppleProvider from "next-auth/providers/apple";
import { handleAuth } from "~/services/auth";
import { api } from "~/services/api";
import { isTokenExpired } from "~/utils";

export const authOptions: NextAuthOptions = {
  secret: process.env.JWT_SECRET,
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // AppleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (user && account) {
        const resp = await handleAuth(account);
        if (resp) {
          token.accessToken = resp.accessToken;
          token.name =
            `${resp.user.profile.firstName} ${resp.user.profile.lastName}`.trim();
          token.email = resp.user.email;
          token.picture = resp.user.profile.uploadImage?.path;
        }
      }

      return token;
    },
    session({ session, token }) {
      if (!token.accessToken || isTokenExpired(token.accessToken)) {
        throw new Error("Unauthorized");
      }

      session.accessToken = token.accessToken as string;

      return session;
    },
  },
};

export default NextAuth(authOptions);
