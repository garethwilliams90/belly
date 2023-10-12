"use client"

import BoxBreathContainer from "@/components/BoxBreathContainer"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import SettingsDialog from "@/components/SettingsDialog"
import { useBoxBreath } from "@/components/boxBreathContext"
import { Button, buttonVariants } from "@/components/ui/button"

const Exercises = () => {
  const { rounds, isRunning, cancelExercise, messageRef } = useBoxBreath()
  return (
    <MaxWidthWrapper className="justify-evenly items-center">
      <div className="flex flex-col w-full items-center justify-center gap-24 relative">
        <div className="w-full flex flex-row items-center justify-between mt-6 px-4">
          <div className="text-muted-foreground font-semibold text-lg">
            Rounds: {rounds}
          </div>
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
