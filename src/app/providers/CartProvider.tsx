"use client"

import { CartProvider as USCProvider } from "use-shopping-cart"

export default function CartProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY!}
      successUrl={`${process.env.NEXTAUTH_URL}/success`}
      cancelUrl={`${process.env.NEXTAUTH_URL}/cancel`}
      currency="EUR"
      billingAddressCollection={true}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </USCProvider>
  )
}
