"use client"

import { AnimationControls, useAnimation } from "framer-motion"
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"
import { useToast } from "./ui/use-toast"
import { ToastClose, ToastTitle } from "@radix-ui/react-toast"
import { Sprout } from "lucide-react"

// Define BoxBreath
const BoxBreath = createContext<
  | {
      boxMessage: string
      rounds: number
      breathLength: number
      exerciseTime: number
      controls: AnimationControls
      messageControls: AnimationControls
      progressControls: AnimationControls
      updateBreathLength: (e: number) => void
      updateRounds: (e: number) => void
      runExercise: (rounds: number, boxLength: number) => void
      isRunning: boolean
      isComplete: boolean
      loading: boolean
      cancelExercise: (ref: React.MutableRefObject<boolean>) => void
      completeExercise: (wasCancelled: boolean) => void
      messageRef: React.MutableRefObject<boolean>
    }
  | undefined
>(undefined) // Provide an initial value of undefined

// Export a custom hook to access the BoxBreath context
export const useBoxBreath = () => {
  const context = useContext(BoxBreath)
  if (!context) {
    throw new Error("useBoxBreath must be used within a BoxBreathProvider")
  }
  return context
}

// Define your BoxBreathProvider component
// @ts-ignore
export const BoxBreathProvider: React.FC = ({ children, lang }) => {
  const controls = useAnimation()
  const { toast } = useToast()

  const messageControls = useAnimation()
  const progressControls = useAnimation()
  const [loading, setLoading] = useState<boolean>(false)
  const [boxMessage, setBoxMessage] = useState<string>(
    lang === "he" ? "לחצו כדי להתחיל" : "Press To Start"
  )
  const [wasCancelled, setWasCancelled] = useState<boolean>(false)
  const [isRunning, setIsRunning] = useState<boolean>(false)
  const [isComplete, setIsComplete] = useState<boolean>(false)
  const [breathLength, setBreathLength] = useState<number>(5)
  const [rounds, setRounds] = useState<number>(3)
  const [exerciseTime, setExerciseTime] = useState<number>(
    (rounds * breathLength * 4) / 60
  )
  const animationRef = useRef<AnimationControls | null>(null)
  const messageRef = useRef<boolean>(false)

  useEffect(() => {
    setExerciseTime((rounds * breathLength * 4) / 60)
  }, [rounds, breathLength])

  const animateSquare = async (rounds: number, boxLength: number) => {
    animationRef.current = controls

    await controls.start({
      x: ["0%", "500%", "500%", "0%", "0%"],
      y: ["0%", "0%", "500%", "500%", "0%"],
      transition: {
        duration: boxLength,
        ease: "easeInOut",
        repeat: rounds - 1,
      },
    })
  }

  const messageChanges = async (boxLength: number) => {
    for (let i = 0; i < rounds; i++) {
      // Check if the message changes function has been cancelled
      if (messageRef.current) {
        return
      }

      const changeMessage = async (rounds: number) => {
        // Change the message
        setBoxMessage("In")

        // Wait the breathLength time
        await new Promise((resolve) => setTimeout(resolve, breathLength * 1000))

        // Check if the message changes function has been cancelled
        if (messageRef.current) {
          return
        }

        // Change the message
        setBoxMessage("Hold")

        // Wait the breathLength time
        await new Promise((resolve) => setTimeout(resolve, breathLength * 1000))

        // Check if the message changes function has been cancelled
        if (messageRef.current) {
          return
        }

        // Change the message
        setBoxMessage("Out")

        // Wait the breathLength time
        await new Promise((resolve) => setTimeout(resolve, breathLength * 1000))

        // Check if the message changes function has been cancelled
        if (messageRef.current) {
          return
        }

        // Change the message
        setBoxMessage("Hold")

        // Wait the breathLength time
        await new Promise((resolve) => setTimeout(resolve, breathLength * 1000))
      }

      messageControls.start({
        scale: [1, 2.2, 2.2, 1, 1],
        transition: {
          duration: boxLength,
          ease: "easeInOut",
          repeat: 0,
        },
      }),
        await changeMessage(rounds)
    }
  }

  const updateBreathLength = (e: number) => {
    setBreathLength(e)
  }

  const updateRounds = (e: number) => {
    setRounds((prevVal) => e)
  }

  const runExercise = async (rounds: number, boxLength: number) => {
    setIsComplete(false)
    setWasCancelled(false)
    // Wait the breathLength time
    setLoading(true)

    await new Promise((resolve) => setTimeout(resolve, breathLength * 1000))
    setLoading(false)
    setIsRunning(true)

    progressControls.start({
      scaleX: [0, 12],
      transition: {
        duration: rounds * boxLength,
        ease: "linear",
      },
    })

    messageRef.current = false

    messageChanges(boxLength)
    await animateSquare(rounds, boxLength)

    setIsRunning(false)

    // complete with cancelled data
    completeExercise()
  }

  const cancelMessageChanges = () => {
    // Cancel the messageChanges function
    messageRef.current = true

    // Stop the message controls
    messageControls.stop()
  }

  const cancelExercise = (ref: React.MutableRefObject<boolean>) => {
    if (animationRef.current) {
      animationRef.current.stop()
    }

    controls.start({
      x: "0%",
      y: "0%",
    })
    messageControls.set({ scale: [1] })
    // Reset the message controls
    messageControls.stop()
    // Cancel the message changes
    cancelMessageChanges()

    setIsRunning(false)
    setIsComplete(false)
    setWasCancelled(true)
  }

  const completionToast = () => {
    return toast({
      duration: 7000,
      // @ts-ignore
      title: (
        <div className="flex justify-between mb-2 w-full text-lg">
          <ToastTitle className="text-primary font-semibold">
            Exercise Complete
          </ToastTitle>
          <Sprout />
        </div>
      ),
      description: `You completed ${rounds} rounds this time. Keep up the good work.`,
      action: (
        <ToastClose className="border rounded-lg px-4 py-2 ">Close</ToastClose>
      ),
    })
  }

  const completeExercise = () => {
    if (!wasCancelled) {
      console.log("complete")
      setIsComplete((prev) => true)
      completionToast()
    } else {
      console.log("cancelled")

      setIsComplete((prev) => false)
    }

    progressControls.set({ scale: [0] })

    lang === "he"
      ? setBoxMessage("לחצו כדי להתחיל")
      : setBoxMessage("Press To Start")
  }

  // Provide the cart state and functions through boxBreath.Provider
  return (
    <BoxBreath.Provider
      value={{
        boxMessage,
        rounds,
        breathLength,
        exerciseTime,
        controls,
        messageControls,
        progressControls,
        updateBreathLength,
        updateRounds,
        runExercise,
        isRunning,
        isComplete,
        loading,
        cancelExercise,
        completeExercise,
        messageRef,
      }}
    >
      {children}
    </BoxBreath.Provider>
  )
}
