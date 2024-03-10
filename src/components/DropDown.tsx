import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export function CustomDropdownMenu({ items, triggerIcon, dropdownMenuClassName }: { items: { icon: JSX.Element; label: string }[]; triggerIcon: JSX.Element; dropdownMenuClassName?: string }) {
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
        <DropdownMenuContent className={`w-48 dark-bg text-white ${dropdownMenuClassName}`}>
          <DropdownMenuGroup>
            {items.map((item, index) => (
              <DropdownMenuItem key={index}>
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
