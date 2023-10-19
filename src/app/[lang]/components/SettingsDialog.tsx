"use client"

import { Hourglass, RefreshCcw, Settings, Wind } from "lucide-react"

import {
  CommandDialog,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/app/[lang]/components/ui/command"
import { useState } from "react"
import { buttonVariants } from "./ui/button"
import { Slider } from "./ui/slider"
import { useBoxBreath } from "./boxBreathContext"

const SettingsDialog = ({ lang }: { lang: string }) => {
  const [open, setOpen] = useState<boolean>(false)

  const {
    rounds,
    breathLength,
    exerciseTime,
    updateBreathLength,
    updateRounds,
    runExercise,
    completeExercise,
    cancelExercise,
  } = useBoxBreath()

  const handleClick = () => {
    setOpen((open) => !open)
  }

  return (
    <>
      <p
        className={buttonVariants({
          size: "lg",
          className: "text-xl text-muted-foreground w-1/2 sm:w-1/3 md:w-1/4 ",
          variant: "outline",
        })}
        onClick={handleClick}
      >
        <Settings className="mr-2 h-5 w-5" />
        {lang === "he" ? <>הגדרות</> : <>Settings</>}
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandGroup className="font-semibold flex flex-col h-full justify-center ">
          <div className="flex flex-col gap-4 mt-4">
            <CommandItem className="flex flex-col gap-8 text-2xl ">
              <div className="flex justify-center items-center">
                <Wind className="mr-2 h-4 w-4" />
                <span>
                  {lang === "he" ? <>אורך שאיפה</> : <>Breath Length: </>}{" "}
                  <span className="text-primary font-bold">
                    {breathLength} s
                  </span>
                </span>
              </div>
              <Slider
                defaultValue={[breathLength]}
                max={10}
                min={4}
                step={0.5}
                onValueChange={(e) => {
                  updateBreathLength(e[0])
                }}
                className="h-10  bg-background rounded-md px-2"
              />
            </CommandItem>
            <CommandItem className="flex flex-col gap-8 text-2xl ">
              <div className="flex justify-center items-center">
                <RefreshCcw className="mr-2 h-4 w-4" />
                <span>
                  {lang === "he" ? <>סיבובים</> : <>Rounds: </>}{" "}
                  <span className="text-primary font-bold">{rounds}</span>
                </span>
              </div>
              <Slider
                defaultValue={[rounds]}
                max={10}
                min={1}
                step={1}
                onValueChange={(e) => {
                  updateRounds(e[0])
                }}
                className="h-10  bg-background rounded-md px-2"
              />
            </CommandItem>

            <CommandSeparator />
            <CommandItem className="text-2xl flex items-center justify-center">
              <Hourglass className="mr-2 h-4 w-4" />
              <span>
                {lang === "he" ? <>אורך תרגיל</> : <>Exercise Time:</>}{" "}
                <span className="text-primary font-semibold">
                  {Math.round(exerciseTime)} min
                </span>
              </span>
            </CommandItem>
          </div>
        </CommandGroup>
      </CommandDialog>
    </>
  )
}

export default SettingsDialog
