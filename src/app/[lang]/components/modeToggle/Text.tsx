import { Locale } from "@/i18n.config"
import { getDictionary } from "@/lib/dictionary"

export async function LightText({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const { comps } = await getDictionary(lang)

  return <div>{comps.ModeToggle.Light}</div>
}
