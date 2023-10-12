import {
  LoginLink,
  RegisterLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import MobileNav from "./MobileNav"
import ModeToggle from "./ModeToggle"
import UserAccountNav from "./UserAccountNav"
import { buttonVariants } from "./ui/button"

const Navbar = () => {
  const { getUser } = getKindeServerSession()
  const user = getUser()

  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b  backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b ">
          <Link href="/" className="flex z-40 font-semibold">
            <span className="sm:text-lg">belly</span>
          </Link>

          <MobileNav isAuth={!!user} />

          <div className="hidden items-center space-x-4 sm:flex">
            <ModeToggle />
            {!user ? (
              <>
                {/* <Link
                  href="/pricing"
                  className={buttonVariants({ variant: "outline", size: "sm" })}
                >
                  Pricing
                </Link> */}
                <LoginLink
                  className={buttonVariants({ variant: "outline", size: "sm" })}
                >
                  Login
                </LoginLink>
                <RegisterLink className={buttonVariants({ size: "sm" })}>
                  Get Started <ArrowRight />
                </RegisterLink>
              </>
            ) : (
              <>
                <Link
                  href="/exercises"
                  className={buttonVariants({ variant: "outline", size: "sm" })}
                >
                  Start Breathing
                </Link>
                <UserAccountNav
                  name={
                    !user.given_name || !user.family_name
                      ? "Your Account"
                      : `${user.given_name} ${user.family_name}`
                  }
                  email={user.email ?? ""}
                  imageUrl={user.picture ?? ""}
                />
              </>
            )}
            {/* <KeyDialog /> */}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
