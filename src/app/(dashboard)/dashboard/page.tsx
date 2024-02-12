import { SignOutButton } from "@/components/Buttons"
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper"
import { authOptions } from "@/lib/authOptions"
import { getServerSession } from "next-auth"

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  return (
    <MaxWidthWrapper>
      {session && (
        <div>
          <p>User: {session?.user?.name}</p>
          <SignOutButton />
        </div>
      )}
    </MaxWidthWrapper>
  )
}
