import { Languages } from "lucide-react"
import { Button } from "@/app/[lang]/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/app/[lang]/components/ui/dropdown-menu"

import LocaleSwitcher from "./LocaleSwitcher"

export function LanguageToggle() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Languages />
          <span className="sr-only">Change Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="mx-2 p-4 items-center justify-center"
      >
        <LocaleSwitcher />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LanguageToggle
