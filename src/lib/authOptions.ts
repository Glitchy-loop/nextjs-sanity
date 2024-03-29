import { NextAuthOptions } from "next-auth"
import { SanityAdapter, SanityCredentials } from "next-auth-sanity"
import { client } from "./sanity"

export const authOptions: NextAuthOptions = {
  providers: [SanityCredentials(client)],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  adapter: SanityAdapter(client),
}
