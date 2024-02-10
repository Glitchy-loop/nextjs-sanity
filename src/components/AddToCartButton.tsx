"use client"

import { useShoppingCart } from "use-shopping-cart"
import { Button } from "./ui/button"
import { ProductCartProps } from "@/types"
import { urlFor } from "@/lib/sanity"

export default function AddToCartButton({
  name,
  description,
  price,
  currency,
  image,
  price_id,
}: ProductCartProps) {
  const { addItem, handleCartClick } = useShoppingCart()
  const product = {
    name,
    description,
    price,
    currency,
    image: urlFor(image).url(),
    price_id,
  }
  return (
    <Button
      onClick={() => {
        addItem(product), handleCartClick()
      }}
    >
      Add To Cart
    </Button>
  )
}
