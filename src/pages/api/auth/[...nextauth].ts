import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { login } from "@/application/user/server/use-case";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email;
        const password = credentials?.password;

        if (!email || !password) return null;

        const user = await login({ email, password });

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return {
            id: user.id.toString(),
            email: user.email,
          };
        } else {
          return null;
        }
      },
    }),
  ],

  pages: {
    signIn: "/",
  },

  secret: process.env.JWT_SECRET,
};

export default NextAuth(authOptions);
