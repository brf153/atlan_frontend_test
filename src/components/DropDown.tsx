import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export function CustomDropdownMenu({ items, triggerIcon, setData }: { items: { icon: JSX.Element; label: string }[]; triggerIcon: JSX.Element, setData: React.Dispatch<React.SetStateAction<{
  bool: boolean;
  type: string;
}>>}) {
  const handleClick = (e: any) => {
    console.log("Data", e.target.innerText);
    if (e.target.innerText === "Image Generation") {
      setData({ bool: true, type: "Creative" });
    } else if(e.target.innerText === "Text Generation"){
      setData({ bool: true, type: e.target.innerText });
    }
    else{
      setData({ bool: false, type: "" });
    }
  };
  return (
    <>
      <svg width="0" height="0">
        <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop stopColor="#8a2be2" offset="0%" />
          <stop stopColor="#87ceeb" offset="100%" />
        </linearGradient>
      </svg>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className='dark-bg text-white w-auto h-[2.2rem] p-2 flex gap-1 justify-center align-middle rounded-md'>
            {triggerIcon}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={`w-48 dark-bg text-white`}>
          <DropdownMenuGroup>
            {items.map((item, index) => (
              <DropdownMenuItem className="cursor-pointer" key={index} onClick={(e)=>handleClick(e)}>
                {item.icon}
                <span>{item.label}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
