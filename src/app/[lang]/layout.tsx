import Navbar from "@/app/[lang]/components/Navbar"
import Providers from "@/app/[lang]/components/Providers"
import { cn, constructMetadata } from "@/lib/utils"
import { Inter } from "next/font/google"
import "./globals.css"
import { Locale, i18n } from "@/i18n.config"

import { Toaster } from "@/app/[lang]/components/ui/toaster"
import "react-loading-skeleton/dist/skeleton.css"

import { ThemeProvider } from "@/app/[lang]/components/theme-provider"
import "simplebar-react/dist/simplebar.min.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = constructMetadata()

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html
      lang={params.lang}
      suppressHydrationWarning
      className="overflow-visible"
    >
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
