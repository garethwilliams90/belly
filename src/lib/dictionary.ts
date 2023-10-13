import "server-only"

import type { Locale } from "@/i18n.config"

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  he: () => import("@/dictionaries/he.json").then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
