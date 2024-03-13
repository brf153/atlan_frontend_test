import React from 'react'
import logowhite from "@/public/logo-white.png"
import { IoHomeOutline } from "react-icons/io5";
import { IoHomeSharp } from "react-icons/io5";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IoChatboxEllipses } from "react-icons/io5";
import { IconType } from 'react-icons/lib';
import { FaCircleUser } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";
import { BiUserCircle } from "react-icons/bi";
import { Data, Links } from '@/enum/enums';
import { Link } from 'react-router-dom';
import { MenubarComponent } from './Menubar';
import { Button } from './ui/button';

type SidebarIconsProps = {
    icon: IconType,
    title: string,
    url: string
}

const SidebarIcons: SidebarIconsProps[] = [{
    icon: IoHomeOutline,
    title: Data.Home,
    url: Links.Home
}, {
    icon: IoChatboxEllipsesOutline,
    title: Data.Chat,
    url: Links.Chat
},{
    icon: FaRegCircleUser,
    title: Data.MyAI,
    url: Links.MyAI
}]

const Sidebar = () => {
  return (
    <>
        <div className='fixed bottom-0 h-[6vh] sm:hidden bg-black z-40 w-full'>
            <div className='flex'>
        {SidebarIcons.map((data, index) => (
            <div key={index} className='w-[90%] flex justify-center '>
                <Link to={data.url}>
                <div className='flex flex-col text-white items-center justify-center p-3 sm:hover:bg-white sm:hover:text-black cursor-pointer'>
                    <data.icon className='h-[5vmin] w-[5vmin]'/>
                    <p className='text-sm font-bold'>{data.title}</p>
                </div>
                </Link>
            </div>
        ))}
        </div>
        </div>
    <div className='Sidebar'>
        <div className='flex flex-col w-full h-full dark-bg text-white'>
            <div className='flex items-center justify-center mt-4 mb-4'>
                <Link to="/">
                <img src={logowhite} alt="logo" className='rounded-full cursor-pointer object-cover'/>
                </Link>
            </div>

        {SidebarIcons.map((data, index) => (
            <div key={index} className='w-full flex justify-center'>
                <Link to={data.url}>
                <div className='flex flex-col items-center justify-center h-16 w-16 my-3 rounded-full sm:hover:bg-white sm:hover:text-black cursor-pointer'>
                    <data.icon className='h-6 w-6'/>
                    <p className='text-sm font-light'>{data.title}</p>
                </div>
                </Link>
            </div>
        ))}

        </div>
    </div>
    </>
  )
}

export default Sidebar