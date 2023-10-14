import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/[lang]/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Square, Stethoscope } from "lucide-react"
import ShareButton from "./nav/ShareButton"
import { buttonVariants } from "./ui/button"

const InformationDialog = () => {
  return (
    <div
      className={buttonVariants({
        variant: "outline",
      })}
    >
      <Dialog>
        <DialogTrigger>
          <Stethoscope />
        </DialogTrigger>

        <DialogContent className="w-full flex items-center justify-center">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center justify-center gap-4 ">
              Box Breathing <Square />
            </DialogTitle>
            <DialogDescription className="flex items-center justify-center flex-col">
              <Tabs
                defaultValue="1"
                className="flex items-center justify-center flex-col gap-4"
              >
                <TabsContent value="1">
                  <div className="text-lg text-muted-foreground text-center">
                    Box breathing is a form of breath control where we follow
                    the pattern:{" "}
                    <h2 className="text-primary font-semibold mt-2">
                      (Inhale, Hold, Exhale, Hold)
                    </h2>
                  </div>
                </TabsContent>
                <TabsContent value="2">
                  <div className="text-lg text-muted-foreground">
                    Box breathing can help people cope with:
                    <div className="grid grid-cols-3 py-2 gap-2 items-center justify-center text-primary-foreground font-semibold ">
                      <div className="bg-primary rounded-full px-2 items-center justify-center flex shadow-sm shadow-black/40">
                        Stress
                      </div>
                      <div className="bg-orange-300 text-black rounded-full px-2 items-center justify-center flex shadow-sm shadow-black/40">
                        Focus
                      </div>
                      <div className="bg-blue-500 rounded-full px-2 items-center justify-center flex shadow-sm shadow-black/40">
                        Worry
                      </div>
                    </div>
                    <div className="grid grid-flow-col font-semibold text-black  gap-2 ">
                      <div className="bg-green-400 rounded-full px-2 items-center justify-center flex shadow-sm shadow-black/40">
                        Sleep
                      </div>
                      <div className="bg-primary rounded-full px-2 line-clamp-1 bg-red-400  items-center justify-center flex shadow-sm shadow-black/40">
                        Blood Pressure
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="3">
                  <div className="text-xl text-muted-foreground flex flex-col gap-4 items-center justify-center text-center">
                    <div>
                      Aim to{" "}
                      <span className="text-primary font-semibold">
                        slowly increase
                      </span>{" "}
                      your breath length as you continue box breathing.
                    </div>
                    <div>
                      Slowly you gain more control of your breath and maybe your
                      emotions too!
                    </div>
                  </div>
                </TabsContent>

                <DialogFooter className="flex items-center justify-center mt-6">
                  <TabsList className="w-full">
                    <TabsTrigger value="1">1</TabsTrigger>
                    <TabsTrigger value="2">2</TabsTrigger>
                    <TabsTrigger value="3">3</TabsTrigger>
                  </TabsList>
                </DialogFooter>
              </Tabs>
              <div className="border-t py-4  mt-12">
                <DialogFooter>
                  <DialogDescription key={3}>
                    <div className="flex flex-row gap-4">
                      <div>
                        If you enjoy this app, please share{" "}
                        <span className="text-primary font-semibold">
                          belly
                        </span>{" "}
                        with your friends and please complete more exercises!
                      </div>
                      <div className="">
                        <ShareButton />
                      </div>
                    </div>
                  </DialogDescription>
                </DialogFooter>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default InformationDialog
