import {CiStar, CiBellOn} from 'react-icons/ci';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import logo from "@/public/logo.jpeg"
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

type Props = {}

function Navbar({}: Props) {
  const dispatch = useNavigate()
  const handleClick=()=>{
    dispatch('/favourite')
  }
  return (
    <div className="Navbar">
        <img src={logo} alt="background" className="NavbarImg object-cover"/>
        <div className='text-white relative left-[4vw] text-[2rem] xl:mx-auto 2xl:left-[5vw] sm:text-[3rem]'>
        𝗠𝗼𝗱𝗲𝗹𝗶𝗳𝘆
        </div>
        <div className="flex w-auto justify-between">
          <SignedOut>
          <SignInButton>
            <button className='dark-gray-bg text-white hover:text-black hover:bg-white sm:p-3 text-[2vmin] rounded-full flex w-fit gap-2'>
              <FaRegUserCircle className='mt-1'/>
              <p>Sign In</p>
            </button>
          </SignInButton>
        </SignedOut>


          <SignedIn>
            <CiStar onClick={handleClick} className="bg-white w-[7vmin] h-[7vmin] md:w-[4.3vmin] md:h-[4.3vmin] p-1 rounded-full m-2 cursor-pointer"/>
            <UserButton afterSignOutUrl='/'/>
          </SignedIn>
        </div>
    </div>
  )
}

export default Navbar