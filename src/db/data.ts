import {IconType} from 'react-icons';
import {IoIosColorPalette} from 'react-icons/io';
import {RiComputerLine} from 'react-icons/ri';
import {ImageUrl} from '@/enum/enums';
import {IoHomeOutline} from 'react-icons/io5';
import {CiSettings} from 'react-icons/ci';

type CardLLMProps = {
    title: string,
    image: string,
    likes: number,
    views: number,
    icon: IconType
  }
  
 export const CardLLMData: CardLLMProps[] = [
    {
    title: 'Creative',
    image: ImageUrl.Kitten,
    likes: 10,
    views: 20,
    icon: IoIosColorPalette
  },
  {
    title: 'Creative',
    image: ImageUrl.Eagle,
    likes: 10,
    views: 20,
    icon: IoIosColorPalette
  },
  {
    title: 'Programming',
    image: ImageUrl.Monkey,
    likes: 10,
    views: 20,
    icon: RiComputerLine
  },
  {
    title: 'Creative',
    image: ImageUrl.Puppy,
    likes: 10,
    views: 20,
    icon: IoIosColorPalette
  },
  {
    title: 'Creative',
    image: ImageUrl.Spiderman,
    likes: 10,
    views: 20,
    icon: IoIosColorPalette
  },
  {
    title: 'Programming',
    image: ImageUrl.Code,
    likes: 10,
    views: 20,
    icon: RiComputerLine
  },
  ]
  
  export const CardLLMDataBottom: CardLLMProps[] = [
    {
    title: 'Creative',
    image: ImageUrl.Kitten,
    likes: 10,
    views: 20,
    icon: IoIosColorPalette
  },
  {
    title: 'Creative',
    image: ImageUrl.Eagle,
    likes: 10,
    views: 20,
    icon: IoIosColorPalette
  },
  {
    title: 'Programming',
    image: ImageUrl.Monkey,
    likes: 10,
    views: 20,
    icon: RiComputerLine
  },
  {
    title: 'Creative',
    image: ImageUrl.Puppy,
    likes: 10,
    views: 20,
    icon: IoIosColorPalette
  },
  {
    title: 'Creative',
    image: ImageUrl.Spiderman,
    likes: 10,
    views: 20,
    icon: IoIosColorPalette
  },
  {
    title: 'Programming',
    image: ImageUrl.Code,
    likes: 10,
    views: 20,
    icon: RiComputerLine
  },
  {
    title: 'Creative',
    image: ImageUrl.Kitten,
    likes: 10,
    views: 20,
    icon: IoIosColorPalette
  },
  {
    title: 'Creative',
    image: ImageUrl.Eagle,
    likes: 10,
    views: 20,
    icon: IoIosColorPalette
  },
  {
    title: 'Programming',
    image: ImageUrl.Monkey,
    likes: 10,
    views: 20,
    icon: RiComputerLine
  },
  {
    title: 'Creative',
    image: ImageUrl.Puppy,
    likes: 10,
    views: 20,
    icon: IoIosColorPalette
  },
  {
    title: 'Creative',
    image: ImageUrl.Spiderman,
    likes: 10,
    views: 20,
    icon: IoIosColorPalette
  },
  {
    title: 'Programming',
    image: ImageUrl.Code,
    likes: 10,
    views: 20,
    icon: RiComputerLine
  },
  {
    title: 'Creative',
    image: ImageUrl.Kitten,
    likes: 10,
    views: 20,
    icon: IoIosColorPalette
  },
  {
    title: 'Creative',
    image: ImageUrl.Eagle,
    likes: 10,
    views: 20,
    icon: IoIosColorPalette
  },
  {
    title: 'Programming',
    image: ImageUrl.Monkey,
    likes: 10,
    views: 20,
    icon: RiComputerLine
  },
  {
    title: 'Creative',
    image: ImageUrl.Puppy,
    likes: 10,
    views: 20,
    icon: IoIosColorPalette
  },
  {
    title: 'Creative',
    image: ImageUrl.Spiderman,
    likes: 10,
    views: 20,
    icon: IoIosColorPalette
  },
  {
    title: 'Programming',
    image: ImageUrl.Code,
    likes: 10,
    views: 20,
    icon: RiComputerLine
  },
  ]

  type HeaderDataProp = {
    icon: IconType,
    title: string
  }
  
  export const HeaderData: HeaderDataProp[] = [
  {
    icon: IoHomeOutline,
    title: 'Latest',
  },
  {
    icon: CiSettings,
    title: 'Prompt Engineering',
  },
  {
    icon: IoIosColorPalette,
    title: 'Creative',
  },
  {
    icon: RiComputerLine,
    title: 'Programming',
  }]