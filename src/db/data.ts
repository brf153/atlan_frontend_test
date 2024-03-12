export type Message = {
  id: number
  content: string
  sender: "user" | "bot"
}


export type LLMDataProps = {
  id: number
  name: string
  description: string
  image: string
  prompt: string
  type: "Creative" | "Programming" | "Academic"
  likes: number
  views: number
  creator: string
  creatorPic: string
  message: Message[]
}