import MaxWidthWrapper from "@/app/[lang]/components/MaxWidthWrapper"
import { buttonVariants } from "@/app/[lang]/components/ui/button"
import { ArrowRight, Github, Linkedin, LinkedinIcon, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Logo from "./Logo.png"

import { Locale } from "@/i18n.config"
import { getDictionary } from "@/lib/dictionary"
import { Separator } from "@/components/ui/separator"

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-10 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="pb-10 flex flex-col items-center justify-center gap-10 ">
          <h1 className="text-5xl font-bold ">belly</h1>

          <Image src={Logo} alt={"bellyLogo"} width={100} height={100} />
        </div>
        <h1 className="max-w-4xl text-7xl font-bold  px-4">
          {page.home.takea}{" "}
          <span className="text-blue-600">{page.home.breath}</span>
        </h1>

        <p className="mt-5 max-w-prose text-zinc-500 sm:text-lg px-4">
          {page.home.subMessage}
        </p>

        {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}> */}
        <Link
          href={"/exercises"}
          // target="_blank"
          className={buttonVariants({
            size: "xl",
            className: "text-xl mt-8",
          })}
        >
          {page.home.buttonText}{" "}
          <ArrowRight className="ml-2 h-5 w-5"></ArrowRight>
        </Link>

        <div className="mt-20">
          <Separator></Separator>
          <div className="py-4">
            <p>By Gareth Williams</p>

            <div className="flex flex-row gap-4 py-4 items-center justify-center">
              <Link
                href={"https://github.com/garethwilliams90"}
                target="_blank"
              >
                <Github />
              </Link>
              <Link
                target="_blank"
                href={"https://www.linkedin.com/in/gareth-williams-0396ab205/"}
              >
                <Linkedin />
              </Link>
            </div>
            <p className="text-muted-foreground">wgareth90@gmail.com</p>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Value proposition section */}
      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="animate-homespin relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1.5 rotate-[30deg] bg-gradient-to-tr from-[#a477f2] to-[#4b54ff] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>
    </>
  )
}
