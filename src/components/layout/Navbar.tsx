import Logo from "../Logo"
import DesktopMenu from "./DesktopMenu"
import MobileMenu from "./MobileMenu"
import CartButton from "../CartButton"
import { SessionProp } from "@/types"
import AccountNav from "../AccountNav"
import Link from "next/link"

const Navbar = ({ session }: SessionProp) => {
  return (
    <div className="flex items-center justify-between w-full">
      {/* Left side of the navbar */}
      <DesktopMenu />
      <MobileMenu />

      {/* Center of the navbar */}
      <Logo />

      {/* Right side of the navbar */}
      <div className="flex-1 flex items-center justify-end">
        <CartButton />
        {session && <AccountNav session={session} />}
        {!session && <Link href="/">Login</Link>}
      </div>
    </div>
  )
}

export default Navbar
