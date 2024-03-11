import Layout from "@/layout/Layout"
import { CustomDropdownMenu } from "@/components/DropDown"
import { CardCollect } from "@/components/Carousel"
import { CardLLM } from "@/components/Card"
import { HeaderData, LLMData, LLMDataProps, LLMDataTop } from "@/db/data"
import { FaRegImage } from "react-icons/fa6"
import { IoIosText } from "react-icons/io"
import { IoFilter } from "react-icons/io5"
import { GrPowerReset } from "react-icons/gr"
import { useDispatch } from "react-redux"
import {setCurrentLLM, selectCurrentLLM, selectAvailableLLMs} from '@/features/llm/llmSlice';
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import {useAppSelector} from '@/app/hooks';

const Home = () => {
  const items = [
    {
      icon: (
        <FaRegImage
          style={{ fill: "url(#blue-gradient)", stroke: "url(#blue-gradient)" }}
          className="mr-2 h-4 w-4"
        />
      ),
      label: "Image Generation",
    },
    {
      icon: (
        <IoIosText
          style={{ fill: "url(#blue-gradient)", stroke: "url(#blue-gradient)" }}
          className="mr-2 h-4 w-4"
        />
      ),
      label: "Text Generation",
    },
    {
      icon: (
        <GrPowerReset
          style={{ fill: "url(#blue-gradient)", stroke: "url(#blue-gradient)" }}
          className="mr-2 h-4 w-4"
        />
      ),
      label: "Default",
    },
  ]

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const avalaibleLLM = useAppSelector(selectAvailableLLMs);

  // const handleClick = (selectedLLM:LLMDataProps) => {
  //   dispatch(setCurrentLLM(selectedLLM));
  //   if (currentLLM) { // Check if currentLLM is updated
  //     navigate("/chat");
  //   }
  // }

  const handleClick = (selectedLLM: LLMDataProps) => {
    Promise.resolve()
      .then(() => dispatch(setCurrentLLM(selectedLLM)))
      .then(() => navigate("/chat"))
  }

  const [data, setData] = useState({
    bool: false,
    type: "",
  })

  const handleData = (e: any) => {
    console.log("Data", e.target.innerText)
    if (e.target.innerText === "Latest") {
      setData({ bool: false, type: "" })
    } else {
      setData({ bool: true, type: e.target.innerText })
    }
  }

  return (
    <Layout>
      <div className="bg-black w-[93vw] overflow-x-hidden px-4">
        <svg width="0" height="0">
          <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop stop-color="#8a2be2" offset="0%" />
            <stop stop-color="#87ceeb" offset="100%" />
          </linearGradient>
        </svg>

        <div className="flex">
          <div className="flex px-4 py-4">
            <CustomDropdownMenu
              items={items}
              triggerIcon={<IoFilter className="h-5 w-5" />}
              setData={setData}
            />
          </div>

          {HeaderData.map((data, index) => (
            <div
              key={index}
              className="flex px-4 py-4 cursor-pointer hover:bg-black hover:opacity-80"
              onClick={e => handleData(e)}
            >
              <div className="dark-bg text-white w-auto h-[2.2rem] p-2 flex gap-1 justify-center align-middle rounded-md">
                <data.icon
                  style={{
                    fill: "url(#blue-gradient)",
                    stroke: "url(#blue-gradient)",
                  }}
                  className="h-5 w-5"
                />
                <p className="font-light relative bottom-[1px]">{data.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`${data.bool ? "hidden" : " px-4 flex gap-4 h-[50%]"}`}>
          <CardCollect />
          <div className="grid grid-cols-2 lg:grid-cols-3 w-[70%] px-4">
            {LLMDataTop.map((card, index) => (
              <div
                key={index}
                className={`relative flex justify-center items-center cursor-pointer ${index >= 2 && "hidden lg:block"}`}
                onClick={() => handleClick(card)}
              >
                <CardLLM key={index} card={card} />
              </div>
            ))}
          </div>
        </div>

        <div
          className={`${data.bool ? "hidden" : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4"} `}
        >
          {/* Repeat LLMData three times */}
          {Array(3)
            .fill(null)
            .map((_, outerIndex) => (
              <>
                {avalaibleLLM.map((card, index) => (
                  <div
                    key={`${outerIndex}-${index}`}
                    className={`relative flex justify-center items-center cursor-pointer`}
                    onClick={() => handleClick(card)}
                  >
                    <CardLLM key={index} card={card} />
                  </div>
                ))}
              </>
            ))}
        </div>

        <div
          className={`${data.bool ? "flex gap-4 p-4 bg-black h-[81vh]" : "hidden"}`}
        >
          {avalaibleLLM.map((card, index) => (
            <div
              key={index}
              className={`relative cursor-pointer`}
              onClick={() => handleClick(card)}
            >
              {data.type === "Text Generation"
                ? card.type !== "Creative" && (
                    <CardLLM key={index} card={card} />
                  )
                : card.type === data.type && (
                    <CardLLM key={index} card={card} />
                  )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Home
