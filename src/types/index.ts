import { Session } from "next-auth"

export interface NavItem {
  name: string
  href: string
}

export interface NavbarProps {
  open: boolean
  setOpen: (open: boolean) => void
}

export interface ProductReelProps {
  map(
    arg0: (product: any) => import("react").JSX.Element
  ): import("react").ReactNode | Iterable<import("react").ReactNode>
  _id: string
  price: number
  name: string
  slug: string
  categoryName: string
  imageUrl: string
}

export interface ProductPageProps {
  _id: string
  name: string
  images: any[]
  price: number
  description: string
  slug: string
  categoryName: string
  price_id: string
}

export interface ProductCartProps {
  name: string
  price: number
  description: string
  currency: string
  image: any
  price_id: string
}

export interface SessionProp {
  session: Session | null
}
