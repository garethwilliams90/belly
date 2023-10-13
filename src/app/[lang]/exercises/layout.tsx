import { BoxBreathProvider } from "@/app/[lang]/components/boxBreathContext"

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  // @ts-ignore
  return <BoxBreathProvider>{children}</BoxBreathProvider>
}
