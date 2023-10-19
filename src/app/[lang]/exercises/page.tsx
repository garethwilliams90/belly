"use client"

import BoxBreathContainer from "@/app/[lang]/components/BoxBreathContainer"
import MaxWidthWrapper from "@/app/[lang]/components/MaxWidthWrapper"
import SettingsDialog from "@/app/[lang]/components/SettingsDialog"
import { useBoxBreath } from "@/app/[lang]/components/boxBreathContext"
import { Button, buttonVariants } from "@/app/[lang]/components/ui/button"
import InformationDialog from "../components/InformationDialog"
import type { Locale } from "@/i18n.config"

import { useToast } from "@/app/[lang]/components/ui/use-toast"
import { ToastAction } from "../components/ui/toast"
import { AnimatePresence, motion } from "framer-motion"

const Exercises = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const {
    rounds,
    isRunning,
    cancelExercise,
    messageRef,
    isComplete,
    loading,
    progressControls,
  } = useBoxBreath()
  const { toast } = useToast()

  const language = `${lang}`

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Progress bar shows when runnning */}
      {(isRunning || loading) && (
        <motion.div
          animate={progressControls}
          className="h-1 w-1/12 bg-primary align-baseline"
        />
      )}
      <MaxWidthWrapper className="flex flex-col justify-center  items-center">
        <div className="flex flex-col w-full items-center justify-center gap-24 relative">
          <div className="w-full flex flex-row items-center justify-between mt-6 px-4">
            <div className="text-muted-foreground font-semibold text-lg">
              {language === "he" ? (
                <div>סיבובים: {rounds}</div>
              ) : (
                <div>Cycles: {rounds}</div>
              )}
            </div>

            {!isRunning && <InformationDialog lang={language} />}
          </div>

          <BoxBreathContainer lang={language} />
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
              {language === "he" ? <>לְבַטֵל</> : <>Cancel</>}
            </Button>
          ) : (
            <SettingsDialog lang={language} />
          )}
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default Exercises
