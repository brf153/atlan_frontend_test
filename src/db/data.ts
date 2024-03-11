import { IconType } from "react-icons"
import { IoIosColorPalette } from "react-icons/io"
import { RiBook2Line, RiComputerLine } from "react-icons/ri"
import {ImageUrl, WaveBase64} from '@/enum/enums';
import { IoHomeOutline } from "react-icons/io5"

type CardLLMProps = {
  title: string
  image: string
  likes: number
  views: number
  icon: IconType
}

export const CardLLMData: CardLLMProps[] = [
  {
    title: "Creative",
    image: ImageUrl.Kitten,
    likes: 10,
    views: 20,
    icon: IoIosColorPalette,
  },
  {
    title: "Academic",
    image: ImageUrl.Book,
    likes: 10,
    views: 20,
    icon: IoIosColorPalette,
  },
  {
    title: "Programming",
    image: ImageUrl.Monkey,
    likes: 10,
    views: 20,
    icon: RiComputerLine,
  },
  {
    title: "Creative",
    image: ImageUrl.Puppy,
    likes: 10,
    views: 20,
    icon: IoIosColorPalette,
  },
  {
    title: "Creative",
    image: ImageUrl.Spiderman,
    likes: 10,
    views: 20,
    icon: IoIosColorPalette,
  },
  {
    title: "Programming",
    image: ImageUrl.Code,
    likes: 10,
    views: 20,
    icon: RiComputerLine,
  },
]

type HeaderDataProp = {
  icon: IconType
  title: string
}

export const HeaderData: HeaderDataProp[] = [
  {
    icon: IoHomeOutline,
    title: "Latest",
  },
  {
    icon: RiBook2Line,
    title: "Academic",
  },
  {
    icon: IoIosColorPalette,
    title: "Creative",
  },
  {
    icon: RiComputerLine,
    title: "Programming",
  },
]

type SidebarLLMProps = {
  name: string
  description: string
  image: string
  id: number
}

export const llmModel: SidebarLLMProps[] = [
  {
    name: "GUI GPT API prompt generator",
    description: "OpenAI GPT-3",
    image: ImageUrl.Kitten,
    id: 1,
  },
  {
    name: "Llama 2",
    description: "OpenAI GPT-4",
    image: ImageUrl.Puppy,
    id: 2,
  },
  {
    name: "ChatGPT",
    description: "OpenAI GPT-5",
    image: ImageUrl.Mountain,
    id: 3,
  },
  {
    name: "GPT-4 Turbo",
    description: "OpenAI GPT-5",
    image: ImageUrl.Mountain,
    id: 4,
  },
]

export type Message = {
  id: number
  content: string
  sender: "user" | "bot"
}


export type LLMDataProps = {
  name: string
  description: string
  image: string
  prompt: string
  type: "Creative" | "Programming" | "Academic"
  likes: number
  views: number
  creator: string
  creatorPic: string
  id: number
  message: Message[]
}

