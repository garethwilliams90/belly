export const i18n = {
  defaultLocale: "en",
  locales: ["en", "he"],
  flags: ["🇬🇧", "🇮🇱"],
  localeCooke: "NEXT_LOCALE",
  localeDetector: () => {
    // Get the user's preferred language from the browser.
    const userPreferredLanguage = navigator.language

    // Create a Set object containing all of the supported languages in your application.
    const supportedLanguages = new Set(i18n.locales)

    // Use the Set.prototype.has() method to check if the user's preferred language is in the Set object.
    // @ts-ignore
    if (supportedLanguages.has(userPreferredLanguage)) {
      return userPreferredLanguage
    }

    // If the user's preferred language is not supported, return the default locale.
    return i18n.defaultLocale
  },
} as const

export type Locale = (typeof i18n)["locales"][number]
export type Flag = (typeof i18n)["flags"][number]
