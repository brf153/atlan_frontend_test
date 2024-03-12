import React, { useEffect } from "react"
import Layout from "@/layout/Layout"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-react"
import { formatDate, formatNumber } from "@/utils/utils"
import backgroundLogo from "@/public/background_myai.jpg"
import { GoPlus } from "react-icons/go"
import { DialogComponent } from "@/components/Dialog"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { selectLLMsByCreator, selectAvailableLLMs } from "@/slice/llmSlice"
import { LLMDataProps } from "@/db/data"
import { CardLLM } from "@/components/Card"
import { FaRegUserCircle } from "react-icons/fa";

type Props = {}

const MyAI = (props: Props) => {
  const { isSignedIn, user, isLoaded } = useUser()
  let myArray: LLMDataProps[]
  myArray = []
  const [aiData, setAiData] = React.useState({
    bool: false,
    data: myArray,
  })
  const [showForm, setShowForm] = React.useState(false)

  const dispatch = useAppDispatch()
  const myLLM = useAppSelector(selectLLMsByCreator(user?.firstName ?? ""))
  const availableLLMs = useAppSelector(selectAvailableLLMs)

  useEffect(() => {
    try {
      if (user) {
        console.log("user", user?.firstName)
        console.log("myllm", myLLM)
        if (myLLM.length > 0) {
          setAiData({
            bool: true,
            data: myLLM,
          })
        }
      }
    } catch (error) {
      console.error(error)
    }
  }, [availableLLMs])

  return (
    <>   
     <SignedIn>
      <Layout>
      <div className="bg-black w-screen sm:w-[93vw] h-screen sm:h-[90vh] overflow-x-hidden px-4 flex flex-col sm:gap-8">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4 h-[40%] sm:w-[80%] sm:h-[40%] mx-auto">
          <div className="w-full sm:w-2/3 h-2/3 sm:h-full">
            <Card className="dark-bg text-white relative w-full h-full">
              <div className="absolute top-[17%] sm:top-[25%] left-10">
                {/* pic ke liyehai */}
                <img
                  src={user?.imageUrl}
                  alt="profile"
                  className="w-[15vmin] h-[15vmin] sm:w-24 sm:h-24 rounded-full"
                />
              </div>
              <div className="w-full h-1/3 sm:h-2/5 bg-black flex justify-end">
                <img
                  src={backgroundLogo}
                  alt="background"
                  className="sm:w-4/5 sm:h-full opacity-40"
                />
                {/* top ke liyehai */}
                <div className="flex w-fit h-fit gap-3 p-4 rounded-lg text-sm sm:text-md my-auto mx-8">
                  <p className="flex flex-col">
                    <span>Followers</span>
                    <span className="text-center">{formatNumber(0)}</span>
                  </p>
                  <p className="flex flex-col">
                    <span>Following</span>
                    <span className="text-center">{formatNumber(0)}</span>
                  </p>
                  <p className="flex flex-col">
                    <span>Uses</span>
                    <span className="text-center">{formatNumber(0)}</span>
                  </p>
                </div>
              </div>
              <Separator />
              <div className="w-full h-2/3 sm:h-3/5 px-8 py-10">
                {/* bottom ke liyehai */}
                <div className="w-fit h-fit sm:mt-4 flex flex-col gap-2">
                  <p className="text-md sm:text-3xl font-bold">{user?.fullName}</p>
                  <p className="text-sm sm:text-md">Joined {formatDate(String(user?.createdAt))}</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="flex h-1/3 sm:flex sm:flex-col sm:w-1/3 gap-2 sm:h-full">
            <Card className="dark-bg text-white w-[90%] h-full sm:h-3/5">
              <div className="sm:text-2xl p-2 px-3 sm:p-4 font-bold h-1/3 sm:h-auto">Links</div>
              <Separator />
              <div className="text-sm h-2/3 sm:h-auto sm:text-md"><p className="p-2 px-3">+ Add your link now</p></div>
            </Card>
            <Card className="dark-bg text-white w-[90%] h-full sm:h-2/5">
            <div className="sm:text-2xl p-2 px-3 sm:p-4 font-bold h-1/3 sm:h-auto">Tip</div>
              <Separator />
              <div className="text-sm h-2/3 sm:h-auto sm:text-md"><p className="p-2 px-3">Total Tip</p></div>
            </Card>
          </div>
        </div>

        <div className="flex-col flex w-[80%] mx-auto mt-4 sm:mt-0">
          <p className="text-xl sm:text-2xl mx-4 font-bold text-white">Your AI</p>
          <Separator className="w-[97%] mt-1" />
          <div className="mt-8 flex gap-4">
            {aiData.bool ? (
              aiData.data.slice(0, 3).map((card: LLMDataProps, index: number) => (
                <CardLLM card={card} />
              ))
            ) : (
              <Card className="bg-black text-white w-[40vmin] h-[30vmin] sm:w-[30%] sm:h-[30vh] border-dashed flex flex-col justify-center">
                <CardContent className="w-fit mx-auto cursor-pointer">
                  <DialogComponent setAiData={setAiData}/>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </Layout>
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

export default MyAI
