import React from 'react'
import SearchBar from '@/components/SearchBar';
import {CiStar, CiBellOn} from 'react-icons/ci';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import background from "@/public/background.jpg"

type Props = {}

function Navbar({}: Props) {
  return (
    <div className="Navbar">
        <img src={background} alt="background" className="NavbarImg"/>
        <SearchBar />
        <div className="flex w-auto justify-between">
          <SignedOut>
          <SignInButton>
            <button className='bg-white p-1 text-[2vmin] rounded-full'>Sign In</button>
          </SignInButton>
        </SignedOut>


          <SignedIn>
            <CiStar className="bg-white w-[2.5rem] h-[2.5rem] p-1 rounded-full m-2 cursor-pointer"/>
            <CiBellOn className="bg-white w-[2.5rem] h-[2.5rem] p-1 rounded-full m-2 cursor-pointer" />
            <UserButton/>
          </SignedIn>
        </div>
    </div>
  )
}

export default Navbar