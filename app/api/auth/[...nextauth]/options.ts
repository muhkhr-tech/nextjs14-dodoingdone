import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "text", placeholder: "me@example.com", required: true },
        password: { label: "Password", type: "password", required: true }
      },
      async authorize(credentials, req) {
        console.log(credentials,'credentials')
        // const user:any = await db.select().from(users).where(eq(users.email, credentials?.email))
        const user = await db.query.users.findFirst({
          where: eq(users.email, credentials?.email)
        })
        console.log(user,'userrrrrrr==')
        
        // return null
  
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null
  
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  // pages: {
  //   signIn: 'auth/signin'
  // }
  // callbacks: {
  //   async signIn({ user, account, profile, email, credentials }) {
  //     return true
  //   },
  //   async redirect({ url, baseUrl }) {
  //     console.log('redirect')
  //     return baseUrl
  //   },
  //   async session({ session, user, token }) {
  //     console.log('session')
  //     return session
  //   },
  //   async jwt({ token, user, account, profile, isNewUser }) {
  //     console.log('jwt')
  //     return token
  //   }
  // }
}

export default authOptions;