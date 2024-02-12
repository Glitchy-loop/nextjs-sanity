import { SessionProp } from "@/types"
import { Button } from "./ui/button"
import { User } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

const AccountNav = ({ session }: SessionProp) => {
  return (
    <div className="flex">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex divide-x">
            <div
              // variant="outline"
              className="gap-y-1.5 h-16 w-20 flex-col border flex justify-center items-center cursor-pointer"
            >
              <User size={20} />
              <span className="hidden text-xs font-semibold sm:block">
                {session?.user?.name}
              </span>
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel> {session?.user?.email}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/dashboard" className="cursor-pointer">
              Dashboard
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default AccountNav
