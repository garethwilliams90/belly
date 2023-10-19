import { AnimatePresence, motion } from "framer-motion"
import { Rotate3D } from "lucide-react"
import { useBoxBreath } from "./boxBreathContext"
import { useToast } from "./ui/use-toast"

const BoxBreathContainer = ({ lang }: { lang: string }) => {
  const {
    rounds,
    breathLength,
    runExercise,
    completeExercise,
    cancelExercise,
    controls,
    messageControls,
    isRunning,
    loading,
    isComplete,
    boxMessage,
  } = useBoxBreath()

  const { toast } = useToast()

  return (
    <>
      <AnimatePresence>
        <motion.div
          whileHover={!isRunning || !loading ? { scale: 1.05 } : {}}
          whileTap={!isRunning || !loading ? { scale: 0.95 } : {}}
          onClick={
            isRunning || loading
              ? () => {}
              : () => runExercise(rounds, breathLength * 4)
          }
          className=" bg-indigo-600 rounded-3xl w-11/12 sm:w-2/3 md:w-1/2 aspect-square flex items-center justify-center shadow-lg shadow-primary/50 relative overflow-hidden"
        >
          <motion.div
            animate={controls}
            className="h-1/6 w-1/6 bg-indigo-500 absolute top-0 flex left-0 rounded-3xl shadow-lg shadow-black/30 items-center justify-center"
          />

          <div className="flex flex-col items-center justify-center ">
            <motion.div
              animate={messageControls}
              className="font-semibold text-2xl sm:text-3xl text-black"
            >
              {loading ? (
                <div className="flex flex-col justify-center items-center gap-4">
                  <Rotate3D className="animate-spin-slow w-10 h-10" />
                  <h1 className="font-medium text text-xs animate-bounce">
                    {lang === "he" ? (
                      <>אנחנו מכינים את התרגיל שלך</>
                    ) : (
                      <>Preparing your exercise...</>
                    )}
                  </h1>
                </div>
              ) : !isRunning ? (
                <div className="animate-pulse">{boxMessage}</div>
              ) : (
                boxMessage
              )}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default BoxBreathContainer
