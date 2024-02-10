"use client"

import { ShoppingBag } from "lucide-react"
import { Button } from "./ui/button"
import { useShoppingCart } from "use-shopping-cart"

export default function CartButton() {
  const { handleCartClick } = useShoppingCart()
  return (
    <div className="flex-1 flex justify-end" onClick={handleCartClick}>
      <div className="flex divide-x">
        <Button variant="outline" className="gap-y-1.5 h-16 w-20 flex flex-col">
          <ShoppingBag size={20} />
          <span className="hidden text-xs font-semibold sm:block">Cart</span>
        </Button>
      </div>
    </div>
  )
}
