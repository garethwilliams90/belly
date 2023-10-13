"use client"

import { ArrowRight, Languages, Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import ModeToggle from "./ModeToggle"
import { Button, buttonVariants } from "./ui/button"
import LanguageToggle from "./LanguageToggle"
import { useBoxBreath } from "./boxBreathContext"
import ShareButton from "./ShareButton"

const MobileNav = ({ isAuth }: { isAuth: boolean }) => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const { isRunning } = useBoxBreath()

  const toggleOpen = () => setOpen((prev) => !prev)

  const pathname = usePathname()

  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
      toggleOpen()
    }
  }

  return (
    <>
      <div className="sm:hidden">
        <Menu
          onClick={toggleOpen}
          className="relative z-50 h-5 w-5 text-primary-700  "
        />

        {isOpen ? (
          <div className="fixed animate-in slide-in-from-top-5 fade-in-20 inset-0 z-0 w-full ">
            <ul className="absolute border-b   w-full gap-3 px-10 pt-20 pb-8 bg-background flex">
              <li>
                <ModeToggle />
              </li>
              <li>
                <LanguageToggle />
              </li>
              <li>
                <ShareButton />
              </li>
              {/* <li className="my-3 h-px w-full bg-gray-300" /> */}
              {!isAuth ? (
                <>
                  {/* <li>
                <Link
                  onClick={() => closeOnCurrent("/sign-up")}
                  className="flex items-center w-full font-semibold text-green-600"
                  href="/sign-up"
                >
                  Get started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </li> */}
                  {/* <li className="my-3 h-px w-full bg-gray-300" /> */}
                  {/* <li>
                <Link
                  onClick={() => closeOnCurrent("/sign-in")}
                  className="flex items-center w-full font-semibold"
                  href="/sign-in"
                >
                  Sign in
                </Link>
              </li>
              <li className="my-3 h-px w-full bg-gray-300" /> */}
                  {/* <li>
                <Link
                  onClick={() => closeOnCurrent("/pricing")}
                  className="flex items-center w-full font-semibold"
                  href="/pricing"
                >
                  Pricing
                </Link>
              </li> */}
                </>
              ) : (
                <>
                  <li>
                    <Link
                      onClick={() => closeOnCurrent("/exercises")}
                      className="flex items-center w-full font-semibold"
                      href="/dashboard"
                    >
                      Start Breathing
                    </Link>
                  </li>
                  <li className="my-3 h-px w-full bg-gray-300" />
                  <li>
                    <Link
                      className="flex items-center w-full font-semibold"
                      href="/sign-out"
                    >
                      Sign out
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        ) : null}
      </div>
    </>
  )
}

export default MobileNav
