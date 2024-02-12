import type { Metadata } from "next"
import { Oswald as FontSans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "./providers/ThemeProvider"
import Header from "@/components/layout/Header"
import CartProvider from "./providers/CartProvider"
import ShoppingCartSidebar from "@/components/ShoppingCartSidebar"
import NextAuthProvider from "./providers/NextAuthProvider"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/authOptions"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Zyle - Ecommerce Platform",
  description: "Zyle is an ecommerce platform for selling and buying products.",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Get the session from the server
  const session = await getServerSession(authOptions)

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
          <NextAuthProvider>
            <CartProvider>
              <Header session={session || null} />
              <ShoppingCartSidebar />
              {children}
            </CartProvider>
          </NextAuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
