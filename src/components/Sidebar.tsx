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
                <div className='flex flex-col items-center justify-center h-20 w-20 rounded-full hover:bg-white hover:text-black cursor-pointer'>
                    <data.icon className='h-6 w-6'/>
                    <p className='text-sm font-light'>{data.title}</p>
                </div>
                </Link>
            </div>
        ))}

        </div>
    </div>
  )
}

export default Sidebar