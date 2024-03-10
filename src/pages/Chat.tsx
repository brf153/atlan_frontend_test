import React, { useState } from "react"
// import Layout from '@/layout/Layout';
import Sidebar from "@/components/Sidebar"
import SearchBar from "@/components/SearchBar"
import { ImageUrl, LLMProps } from "@/enum/enums"
import { llmModel } from "@/db/data"
import { Separator } from "@/components/ui/separator"
import {IoMdSend, IoIosText} from 'react-icons/io';
import {useUser} from '@clerk/clerk-react';
import { CommandComponent } from "@/components/Command"
import { CustomDropdownMenu } from "@/components/DropDown"
import {FaRegImage} from 'react-icons/fa6';
import {GrPowerReset} from 'react-icons/gr';
import { IoFilter } from "react-icons/io5"
import { SelectDemo } from "@/components/Popover"
import { IoMdSettings } from "react-icons/io";
import { SliderDemo } from "@/components/Slider"
import { getResponse } from "@/api/llm"
// import { getResponse } from "@/api/llm"

interface Message {
  id: number
  content: string
  sender: "user" | "bot"
}

const ModelSidebar = () => {
  return (
    <div className="w-[15vw] bg-black h-screen flex flex-col">
      <div className="flex w-full items-center justify-center h-16 border-b border-gray-600 dark-bg">
        <SearchBar className="w-[80%] mx-auto" />
      </div>
      {llmModel.map((model,index) => (
        <div key={index} className={`p-4 flex w-full gap-2 ${model.id === 1 && "gray-bg"}`}>
          <img
            src={model.image}
            alt="kitten"
            className="w-14 h-14 rounded-md mx-auto"
          />
          <p className="text-white mt-1 w-[75%] truncate text-ellipsis">
            <span className="font-bold text-lg">{model.name}</span>
            <br />
            <span className="text-sm font-light text-gray-300">
              {model.description}
            </span>
          </p>
        </div>
      ))}
    </div>
  )
}

const ModelDescription = ({temperature, setTemperature, LLM, setLLM}:{temperature:number, setTemperature:React.Dispatch<React.SetStateAction<number>>, LLM:string, setLLM:React.Dispatch<React.SetStateAction<LLMProps>>}) => {
  const items = [
    { icon: <FaRegImage style={{ fill: "url(#blue-gradient)", stroke: "url(#blue-gradient)" }} className="mr-2 h-4 w-4"/>, label: "Image Generation" },
    { icon: <IoIosText style={{ fill: "url(#blue-gradient)", stroke: "url(#blue-gradient)" }} className="mr-2 h-4 w-4"/>, label: "Text Generation" },
    { icon: <GrPowerReset style={{ fill: "url(#blue-gradient)", stroke: "url(#blue-gradient)" }} className="mr-2 h-4 w-4"/>, label: "Default" },
  ];

  return (
    <div className="w-[15vw] dark-gray-bg h-screen flex flex-col gap-2">
      <div className="p-4 flex w-full gap-2">
        <img
          src={ImageUrl.Kitten}
          alt="kitten"
          className="w-14 h-14 rounded-md mx-auto"
        />
        <div className="text-white mt-1 w-[75%] truncate text-ellipsis">
          <span className="font-bold text-lg">GPT-3</span>
          <br />
          <div className="flex text-sm font-light text-gray-300 w-[90%] truncate text-ellipsis">
            <img src={ImageUrl.Person} alt="person" className="w-4 h-4 inline" />
            <span className="ml-2">Devaansh</span>
          </div>
        </div>
      </div>
      <div className="text-white px-4">
        <p> facere eum, aut cupiditate doloremque suscipit quod omnis quaerat pariatur voluptatibus? Dolore corporis consequatur quaerat.</p>
      </div>
      <Separator />
      <div className="w-full px-4 flex justify-between mt-2">
        <div className="flex gap-1 text-white text-lg mt-2">
          <IoMdSettings className="mt-1"/>
          <p>Model</p>
        </div>
      <SelectDemo LLM={LLM} selectLLM={setLLM}/>
      </div>
      <div className="text-white px-4 flex flex-col gap-4 mt-2">
        <p className="flex justify-between text-gray-300">
          <span>Temparature</span>
          <span>{temperature/100}</span>
        </p>
        <SliderDemo value={[temperature]} onValueChange={(e)=>setTemperature(e[0])} />
      </div>
    </div>
  )
}


