import { Session } from "next-auth"
import MaxWidthWrapper from "./MaxWidthWrapper"
import Navbar from "./Navbar"
import { SessionProp } from "@/types"

const Header = ({ session }: SessionProp) => {
  return (
    <header className="border-b">
      <MaxWidthWrapper className="h-16 flex items-center">
        <Navbar session={session} />
      </MaxWidthWrapper>
    </header>
  )
}

export default Header
