import MaxWidthWrapper from "./MaxWidthWrapper"
import Navbar from "./Navbar"

const Header = () => {
  return (
    <header className="">
      <MaxWidthWrapper className="h-16 flex items-center">
        <Navbar />
      </MaxWidthWrapper>
    </header>
  )
}

export default Header