const Chat: React.FC = () => {

  const { isSignedIn, user, isLoaded } = useUser();

  const [inputMessage, setInputMessage] = useState<string>("")
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, content: "Hello, how can I help you?", sender: "bot" },
    { id: 2, content: "Hi! How can I assist you today?", sender: "user" },
    { id: 3, content: "Hello, how can I help you?", sender: "bot" },
    { id: 4, content: "Hi! How can I assist you today?", sender: "user" },
    { id: 5, content: "Hello, how can I help you?", sender: "bot" },
    { id: 6, content: "Hi! How can I assist you today?", sender: "user" },
  ])

  const handleSendMessage = async() => {
    if (inputMessage.trim() === "") return;
  
    const newMessage: Message = {
      id: messages.length + 1,
      content: inputMessage.trim(),
      sender: "user",
    };
  
    setMessages(prevMessages => [...prevMessages, newMessage]);
    setInputMessage("");
  
    const full_prompt = `Give response to ${inputMessage.trim()}`;
    const system_prompt = "You are a helpful, respectful and honest assistant. Always answer as helpfully as possible, while being safe. Your answers should not include any harmful, unethical, racist, sexist, toxic, dangerous, or illegal content. Please ensure that your responses are socially unbiased and positive in nature.\n\nIf a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct. If you don't know the answer to a question, please don't share false information.";
    const result = await getResponse({ prompt: full_prompt, temperature: (temperature/100), system_prompt: system_prompt, type: LLM });
    const response: Message = {
      id: messages.length + 1,
      content: typeof result === 'string' ? result.trim() : "Some Error...",
      sender: "bot",
    };
    setMessages(prevMessages => [...prevMessages, response]);
  };

  const [temperature, setTemperature] = useState<number>(40);

  const [LLM, setLLM] = useState<LLMProps>("ChatGPT");

  return (
    <div className="flex">
      <div className="w-[7vw]">
        <Sidebar />
      </div>
      <div className="w-[93vw] flex bg-black overflow-y-hidden">
        <ModelSidebar />

        <div className="container mx-auto max-w-2xl p-4">

          <div className="flex text-white w-fit mx-auto gap-2">
            <img
              src={ImageUrl.Kitten}
              alt="kitten"
              className="w-14 h-14 rounded-md mx-auto"
            />
            <h1 className="text-2xl font-bold text-center mt-2">
              GUI GPT API prompt generator
            </h1>
          </div>

          <Separator className="mt-4" />

          <div className="h-[86vh] mt-4 flex flex-col justify-between">
            <div className="relative flex flex-col gap-4 h-[95%] overflow-y-scroll chatbar">
              {messages.map(message => (
                <div
                  key={message.id}
                  className={`message flex ${message.sender === "user" ? "user-message text-white justify-start flex-row-reverse gap-2" : "bot-message text-white"}`}
                >
                  {message.sender === "user" && (
                    <img
                      src={user?.imageUrl}
                      alt="user profile"
                      className="w-10 h-10 rounded-full mr-4"
                    />
                  )}
                  {message.sender !== "user" && (
                    <img
                      src={ImageUrl.Kitten}
                      alt="kitten"
                      className="w-10 h-10 rounded-full mr-4"
                    />
                  )}

                  <div
                    className={`p-4 w-fit gray-bg rounded-b-md ${message.sender === "user" ? "rounded-tl-md" : "rounded-tr-md"}`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex mt-4 fixed bottom-2 w-[35vw]">
              <input
                type="text"
                value={inputMessage}
                onChange={e => setInputMessage(e.target.value)}
                className="flex-1 rounded-lg p-2 border border-gray-300 focus:outline-none"
                placeholder="Type your message..."
                onKeyDown={e => {
                  if (e.key === "Enter" && inputMessage.trim() !== "") {
                    handleSendMessage()
                  }
                }}
              />
              <button
                className="text-black px-4 py-2 absolute right-0 mt-[1px]"
                onClick={handleSendMessage}
              >
                <IoMdSend className="text-2xl" />
              </button>
            </div>
          </div>

        </div>

        <ModelDescription temperature={temperature} setTemperature={setTemperature} LLM={LLM} setLLM={setLLM} />
      </div>
    </div>
  )
}

export default Chat
