import Navbar from "@/components/Navbar"
import Providers from "@/components/Providers"
import { cn, constructMetadata } from "@/lib/utils"
import { Inter } from "next/font/google"
import "./globals.css"

import { Toaster } from "@/components/ui/toaster"
import "react-loading-skeleton/dist/skeleton.css"

import { ThemeProvider } from "@/components/theme-provider"
import "simplebar-react/dist/simplebar.min.css"

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
