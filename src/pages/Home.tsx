import Layout from "@/layout/Layout"
import { CustomDropdownMenu } from "@/components/DropDown"
import { CardCarousel } from "@/components/Carousel"
import { CardLLM } from "@/components/Card"
import { HeaderData, LLMData, LLMDataProps, LLMDataTop } from "@/db/data"
import { FaRegImage } from "react-icons/fa6"
import { IoIosText } from "react-icons/io"
import { IoFilter } from "react-icons/io5"
import { GrPowerReset } from "react-icons/gr"
import { useDispatch } from "react-redux"
import {
  setCurrentLLM,
  selectCurrentLLM,
  selectAvailableLLMs,
  setAvailableLLMs,
} from "@/slice/llmSlice"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axiosInstance from "@/api/axios"
import Loader from "@/components/Loader"
import { Separator } from "@/components/ui/separator"

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
  const [availableLLM, setAvailableLLM] = useState<LLMDataProps[]>([])

  const [loader, setLoader] = useState(true)

  useEffect(() => {
    axiosInstance
      .get("api/v1/llm")
      .then(res => {
        dispatch(setAvailableLLMs(res.data))
        setAvailableLLM(res.data)
        setLoader(false)
      })
      .catch(err => console.log(err))
  }, [])

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
    <>
      {loader && <Loader />}

      {!loader && (
        <Layout>
          <div className="bg-black h-[90vh] sm:h-[90vh] w-screen md:w-[93vw] overflow-x-hidden md:px-4">
            <svg width="0" height="0">
              <linearGradient
                id="blue-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop stop-color="#8a2be2" offset="0%" />
                <stop stop-color="#87ceeb" offset="100%" />
              </linearGradient>
            </svg>

            <div className="flex">
              <div className="flex px-2 md:px-4 py-4">
                <CustomDropdownMenu
                  items={items}
                  triggerIcon={
                    <IoFilter className="h-[3vmin] w-[3vmin] md:h-5 md:w-5" />
                  }
                  setData={setData}
                />
              </div>

              {HeaderData.map((data, index) => (
                <div
                  key={index}
                  className="flex px-2 md:px-4 py-4 cursor-pointer hover:bg-black hover:opacity-80"
                  onClick={e => handleData(e)}
                >
                  <div className="dark-bg text-white w-auto h-fit md:h-[2.2rem] p-1 md:p-2 flex gap-1 justify-center align-middle rounded-md">
                    <data.icon
                      style={{
                        fill: "url(#blue-gradient)",
                        stroke: "url(#blue-gradient)",
                      }}
                      className="w-[3vmin] h-[3vmin] md:h-5 md:w-5"
                    />
                    <p className="font-light relative bottom-[1px] text-xs sm:text-[1rem] sm:bottom-0 sm:mt-[1px]">
                      {data.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`${data.bool ? "hidden" : "px-4 flex gap-4 sm:h-[50%]"}`}
            >
              <CardCarousel />
              <div className="hidden sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-2 xl:grid-cols-3 gap-y-6 h-fit my-auto w-[70%] px-4">
                {availableLLM.slice(0, 6).map((card, index) => (
                  <div
                    key={index}
                    className={`relative flex justify-center items-center cursor-pointer ${index >= 4 && "hidden xl:block"} `}
                    onClick={() => handleClick(card)}
                  >
                    <CardLLM key={index} card={card} />
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`${data.bool ? "hidden" : "hidden sm:grid sm:grid-cols-2 md:grid-cols-3 sm:mt-6 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4"} `}
            >
              {/* Repeat LLMData three times */}
              {Array(3)
                .fill(null)
                .map((_, outerIndex) => (
                  <>
                    {availableLLM.map((card, index) => (
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

            <div className="text-white sm:hidden flex flex-col gap-4 mt-4">
              <p className="h-8 p-4 px-5 text-gray-500 text-3xl text-center">
                LLM Model Catalog
              </p>
              <Separator className="mt-2 w-[90%] mx-auto bg-gray-500" />
              {/* Repeat LLMData three times */}
              <div
                className={`${data.bool ? "hidden" : "grid grid-cols-2 gap-y-4"} `}
              >
                {Array(3)
                  .fill(null)
                  .map((_, outerIndex) => (
                    <>
                      {availableLLM.map((card, index) => (
                        <div
                          key={`${outerIndex}-${index}`}
                          className={`relative w-fit flex justify-center cursor-pointer mx-auto`}
                          onClick={() => handleClick(card)}
                        >
                          <CardLLM key={index} card={card} />
                        </div>
                      ))}
                    </>
                  ))}
              </div>
            </div>

            <div
              className={`${data.bool ? "flex gap-4 p-4 bg-black h-[81vh]" : "hidden"}`}
            >
              {availableLLM.map((card, index) => (
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
      )}
    </>
  )
}

export default Home
