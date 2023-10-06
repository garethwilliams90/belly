import { cn, constructMetadata } from "@/lib/utils"
import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar"
import Providers from "@/components/Providers"

import "react-loading-skeleton/dist/skeleton.css"
import { Toaster } from "@/components/ui/toaster"

import "simplebar-react/dist/simplebar.min.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = constructMetadata()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Providers>
        <body
          className={cn("min-h-screen font-sans antialiased", inter.className)}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
            <Navbar />
            {children}
          </ThemeProvider>
        </body>
      </Providers>
    </html>
  )
}