export const LLMDataTop: LLMDataProps[] = [
  {
    type: "Creative",
    image: ImageUrl.Kitten,
    likes: 10,
    views: 20,
    name: "GUI GPT API prompt generator",
    description: "OpenAI GPT-3",
    prompt: "You are a helpful, respectful and honest assistant. Always answer as helpfully as possible, while being safe. Your answers should not include any harmful, unethical, racist, sexist, toxic, dangerous, or illegal content. Please ensure that your responses are socially unbiased and positive in nature.\n\nIf a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct. If you don't know the answer to a question, please don't share false information.",
    creator: "Devaansh",
    creatorPic: ImageUrl.Person,
    id: 1,
    message: [
      { id: 1, content: WaveBase64, sender: "bot" },
    ]
  },
  {
    type: "Academic",
    image: ImageUrl.Book,
    likes: 10,
    views: 20,
    name: "GUI GPT API prompt generator",
    description: "OpenAI GPT-3",
    prompt: "You are a helpful, respectful and honest assistant. Always answer as helpfully as possible, while being safe. Your answers should not include any harmful, unethical, racist, sexist, toxic, dangerous, or illegal content. Please ensure that your responses are socially unbiased and positive in nature.\n\nIf a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct. If you don't know the answer to a question, please don't share false information.",
    creator: "Devaansh",
    creatorPic: ImageUrl.Person,
    id: 2,
    message: [
      { id: 1, content: "Hello, how can I help you?", sender: "bot" },
    ]
  },
  {
    type: "Programming",
    image: ImageUrl.Monkey,
    likes: 10,
    views: 20,
    name: "GUI GPT API prompt generator",
    description: "OpenAI GPT-3",
    prompt: "You are a helpful, respectful and honest assistant. Always answer as helpfully as possible, while being safe. Your answers should not include any harmful, unethical, racist, sexist, toxic, dangerous, or illegal content. Please ensure that your responses are socially unbiased and positive in nature.\n\nIf a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct. If you don't know the answer to a question, please don't share false information.",
    creator: "Devaansh",
    creatorPic: ImageUrl.Person,
    id: 3,
    message: [
      { id: 1, content: "Hello, how can I help you?", sender: "bot" },
    ]
  },
  {
    type: "Creative",
    image: ImageUrl.Puppy,
    likes: 10,
    views: 20,
    name: "GUI GPT API prompt generator",
    description: "OpenAI GPT-3",
    prompt: "You are a helpful, respectful and honest assistant. Always answer as helpfully as possible, while being safe. Your answers should not include any harmful, unethical, racist, sexist, toxic, dangerous, or illegal content. Please ensure that your responses are socially unbiased and positive in nature.\n\nIf a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct. If you don't know the answer to a question, please don't share false information.",
    creator: "Devaansh",
    creatorPic: ImageUrl.Person,
    id: 4,
    message: [
      { id: 1, content: WaveBase64, sender: "bot" },
    ]
  },
  {
    type: "Creative",
    image: ImageUrl.Spiderman,
    likes: 10,
    views: 20,
    name: "GUI GPT API prompt generator",
    description: "Can help you in making images",
    prompt: "You are a helpful, respectful and honest assistant. Always answer as helpfully as possible, while being safe. Your answers should not include any harmful, unethical, racist, sexist, toxic, dangerous, or illegal content. Please ensure that your responses are socially unbiased and positive in nature.\n\nIf a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct. If you don't know the answer to a question, please don't share false information.",
    creator: "Devaansh",
    creatorPic: ImageUrl.Person,
    id: 5,
    message: [
      { id: 1, content: WaveBase64, sender: "bot" },
    ]
  },
  {
    type: "Programming",
    image: ImageUrl.Code,
    likes: 10,
    views: 20,
    name: "GUI GPT API prompt generator",
    description: "OpenAI GPT-3",
    prompt: "You are a helpful, respectful and honest assistant. Always answer as helpfully as possible, while being safe. Your answers should not include any harmful, unethical, racist, sexist, toxic, dangerous, or illegal content. Please ensure that your responses are socially unbiased and positive in nature.\n\nIf a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct. If you don't know the answer to a question, please don't share false information.",
    creator: "Devaansh",
    creatorPic: ImageUrl.Person,
    id: 6,
    message: [
      { id: 1, content: "Hello, how can I help you?", sender: "bot" },
    ]
  },
]

