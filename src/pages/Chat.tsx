import React, { useEffect, useState } from "react"
// import Layout from '@/layout/Layout';
import Sidebar from "@/components/Sidebar"
import SearchBar from "@/components/SearchBar"
import { LLMProps } from "@/enum/enums"
import { LLMDataProps, Message } from "@/db/data"
import { Separator } from "@/components/ui/separator"
import { IoMdSend, IoIosText } from "react-icons/io"
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-react"
import { CommandComponent } from "@/components/Command"
import { CustomDropdownMenu } from "@/components/DropDown"
import { FaRegImage } from "react-icons/fa6"
import { GrPowerReset } from "react-icons/gr"
import { IoFilter } from "react-icons/io5"
import { SelectComponent } from "@/components/Popover"
import { IoMdSettings } from "react-icons/io"
import { SliderComponent } from "@/components/Slider"
import { getResponse } from "@/api/llm"
import { useSelector, useDispatch } from "react-redux"
import {
  selectCurrentLLM,
  setCurrentLLM,
  selectAvailableLLMs,
} from "@/slice/llmSlice"
import { useAppSelector } from "@/app/hooks"
import Layout from "@/layout/Layout"
import { FaRegUserCircle } from "react-icons/fa"

const ModelSidebar = ({ currentLLM }: { currentLLM: LLMDataProps }) => {
  const dispatch = useDispatch()
  const availableLLMs = useAppSelector(selectAvailableLLMs)
  const handleClick = (selectedLLM: LLMDataProps) => {
    dispatch(setCurrentLLM(selectedLLM))
  }
  return (
    <div className="hidden w-[20vw] xl:w-[15vw] bg-black h-screen sm:flex flex-col">
      <div className="flex w-full items-center justify-center h-16 border-b border-gray-600 dark-bg">
        <SearchBar className="w-[80%] mx-auto" />
      </div>
      {availableLLMs.map((model, index) => (
        <div
          onClick={() => handleClick(model)}
          key={index}
          className={`p-4 flex w-full gap-2 cursor-pointer ${model.id === currentLLM.id && "gray-bg"}`}
        >
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

const ModelDescription = ({
  temperature,
  setTemperature,
  model,
  setModel,
  llm,
}: {
  temperature: number
  setTemperature: React.Dispatch<React.SetStateAction<number>>
  model: string
  setModel: React.Dispatch<React.SetStateAction<LLMProps>>
  llm: LLMDataProps
}) => {
  return (
    <div className="hidden w-[15vw] dark-gray-bg h-screen xl:flex xl:flex-col gap-2">
      <div className="p-4 flex w-full gap-2">
        <img
          src={llm.image}
          alt="kitten"
          className="w-14 h-14 rounded-md mx-auto"
        />
        <div className="text-white mt-1 w-[75%] truncate text-ellipsis">
          <span className="font-bold text-lg">{llm.name}</span>
          <br />
          <div className="flex text-sm font-light text-gray-300 w-[90%] truncate text-ellipsis">
            <img src={llm.creatorPic} alt="person" className="w-4 h-4 inline" />
            <span className="ml-2">{llm.creator}</span>
          </div>
        </div>
      </div>
      <div className="text-white px-4">
        <p>{llm.description}</p>
      </div>
      <Separator />
      <div className="w-full px-4 flex justify-between mt-2">
        <div className="flex gap-1 text-white text-lg mt-2">
          <IoMdSettings className="mt-1" />
          <p>Model</p>
        </div>
        <SelectComponent model={model} selectModel={setModel} />
      </div>
      <div className="text-white px-4 flex flex-col gap-4 mt-2">
        <p className="flex justify-between text-gray-300">
          <span>Temparature</span>
          <span>{temperature / 100}</span>
        </p>
        <SliderComponent
          value={[temperature]}
          onValueChange={e => setTemperature(e[0])}
        />
      </div>
    </div>
  )
}

const Chat: React.FC = () => {
  const currentLLM: LLMDataProps | undefined = useAppSelector(selectCurrentLLM)
  console.log("currentLLM", currentLLM)
  if (!currentLLM) {
    return (
      <Layout>
        <div className="w-full h-[90vh] text-white bg-black flex justify-center items-center">
          <div className="flex flex-col gap-2">
            <FaRegUserCircle className="text-9xl mx-auto" />
            <p>Please select a model to view this page.</p>
          </div>
        </div>
      </Layout>
    )
  }

  const { isSignedIn, user, isLoaded } = useUser()

  const [inputMessage, setInputMessage] = useState<string>("")
  const [messages, setMessages] = useState<Message[]>(currentLLM?.message)
  useEffect(() => {
    setMessages(currentLLM?.message ?? [])
  }, [currentLLM])

  const handleSendMessage = async () => {
    if (inputMessage.trim() === "") return

    const newMessage: Message = {
      id: messages.length + 1,
      content: inputMessage.trim(),
      sender: "user",
    }

    setMessages(prevMessages => [...prevMessages, newMessage])
    setInputMessage("")

    const full_prompt = `Give response to ${inputMessage.trim()}`
    const system_prompt =
      "You are a helpful, respectful and honest assistant. Always answer as helpfully as possible, while being safe. Your answers should not include any harmful, unethical, racist, sexist, toxic, dangerous, or illegal content. Please ensure that your responses are socially unbiased and positive in nature.\n\nIf a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct. If you don't know the answer to a question, please don't share false information."
    const result = await getResponse({
      prompt: full_prompt,
      temperature: temperature / 100,
      system_prompt: currentLLM?.prompt ? currentLLM.prompt : system_prompt,
      type: currentLLM?.type === "Creative" ? "Image" : model,
    })

    const response: Message = {
      id: messages.length + 1,
      content: typeof result === "string" ? result.trim() : "Some Error...",
      sender: "bot",
    }

    setMessages(prevMessages => [...prevMessages, response])
  }

  const [temperature, setTemperature] = useState<number>(40)

  const [model, setModel] = useState<LLMProps>("ChatGPT")

  return (
    <>
      <SignedIn>
        <div className="flex">
          <div className="hidden sm:flex w-[7vw]">
            <Sidebar />
          </div>
          <div className="w-screen sm:w-[93vw] flex bg-black overflow-y-hidden">
            <ModelSidebar currentLLM={currentLLM} />

            <div className="container mx-auto max-w-2xl p-4">
              <div className="flex text-white w-fit mx-auto gap-2">
                <img
                  src={currentLLM.image}
                  alt="kitten"
                  className="w-14 h-14 rounded-md mx-auto"
                />
                <h1 className="text-lg mt-3 sm:text-2xl font-bold text-center sm:mt-2">
                  {currentLLM.name}
                </h1>
              </div>

              <Separator className="mt-4" />

              <div className="h-[86vh] mt-4 flex flex-col justify-between relative">
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
                          src={currentLLM?.image}
                          alt="kitten"
                          className="w-10 h-10 rounded-full mr-4"
                        />
                      )}

                        <div
                          className={`p-4 w-fit gray-bg rounded-b-md ${message.sender === "user" ? "rounded-tl-md" : "rounded-tr-md"}`}
                        >
                          {currentLLM?.type === "Creative" &&
                          message.sender === "bot" ? (
                            <img
                              src={`data:image/png;base64,${message.content}`}
                              alt="image"
                            />
                          ) : (
                            message.content
                          )}
                        </div>
                      </div>
                  ))}
                </div>

                <div className="flex mt-4 fixed bottom-4 left-[8%] sm:left-[37%] xl:left-auto sm:bottom-2 sm:w-[59vw] lg:w-[40vw]">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={e => setInputMessage(e.target.value)}
                    className="flex-1 rounded-lg w-[40vw] sm:left-[50%] xl:w-auto p-2 border border-gray-300 focus:outline-none"
                    placeholder="Type your message..."
                    onKeyDown={e => {
                      if (e.key === "Enter" && inputMessage.trim() !== "") {
                        handleSendMessage()
                      }
                    }}
                  />
                  <button
                    className="text-black px-2 py-2 sm:px-4 sm:py-2 absolute right-0 mt-[1px]"
                    onClick={handleSendMessage}
                  >
                    <IoMdSend className="text-2xl" />
                  </button>
                </div>
              </div>
            </div>

            <ModelDescription
              temperature={temperature}
              setTemperature={setTemperature}
              model={model}
              setModel={setModel}
              llm={currentLLM}
            />
          </div>
        </div>
      </SignedIn>

      <SignedOut>
        <Layout>
          <div className="w-full h-[90vh] text-white bg-black flex justify-center items-center">
            <div className="flex flex-col gap-2">
              <FaRegUserCircle className="text-9xl mx-auto" />
              <p>Please sign in to view this page.</p>
            </div>
          </div>
        </Layout>
      </SignedOut>
    </>
  )
}

export default Chat
