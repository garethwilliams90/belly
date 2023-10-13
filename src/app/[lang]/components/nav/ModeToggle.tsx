"use client"

import { Computer, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/app/[lang]/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/[lang]/components/ui/dropdown-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          {" "}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="mx-2">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                <div className="w-full flex flex-row items-center justify-between">
                  Light
                  <Sun className="w-4 h-4" />
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                <div className="w-full flex flex-row items-center justify-between">
                  Dark
                  <Moon className="w-4 h-4" />
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                <div className="w-full flex flex-row items-center justify-between">
                  System
                  <Computer className="w-4 h-4" />
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TooltipTrigger>
        <TooltipContent>
          <p>Change theme</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default ModeToggle
