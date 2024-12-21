import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Facebook from "next-auth/providers/facebook";
import Google from "next-auth/providers/google";
import Apple from "next-auth/providers/apple";
import { connectDB } from "./_util/db/db";
import { User } from "./_util/models/user";
import { compare } from "bcryptjs";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE__SECRET,
    }),
    Facebook({
      clientId: process.env.AUTH_FACEBOOK_ID,
      clientSecret: process.env.AUTH_FACEBOOK__SECRET,
    }),
    Apple({
      clientId: process.env.AUTH_APPLE_ID,
      clientSecret: process.env.AUTH_APPLE__SECRET,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const email = credentials.email;
        const password = credentials.password;
        if (!email || !password) {
          throw new CredentialsSignin("provide email and password");
        }
        await connectDB();
        const user = await User.findOne({ email }).select("+password +role");
        const isMatch = await compare(password, user.password);
        if (!user || !user.password || !isMatch) {
          throw new CredentialsSignin("Invalid user and password");
        }
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async session({ session, token }) {
      if (token?.sub && token?.role) {
        session.user.id = token.sub;
        session.user.role = token.role;
      }
      // session.userdata = {
      //   id: token.uid.userData._id,
      //   email: token.uid.userData.email,
      //   firstName: token.uid.userData.firstName,
      //   lastName: token.uid.userData.lastName,
      //   tel: token.uid.userData.tel,
      // };
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    signIn: async ({ user, account }) => {
      if (account?.provider === "google")
        try {
          const { email, name, image, id } = user;
          await connectDB();
          const isUser = await User.findOne({ email });
          if (!isUser) {
            await User.create({ email, name, image, authProviderId: id });
          } else {
            return true;
          }
        } catch (error) {
          throw new Error("Error while creating user");
        }
    },
    strategy: "jwt",
    secret: process.env.AUTH_SECRET,
    database: process.env.MONGO_URL
  },
});
