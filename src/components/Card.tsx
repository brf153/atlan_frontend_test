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
          
    
    <Card className="w-[350px] h-[200px] relative overflow-hidden">

    <div className="w-fit h-4 z-20 text-white absolute top-2 left-3 right-0 p-4 rounded-sm dark-bg opacity-80">
      <div className="flex relative bottom-3 w-auto gap-2">
        <div className="w-[15%]">
          {card.type === "Creative" && <IoIosColorPalette style={{ fill: "url(#blue-gradient)", stroke: "url(#blue-gradient)" }} className="text-xl relative top-[1px]" />}
          {card.type === "Programming" && <RiComputerLine style={{ fill: "url(#blue-gradient)", stroke: "url(#blue-gradient)" }} className="text-xl relative top-[1px]" />}
          {card.type === "Academic" && <RiBook2Line style={{ fill: "url(#blue-gradient)", stroke: "url(#blue-gradient)" }} className="text-xl relative top-[1px]" />}
        </div>
        <p className="relative bottom-[1px] font-light">{card.type}</p>
      </div>
    </div>

      <CardContent>
        <div className="absolute inset-0">
          <img src={card.image} alt="logo" className="absolute inset-0 object-cover w-full h-full" />
        </div>
      </CardContent>
      <div className="w-[50%] h-[1rem] z-20 text-white absolute bottom-2 left-3 right-0 p-4 rounded-sm">
        <p className="flex justify-between w-full">
          <p className="flex w-1/2 px-[2px]"><FaPlay className="text-sm"/><span className="relative bottom-1">{formatNumber(card.views)}</span></p>
          <p className="flex w-1/2 px-1"><GiSelfLove className="text-sm"/><span className="relative bottom-1">{formatNumber(card.likes)}</span></p>
        </p>
      </div>
    </Card>
    </>
  );
}



