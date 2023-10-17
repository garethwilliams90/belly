"use client"

import { Hourglass, RefreshCcw, Settings, Wind } from "lucide-react"

import {
  CommandDialog,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/app/[lang]/components/ui/command"
import { useState } from "react"
import { buttonVariants } from "./ui/button"
import { Slider } from "./ui/slider"
import { useBoxBreath } from "./boxBreathContext"

const SettingsDialog = ({ lang }) => {
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
        <CommandList className="">
          <CommandGroup heading="Settings">
            <CommandItem className="flex flex-col gap-8">
              <div className="flex items-start">
                <Wind className="mr-2 h-4 w-4" />
                <span>
                  {lang === "he" ? <>אורך שאיפה</> : <>Breath Length: </>}{" "}
                  <span className="text-primary font-semibold">
                    {breathLength} sec
                  </span>
                </span>
              </div>
              <Slider
                defaultValue={[breathLength]}
                max={10}
                min={3}
                step={0.5}
                onValueChange={(e) => {
                  updateBreathLength(e[0])
                }}
              />
            </CommandItem>
            <CommandItem className="flex flex-col gap-8">
              <div className="flex ">
                <RefreshCcw className="mr-2 h-4 w-4" />
                <span>
                  {lang === "he" ? <>סיבובים</> : <>Rounds: </>}{" "}
                  <span className="text-primary font-semibold">{rounds}</span>
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
              />
            </CommandItem>

            <CommandSeparator />
            <CommandItem>
              <Hourglass className="mr-2 h-4 w-4" />
              <span>
                {lang === "he" ? <>אורך תרגיל</> : <>Exercise Time:</>}{" "}
                <span className="text-primary font-semibold">
                  {Math.round(exerciseTime)} min
                </span>
              </span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

export default SettingsDialog
