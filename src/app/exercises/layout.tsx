import { BoxBreathProvider } from "@/components/boxBreathContext"

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <BoxBreathProvider>{children}</BoxBreathProvider>
}
