export interface NavItem {
  name: string
  href: string
}

export interface NavbarProps {
  open: boolean
  setOpen: (open: boolean) => void
}
