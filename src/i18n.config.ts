export const i18n = {
  defaultLocale: "en",
  locales: ["en", "he"],
  flags: ["🇬🇧", "🇮🇱"],
} as const

export type Locale = (typeof i18n)["locales"][number]
export type Flag = (typeof i18n)["flags"][number]
