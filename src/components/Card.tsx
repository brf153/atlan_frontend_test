import pic from "@/public/logo-black.jpg"
import { FaPlay } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {IoIosColorPalette} from 'react-icons/io';
import { formatNumber } from "@/utils/utils";
import {LLMDataProps} from '@/db/data';
import {RiComputerLine} from 'react-icons/ri';
import { RiBook2Line } from "react-icons/ri";

export function CardLLM({card}:{card: LLMDataProps}) {
  return (
    <>
    <svg width="0" height="0">
      <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop stop-color="#8a2be2" offset="0%" /> 
        <stop stop-color="#87ceeb" offset="100%" /> 
      </linearGradient>
    </svg>
          
    
    <Card className="w-[47vw] h-[15vh] sm:w-[20vw] sm:h-[21vh] relative overflow-hidden">

    <div className="w-fit h-fit p-1 sm:h-4 z-20 text-white absolute top-2 left-3 right-0 sm:p-4 rounded-sm dark-bg opacity-80">
      <div className="flex sm:relative bottom-3 w-auto gap-2">
        <div className="w-[10%] sm:w-[15%]">
          {card.type === "Creative" && <IoIosColorPalette style={{ fill: "url(#blue-gradient)", stroke: "url(#blue-gradient)" }} className="sm:text-xl relative top-[1px]" />}
          {card.type === "Programming" && <RiComputerLine style={{ fill: "url(#blue-gradient)", stroke: "url(#blue-gradient)" }} className="sm:text-xl relative top-[1px]" />}
          {card.type === "Academic" && <RiBook2Line style={{ fill: "url(#blue-gradient)", stroke: "url(#blue-gradient)" }} className="sm:text-xl relative top-[1px]" />}
        </div>
        <p className="relative bottom-[1px] text-sm sm:text-md font-light">{card.type}</p>
      </div>
    </div>

      <CardContent>
        <div className="absolute inset-0">
          <img src={card.image} alt="logo" className="absolute inset-0 object-cover w-full h-full" />
        </div>
      </CardContent>
      <div className="w-[50%] sm:h-[1rem] z-20 text-white absolute bottom-2 left-3 right-0 sm:p-4 rounded-sm">
        <p className="flex justify-between w-fit">
          <p className="flex w-1/2 px-[2px] gap-1 sm:gap-[2px]"><FaPlay className="text-[10px] sm:text-[0.6rem]"/><span className="relative bottom-1 text-sm sm:text-md">{formatNumber(card.views)}</span></p>
          <p className="flex w-1/2 px-1 gap-1 sm:gap-[2px]"><GiSelfLove className="text-xs sm:text-[1rem] sm:relative sm:bottom-[3px] mt-[1px]"/><span className="relative bottom-[3px] sm:bottom-1 text-sm sm:text-md">{formatNumber(card.likes)}</span></p>
        </p>
      </div>
    </Card>
    </>
  );
}



