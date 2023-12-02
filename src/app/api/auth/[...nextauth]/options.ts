import { NextAuthOptions, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    // async signIn({ user }: { user: AdapterUser | User }) {
    //   try {
    //     if (user) {
    //       const db = new Database();
    //       await db.connectToDatabase();
    //       await db.user.createUser(
    //         user.name as string,
    //         user.email as string,
    //         user.image as string
    //       );
    //     }
    //     return true;
    //   } catch (error: any) {
    //     console.log("Error checking if user exists: ", error.message);
    //     return false;
    //   }
    // },
  },
};
