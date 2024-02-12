"use client"

import { navItems } from "@/constants"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

const DesktopMenu = () => {
  const pathName = usePathname()
  return (
    <nav className="hidden md:flex justify-start flex-1">
      {navItems.map((item, index) => (
        <Link
          href={item.href}
          key={index}
          className={cn("mr-4 cursor-pointer uppercase text-sm font-semibold", {
            "text-primary": pathName === item.href,
          })}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}

export default DesktopMenu
