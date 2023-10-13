"use client"

import { Share } from "lucide-react"
import { Button } from "./ui/button"
import {
  FacebookShareButton,
  FacebookIcon,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
} from "next-share"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

const ShareButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Share />
          <span className="sr-only">Share on social media</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="mx-2 grid grid-cols-3">
        <DropdownMenuItem>
          <FacebookShareButton
            url={"https://belly-murex.vercel.app"}
            quote={"Check out belly - a breathing app to help you slow down."}
            hashtag={"#nextshare"}
          >
            <FacebookIcon size={50} round />
          </FacebookShareButton>
          <span className="sr-only">Share on Facebook </span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <TelegramShareButton
            url={"https://belly-murex.vercel.app"}
            title={"Check out belly - a breathing app to help you slow down."}
          >
            <TelegramIcon size={50} round />
          </TelegramShareButton>
          <span className="sr-only">Share on Telegram</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <TwitterShareButton
            url={"https://belly-murex.vercel.app"}
            title={"Check out belly - a breathing app to help you slow down."}
          >
            <TwitterIcon size={50} round />
          </TwitterShareButton>
          <span className="sr-only">Share on Twitter</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <WhatsappShareButton
            url={"https://belly-murex.vercel.app"}
            title={"Check out belly - a breathing app to help you slow down."}
            separator=":: "
          >
            <WhatsappIcon size={50} round />
          </WhatsappShareButton>
          <span className="sr-only">Share</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LinkedinShareButton url={"https://belly-murex.vercel.app"}>
            <LinkedinIcon size={50} round />
          </LinkedinShareButton>
          <span className="sr-only">Share</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <FacebookMessengerShareButton
            url={"https://belly-murex.vercel.app"}
            appId={""}
          >
            <FacebookMessengerIcon size={50} round />
          </FacebookMessengerShareButton>
          <span className="sr-only">Share</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ShareButton
