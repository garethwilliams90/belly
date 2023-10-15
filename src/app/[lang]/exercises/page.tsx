"use client"

import BoxBreathContainer from "@/app/[lang]/components/BoxBreathContainer"
import MaxWidthWrapper from "@/app/[lang]/components/MaxWidthWrapper"
import SettingsDialog from "@/app/[lang]/components/SettingsDialog"
import { useBoxBreath } from "@/app/[lang]/components/boxBreathContext"
import { Button, buttonVariants } from "@/app/[lang]/components/ui/button"
import InformationDialog from "../components/InformationDialog"

const Exercises = () => {
  const { rounds, isRunning, cancelExercise, messageRef, isComplete } =
    useBoxBreath()

  return (
    <MaxWidthWrapper className="justify-evenly items-center">
      <div className="flex flex-col w-full items-center justify-center gap-24 relative">
        <div className="w-full flex flex-row items-center justify-between mt-6 px-4">
          <div className="text-muted-foreground font-semibold text-lg">
            Cycles: {rounds}
          </div>
          {!isRunning && <InformationDialog />}
        </div>

        <BoxBreathContainer />
        {isRunning ? (
          <Button
            className={buttonVariants({
              size: "lg",
              className:
                "text-xl text-muted-foreground w-1/2 sm:w-1/3 md:w-1/4 ",
              variant: "outline",
            })}
            onClick={() => cancelExercise(messageRef)}
          >
            Cancel
          </Button>
        ) : (
          <SettingsDialog />
        )}
      </div>
    </MaxWidthWrapper>
  )
}

export default Exercises
