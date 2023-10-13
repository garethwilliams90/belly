"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { i18n } from "@/i18n.config"
import { buttonVariants } from "../ui/button"

export default function LocaleSwitcher() {
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/"
    const segments = pathName.split("/")
    segments[1] = locale
    return segments.join("/")
  }

  return (
    <ul className="flex flex-col gap-3">
      {i18n.locales.map((locale, idx) => {
        const flag = i18n.flags[idx]
        return (
          <li
            key={locale}
            className={buttonVariants({
              variant: "outline",
            })}
          >
            <Link
              href={redirectedPathName(locale)}
              className="flex items-center justify-center gap-x-2 py-2 text-xl"
            >
              <span className="font-bold">{locale}</span>

              <span className="text-2xl ">{flag}</span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
