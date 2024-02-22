import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";;

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
    async redirect({ url, baseUrl }) {
      console.log('redirect')
      return baseUrl
    },
    async session({ session, user, token }) {
      console.log('session')
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log('jwt')
      return token
    }
  }
}

export default authOptions;