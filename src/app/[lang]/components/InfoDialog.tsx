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
import { getDictionary } from "@/lib/dictionary"
import { Locale } from "@/i18n.config"

const InfoDialog = async ({
  params: { lang },
}: {
  params: { lang: Locale }
}) => {
  const { page, info } = await getDictionary(lang)

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
              {page.box.title}
              <Square />
            </DialogTitle>
            <DialogDescription className="flex items-center justify-center flex-col">
              <Tabs
                defaultValue="1"
                className="flex items-center justify-center flex-col gap-4"
              >
                <TabsContent value="1">
                  <div className="text-lg text-muted-foreground text-center">
                    {lang === "he" ? (
                      <>
                        {" "}
                        נשימה מרובעת היא טכניקת נשימה מודעת לפי סדר קבוע שחוזר
                        על עצמו - שאיפה, החזקת האוויר בפנים לכמה שניות, נשיפה,
                        החזקת האוויר - ושוב מההתחלה
                      </>
                    ) : (
                      <>
                        Box breathing is a form of breath control where we
                        follow the pattern:
                      </>
                    )}{" "}
                    <div className="text-primary font-semibold mt-2">
                      (Inhale, Hold, Exhale, Hold)
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="2">
                  <div className="text-lg text-muted-foreground">
                    {lang === "he" ? (
                      <>:טכניקת הנשימה המרובעת יכולה לעזור בהתמודדות עם</>
                    ) : (
                      <>Box breathing can help people cope with:</>
                    )}
                    <div className="grid grid-cols-3 py-2 gap-2 items-center justify-center text-primary-foreground font-semibold ">
                      <div className="bg-primary rounded-full px-2 items-center justify-center flex shadow-sm shadow-black/40">
                        {lang === "he" ? <>לחץ</> : <>Stress</>}
                      </div>
                      <div className="bg-orange-300 text-black rounded-full px-2 items-center justify-center flex shadow-sm shadow-black/40">
                        {lang === "he" ? <>דאגות</> : <>Focus</>}
                      </div>
                      <div className="bg-blue-500 rounded-full px-2 items-center justify-center flex shadow-sm shadow-black/40">
                        {lang === "he" ? <>קשיי ריכוז</> : <>Worry</>}
                      </div>
                    </div>
                    <div className="grid grid-flow-col font-semibold text-black  gap-2 ">
                      <div className="bg-green-400 rounded-full px-2 items-center justify-center flex shadow-sm shadow-black/40">
                        {lang === "he" ? <>שינה</> : <>Sleep</>}
                      </div>
                      <div className="bg-primary rounded-full px-2 line-clamp-1 bg-red-400  items-center justify-center flex shadow-sm shadow-black/40">
                        {lang === "he" ? <>לחץ דם</> : <>Blood Pressure</>}
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="3">
                  <div className="text-xl text-muted-foreground flex flex-col gap-4 items-center justify-center text-center">
                    {lang === "he" ? (
                      <>
                        נסו בהדרגה להעלות את אורך השאיפה/נשיפה. עם הזמן תרגישו
                        יותר בשליטה על הנשימה שלכם, ובתקווה שגם על התחושות
                        שמציפות אתכם ברגעי מתח
                      </>
                    ) : (
                      <>
                        <div>
                          Aim to{" "}
                          <span className="text-primary font-semibold">
                            slowly increase
                          </span>{" "}
                          your breath length as you continue box breathing.
                        </div>
                        <div>
                          Slowly you will gain more control of your breath and
                          maybe your emotions too!
                        </div>
                      </>
                    )}
                  </div>
                </TabsContent>

                <DialogDescription className="flex items-center justify-center mt-6">
                  <TabsList className="w-full">
                    <TabsTrigger value="1">1</TabsTrigger>
                    <TabsTrigger value="2">2</TabsTrigger>
                    <TabsTrigger value="3">3</TabsTrigger>
                  </TabsList>
                </DialogDescription>
              </Tabs>
              <div className="border-t py-4  mt-12">
                <DialogFooter>
                  <DialogDescription key={3}>
                    <div className="flex flex-row gap-4">
                      {lang === "he" ? (
                        <>
                          .אם אהבתם את האפליקציה, מעולה! המשיכו לתרגל ושתפו עם
                          חבריכם
                        </>
                      ) : (
                        <div>
                          If you enjoy this app, please share{" "}
                          <span className="text-primary font-semibold">
                            belly
                          </span>{" "}
                          with your friends and please complete more exercises!
                        </div>
                      )}

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

export default InfoDialog