export const LLMData: LLMDataProps[] = [
  {
    type: "Creative",
    image: ImageUrl.Kitten,
    likes: 10,
    views: 20,
    name: "GUI GPT API prompt generator",
    description: "OpenAI GPT-3",
    prompt: "You are a helpful, respectful and honest assistant. Always answer as helpfully as possible, while being safe. Your answers should not include any harmful, unethical, racist, sexist, toxic, dangerous, or illegal content. Please ensure that your responses are socially unbiased and positive in nature.\n\nIf a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct. If you don't know the answer to a question, please don't share false information.",
    creator: "Devaansh",
    creatorPic: ImageUrl.Person,
    id: 1,
    message: [
      { id: 1, content: WaveBase64, sender: "bot" },
    ]
  },
  {
    type: "Academic",
    image: ImageUrl.Book,
    likes: 10,
    views: 20,
    name: "GUI GPT API prompt generator",
    description: "OpenAI GPT-3",
    prompt: "You are a helpful, respectful and honest assistant. Always answer as helpfully as possible, while being safe. Your answers should not include any harmful, unethical, racist, sexist, toxic, dangerous, or illegal content. Please ensure that your responses are socially unbiased and positive in nature.\n\nIf a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct. If you don't know the answer to a question, please don't share false information.",
    creator: "Devaansh",
    creatorPic: ImageUrl.Person,
    id: 2,
    message: [
      { id: 1, content: "Hello, how can I help you?", sender: "bot" },
    ]
  },
  {
    type: "Programming",
    image: ImageUrl.Monkey,
    likes: 10,
    views: 20,
    name: "GUI GPT API prompt generator",
    description: "OpenAI GPT-3",
    prompt: "You are a helpful, respectful and honest assistant. Always answer as helpfully as possible, while being safe. Your answers should not include any harmful, unethical, racist, sexist, toxic, dangerous, or illegal content. Please ensure that your responses are socially unbiased and positive in nature.\n\nIf a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct. If you don't know the answer to a question, please don't share false information.",
    creator: "Devaansh",
    creatorPic: ImageUrl.Person,
    id: 3,
    message: [
      { id: 1, content: "Hello, how can I help you?", sender: "bot" },
    ]
  },
  {
    type: "Creative",
    image: ImageUrl.Puppy,
    likes: 10,
    views: 20,
    name: "GUI GPT API prompt generator",
    description: "OpenAI GPT-3",
    prompt: "You are a helpful, respectful and honest assistant. Always answer as helpfully as possible, while being safe. Your answers should not include any harmful, unethical, racist, sexist, toxic, dangerous, or illegal content. Please ensure that your responses are socially unbiased and positive in nature.\n\nIf a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct. If you don't know the answer to a question, please don't share false information.",
    creator: "Devaansh",
    creatorPic: ImageUrl.Person,
    id: 4,
    message: [
      { id: 1, content: WaveBase64, sender: "bot" },
    ]
  },
  {
    type: "Creative",
    image: ImageUrl.Spiderman,
    likes: 10,
    views: 20,
    name: "GUI GPT API prompt generator",
    description: "Can help you in making images",
    prompt: "You are a helpful, respectful and honest assistant. Always answer as helpfully as possible, while being safe. Your answers should not include any harmful, unethical, racist, sexist, toxic, dangerous, or illegal content. Please ensure that your responses are socially unbiased and positive in nature.\n\nIf a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct. If you don't know the answer to a question, please don't share false information.",
    creator: "Devaansh",
    creatorPic: ImageUrl.Person,
    id: 5,
    message: [
      { id: 1, content: WaveBase64, sender: "bot" },
    ]
  },
  {
    type: "Programming",
    image: ImageUrl.Code,
    likes: 10,
    views: 20,
    name: "GUI GPT API prompt generator",
    description: "OpenAI GPT-3",
    prompt: "You are a helpful, respectful and honest assistant. Always answer as helpfully as possible, while being safe. Your answers should not include any harmful, unethical, racist, sexist, toxic, dangerous, or illegal content. Please ensure that your responses are socially unbiased and positive in nature.\n\nIf a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct. If you don't know the answer to a question, please don't share false information.",
    creator: "Devaansh",
    creatorPic: ImageUrl.Person,
    id: 6,
    message: [
      { id: 1, content: "Hello, how can I help you?", sender: "bot" },
    ]
  },
]
