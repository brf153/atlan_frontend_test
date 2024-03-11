import React from 'react'
import Layout from '@/layout/Layout';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useUser } from "@clerk/clerk-react";
import { formatDate, formatNumber } from '@/utils/utils';
import backgroundLogo from "@/public/background_myai.jpg"
import { GoPlus } from "react-icons/go";
import { DialogDemo } from '@/components/Dialog';

type Props = {}

const MyAI = (props: Props) => {
  const { isSignedIn, user, isLoaded } = useUser();
  const [aiData, setAiData] = React.useState(false)
  const [showForm, setShowForm] = React.useState(false)

  // const handleClick = () => {
  //   // setAiData(true)
  //   setShowForm(!showForm)

  // }
  
  return (
    <Layout>
    <div className='bg-black w-[93vw] h-[88vh] overflow-x-hidden px-4 flex flex-col gap-8'>

      <div className='flex gap-4 mt-4 w-[80%] h-[40%] mx-auto'>

        <div className='w-2/3'>
            <Card className='dark-bg text-white relative w-full h-full'>
              <div className='absolute top-[25%] left-10'>
                {/* pic ke liyehai */}
                <img src={user?.imageUrl} alt="profile" className='w-24 h-24 rounded-full' />
              </div>
              <div className='w-full h-2/5 bg-black flex justify-end'>
                <img src={backgroundLogo} alt="background" className='w-4/5 h-full' />
                {/* top ke liyehai */}
                  <div className='flex w-fit h-fit gap-3 p-4 rounded-lg my-auto mx-8'>
                    <p className='flex flex-col'>
                      <span>Followers</span>
                      <span className='text-center'>{formatNumber(0)}</span>
                    </p>
                    <p className='flex flex-col'>
                      <span>Following</span>
                      <span className='text-center'>{formatNumber(0)}</span>
                    </p>
                    <p className='flex flex-col'>
                      <span>Uses</span>
                      <span className='text-center'>{formatNumber(0)}</span>
                    </p>
                  </div>
              </div>
                <Separator />
              <div className='w-full h-3/5 px-8 py-10'>
                {/* bottom ke liyehai */}
                <div className='w-fit h-fit mt-4 flex flex-col gap-2'>
                  <p className='text-3xl font-bold'>{user?.fullName}</p>
                  <p>Joined {formatDate(String(user?.createdAt))}</p>
                </div>
              </div>
            </Card>
        </div>

        <div className='flex flex-col w-1/3 gap-2 h-full'>
          <Card className='dark-bg text-white w-[90%] h-3/5'>
            <CardHeader className='text-2xl font-bold'>
              Links
            </CardHeader>
            <Separator />
            <CardContent>
              + Add your link now
            </CardContent>
          </Card>
          <Card className='dark-bg text-white w-[90%] h-2/5'>
            <CardHeader className='text-2xl font-bold'>
              Tip
            </CardHeader>
            <Separator />
            <CardContent>
              Total Tip
            </CardContent>
          </Card>
        </div>

      </div>

      <div className='flex-col flex w-[80%] mx-auto'>
        <p className='text-2xl mx-4 font-bold text-white'>Your AI</p>
        <Separator className='w-[97%] mt-1'/>
        <div className='mt-8'>
          {
            aiData ? (
              <Card className='dark-bg text-white w-full'>
            <CardHeader className='text-2xl font-bold'>
              AI
            </CardHeader>
            
            <CardContent>
              AI
            </CardContent>
          </Card>
            ):(
              <Card className='bg-black text-white w-[30%] h-[200px] border-dashed flex flex-col justify-center'>
            
            <CardContent className='w-fit mx-auto cursor-pointer'>
              <DialogDemo />
            </CardContent>
          </Card>
            )
          }
          
        </div>
      </div>

    </div>
    </Layout>
  )
}

export default MyAI