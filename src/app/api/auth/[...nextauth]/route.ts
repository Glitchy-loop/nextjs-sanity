import NextAuth, { NextAuthOptions } from "next-auth"
import GitHub from "next-auth/providers/github"
import { SanityAdapter, SanityCredentials } from "next-auth-sanity"
import { client } from "@/lib/sanity"

export const authOptions: NextAuthOptions = {
  providers: [
    // GitHub({
    //   clientId: process.env.GITHUB_CLIENT_ID!,
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    // }),
    SanityCredentials(client),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  adapter: SanityAdapter(client),
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
