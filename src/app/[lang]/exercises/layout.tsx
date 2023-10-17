import { BoxBreathProvider } from "@/app/[lang]/components/boxBreathContext"
import { Locale } from "@/i18n.config"

export default async function Layout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  // @ts-ignore
  return <BoxBreathProvider lang={lang}>{children}</BoxBreathProvider>
}
