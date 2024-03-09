import Layout from '@/layout/Layout'
import { IconType } from 'react-icons';
import {IoFilter, IoHomeOutline} from 'react-icons/io5';
import { CiSettings } from "react-icons/ci";
import { IoIosColorPalette } from "react-icons/io";
import { RiComputerLine } from "react-icons/ri";
import { DropdownMenu } from '@/components/ui/dropdown-menu';
import { DropdownMenuDemo } from '@/components/DropDown';
import { CardCollect } from '@/components/Carousel';
import { CardLLM } from '@/components/Card';
import pic from "@/public/logo-black.jpg"
import { ImageUrl } from '@/enum/enums';
import { CardLLMData, CardLLMDataBottom, HeaderData } from '@/db/data';

const Home = () => {
  return (
    <Layout>
        <div className='bg-black w-[93vw] overflow-x-hidden px-4'>

          <svg width="0" height="0">
            <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop stop-color="#8a2be2" offset="0%" /> 
              <stop stop-color="#87ceeb" offset="100%" /> 
            </linearGradient>
          </svg>

          <div className='flex'>
          <div className='flex px-4 py-4'>
                <DropdownMenuDemo />
          </div>
          {HeaderData.map((data, index) => (
            <div key={index} className='flex px-4 py-4 cursor-pointer hover:bg-black hover:opacity-80'>
              <div className='dark-bg text-white w-auto h-[2.2rem] p-2 flex gap-1 justify-center align-middle rounded-md'>
                <data.icon style={{ fill: "url(#blue-gradient)", stroke: "url(#blue-gradient)" }} className='h-5 w-5'/>
                <p className='font-light relative bottom-[1px]'>{data.title}</p>
              </div>
            </div>
          ))}
          </div>

          <div className='px-4 flex gap-4 h-[50%]'>
            <CardCollect />
            <div className='grid grid-cols-2 lg:grid-cols-3 w-[70%] px-4'>
              {
                CardLLMData.map((card, index) => (
                  <div key={index} className={`relative flex justify-center items-center ${index >= 2 && 'hidden lg:block'}`}>
                    <CardLLM key={index} card={card} />
                  </div>
                ))
              }
            </div>

          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4'>
  {
    CardLLMDataBottom.map((card, index) => (
      <div key={index} className={`relative flex justify-center items-center`}>
        <CardLLM key={index} card={card} />
      </div>
    ))
  }
</div>




        </div>
    </Layout>
  )
}

export default Home