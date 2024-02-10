import { ShoppingBag } from "lucide-react"
import Logo from "../Logo"
import { Button } from "../ui/button"
import DesktopMenu from "./DesktopMenu"
import MobileMenu from "./MobileMenu"
import CartButton from "../CartButton"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full">
      {/* Left side of the navbar */}
      <DesktopMenu />
      <MobileMenu />

      {/* Center of the navbar */}
      <Logo />

      {/* Right side of the navbar */}
      <CartButton />
    </div>
  )
}

export default Navbar
