import { SignInButton, SignOutButton } from "@/components/Buttonts"
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper"
import { client } from "@/lib/sanity"
import { getServerSession } from "next-auth"
import SignUpForm from "@/components/forms/SignUpForm"
import { authOptions } from "../api/auth/[...nextauth]/route"

async function getData() {
  const query = `*[_type == 'product' ] {
        name,
        slug,
        images
    }`
  const data = await client.fetch(query)

  return data
}

export default async function ShopPage() {
  const data = await getData()

  const session = await getServerSession(authOptions)

  if (session) {
    return (
      <div>
        <p>User: {session?.user?.name}</p>
        <SignOutButton />
      </div>
    )
  }

  return (
    <MaxWidthWrapper>
      <h1>Shop page</h1>
      <div>
        <SignInButton />
      </div>
      <SignUpForm />
    </MaxWidthWrapper>
  )
}
