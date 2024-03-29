import React from 'react'
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const SearchBar = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, ...props }, ref) => {
      return (
        <div
          className={cn(
            "flex ml-8 h-8 md:h-10 items-center rounded-md border border-input bg-white pl-3 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2",
            className,
          )}
        >
          <MagnifyingGlassIcon className="h-[16px] w-[16px]" />
          <input
            {...props}
            type="search"
            placeholder='Search...'
            ref={ref}
            className="w-full md:p-2 placeholder:px-1 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
      );
    },
  );

export default SearchBar;