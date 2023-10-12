"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useBoxBreath } from "./boxBreathContext"

const BoxBreathContainer = () => {
  const {
    rounds,
    breathLength,
    exerciseTime,
    runExercise,
    completeExercise,
    cancelExercise,
    controls,
    messageControls,
    isRunning,
    boxMessage,
  } = useBoxBreath()

  return (
    <>
      <AnimatePresence>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => runExercise(rounds, breathLength * 4)}
          className=" bg-blue-600 rounded-3xl w-11/12 sm:w-2/3 md:w-1/2 aspect-square flex items-center justify-center shadow-lg shadow-primary/50 relative overflow-visible"
        >
          <motion.div
            layout
            animate={controls}
            className="h-1/6 w-1/6 bg-blue-300 absolute top-0 flex left-0 rounded-3xl shadow-lg shadow-black/30 items-center justify-center"
          >
            {/* <RotateCcw
              strokeWidth={2}
              color="black"
              className="w-3/4 h-full animate-spin-slow"
            /> */}
          </motion.div>
          <div className="flex flex-col items-center justify-center ">
            <motion.div
              animate={messageControls}
              className="font-semibold text-2xl sm:text-3xl text-black"
            >
              {boxMessage}
            </motion.div>
            {/* {isRunning && (
              <div className="text-muted font-medium">for {breathLength}</div>
            )} */}
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default BoxBreathContainer
