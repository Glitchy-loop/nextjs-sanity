import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/" className="flex-1 flex justify-center text-center">
      <div className="flex justify-center text-center flex-1 uppercase tracking-logo text-lg cursor-pointer">
        Zyle
      </div>
    </Link>
  )
}

export default Logo
