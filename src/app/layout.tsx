import type { Metadata } from "next"
import { Oswald as FontSans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "./providers/ThemeProvider"
import Header from "@/components/layout/Header"
import CartProvider from "./providers/CartProvider"
import ShoppingCartSidebar from "@/components/ShoppingCartSidebar"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Zyle - Ecommerce Platform",
  description: "Zyle is an ecommerce platform for selling and buying products.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CartProvider>
            <Header />
            <ShoppingCartSidebar />
            {children}
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
