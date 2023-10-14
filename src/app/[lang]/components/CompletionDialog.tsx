import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/[lang]/components/ui/dialog"
import ShareButton from "./nav/ShareButton"
import { DialogOverlay, DialogPortal } from "@radix-ui/react-dialog"
import { ArrowLeft, ArrowRight, ArrowRightCircle } from "lucide-react"
import { Button, buttonVariants } from "./ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"

const CompletionDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className={buttonVariants({})}>Complete Exercise</Button>
      </DialogTrigger>

      <DialogContent className="w-full flex items-center justify-center">
        <DialogHeader>
          <DialogTitle className="text-2xl">How do you feel?</DialogTitle>
          <DialogDescription className="flex items-center justify-center flex-col">
            <Tabs
              defaultValue="1"
              className="flex items-center justify-center flex-col gap-4"
            >
              <TabsContent value="1">
                <div className="text-xl text-muted-foreground">
                  Well done! You completed an exercise, take a second to notice
                  how you feel.
                </div>
              </TabsContent>
              <TabsContent value="2">
                <div className="text-xl text-muted-foreground">
                  As you continue to complete box breathing you will begin to
                  gain more control over your breath and your emotions!
                </div>
              </TabsContent>
              <DialogFooter className="flex items-center justify-center ">
                <TabsList className="w-full">
                  <TabsTrigger value="1">1</TabsTrigger>
                  <TabsTrigger value="2">2</TabsTrigger>
                </TabsList>
              </DialogFooter>
            </Tabs>
            <div className="border-t py-4  mt-4">
              <DialogFooter>
                <DialogDescription key={3}>
                  <div className="flex flex-row gap-4">
                    <div>
                      If you enjoyed this exercise, please share{" "}
                      <span className="text-primary font-medium">belly</span>{" "}
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
  )
}

export default CompletionDialog
