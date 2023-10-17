"use client"

import useSound from "use-sound"
import { Button } from "./ui/button"

const Sound = () => {
  const [play] = useSound("public/switch-on.mp3", {
    volume: 1,
    soundEnabled: true,
  })

  return (
    <Button
      onClick={() => {
        play()
      }}
    >
      Play
    </Button>
  )
}

export default Sound
