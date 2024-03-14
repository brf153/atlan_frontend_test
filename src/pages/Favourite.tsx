import { useAppDispatch, useAppSelector } from '@/app/hooks'
import Layout from '@/layout/Layout'
import {selectFavouriteLLMs, setCurrentLLM} from '@/slice/llmSlice';
import React from 'react'
import {CardLLM} from '@/components/Card';
import {LLMDataProps} from '@/db/data';
import { useNavigate } from 'react-router-dom';
import {SignedIn, SignedOut} from '@clerk/clerk-react';
import {FaRegUserCircle} from 'react-icons/fa';

type Props = {}

const Favourite = (props: Props) => {
  const favouriteLLM = useAppSelector(selectFavouriteLLMs)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const handleClick = (selectedLLM: LLMDataProps) => {
    Promise.resolve()
      .then(() => dispatch(setCurrentLLM(selectedLLM)))
      .then(() => navigate("/chat"))
  }
  return (
    <>
      <SignedIn>
        <Layout>
          <div className="bg-black w-screen sm:w-[93vw] h-screen sm:h-[90vh] overflow-x-hidden px-4 flex flex-col sm:gap-8">
            <h1 className="text-3xl text-white font-bold">Favourite</h1>
            {favouriteLLM.length === 0 ? (
              <div>
                <p className="text-white">No favourite LLMs yet</p>
              </div>
            ) : (
              <div className="flex gap-4">
                {favouriteLLM.map((card) => (
                  <div className="cursor-pointer" onClick={() => handleClick(card)}>
                    <CardLLM card={card} />
                  </div>
                ))}
              </div>
            )}
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
  );  
}

export default Favourite