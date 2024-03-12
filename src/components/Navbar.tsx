import React from 'react'
import SearchBar from '@/components/SearchBar';
import {CiStar, CiBellOn} from 'react-icons/ci';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import background from "@/public/background.jpg"
import unnamed from "@/public/unnamed.png"
import logo2 from "@/public/logo2.jpeg"
import logo from "@/public/logo3.jpg"
import logo3 from "@/public/logo5.jpg"

type Props = {}

function Navbar({}: Props) {
  return (
    <div className="Navbar">
        <img src={logo2} alt="background" className="NavbarImg object-cover"/>
        <SearchBar />
        <div className="flex w-auto justify-between">
          <SignedOut>
          <SignInButton>
            <button className='bg-white p-1 text-[2vmin] rounded-full'>Sign In</button>
          </SignInButton>
        </SignedOut>


          <SignedIn>
            <CiStar className="bg-white w-[7vmin] h-[7vmin] md:w-[4.3vmin] md:h-[4.3vmin] p-1 rounded-full m-2 cursor-pointer"/>
            <CiBellOn className="bg-white w-[8vmin] h-[7vmin] md:w-[4.3vmin] md:h-[4.3vmin] p-1 rounded-full m-2 cursor-pointer" />
            <UserButton />
          </SignedIn>
        </div>
    </div>
  )
}

export default Navbar