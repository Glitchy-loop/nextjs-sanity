"use client"

import { useState } from "react"
import { navItems } from "@/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "../ThemeToggle"
import React from "react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Hamburger from "./Hamburger"

const MobileMenu = () => {
  const [open, setOpen] = useState(false)
  const pathName = usePathname()

  return (
    // Mobile menu

    <div className="md:hidden flex-1">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          {/* Hamburger */}
          <Hamburger open={open} setOpen={setOpen} />
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader className="">
            <SheetTitle>Zyle</SheetTitle>
            <SheetDescription>E commerce platform</SheetDescription>
          </SheetHeader>

          <div className="flex flex-col h-full justify-between">
            <div className="grid gap-4 py-4 uppercase text-4xl">
              {/* Nav items */}
              {navItems.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "cursor-pointer hover:text-primary transition-colors duration-300 ease-in-out",
                    pathName === item.href
                      ? "text-primary"
                      : "text-secondary-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Theme toggle */}
            <div className="self-start pb-16">
              <ThemeToggle />
            </div>
          </div>
          {/* Sheet footer */}
          <SheetFooter>
            <SheetClose asChild onClick={() => setOpen(false)}></SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileMenu
