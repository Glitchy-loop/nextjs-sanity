// app/api/sanity/signUp/route.ts
import { client } from "@/lib/sanity"
import { signUpHandler } from "next-auth-sanity"

export const POST = signUpHandler(client)
