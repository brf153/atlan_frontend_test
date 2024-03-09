import { GrPowerReset } from "react-icons/gr";
import { FaRegImage } from "react-icons/fa6";
import { RiText } from "react-icons/ri";
import { IoIosText } from "react-icons/io";
  
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { IoFilter } from "react-icons/io5"
  
  export function DropdownMenuDemo() {
    return (
        <>
        <svg width="0" height="0">
          <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop stop-color="#8a2be2" offset="0%" /> 
            <stop stop-color="#87ceeb" offset="100%" /> 
          </linearGradient>
        </svg>

    <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className='dark-bg text-white w-auto h-[2.2rem] p-2 flex gap-1 justify-center align-middle rounded-md'>
            <IoFilter className='h-5 w-5'/>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48 dark-bg text-white">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <FaRegImage style={{ fill: "url(#blue-gradient)", stroke: "url(#blue-gradient)" }} className="mr-2 h-4 w-4" />
              <span>Image Generation</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <IoIosText style={{ fill: "url(#blue-gradient)", stroke: "url(#blue-gradient)" }} className="mr-2 h-4 w-4" />
              <span>Text Generation</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <GrPowerReset style={{ fill: "url(#blue-gradient)", stroke: "url(#blue-gradient)" }} className="mr-2 h-4 w-4" />
              <span>Default</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      </>
    )
  }
  