import React, { ReactNode } from 'react'
import { FaHeart } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

interface Card  {
  profile: string;
  name: string;
}

export const BidCard = ({profile, name}: Card) => {
  return (
    <div className='flex gap-2 font-overpass rounded bg-[#97FA01] w-64 p-2'>
      <div className="rounded-full self-start">
        <img src={profile} alt="Profile" className='rounded-full'/>
      </div>
      <main className='flex flex-col gap-1 self-center'>
        <h1 className='uppercase font-bold'>{name}</h1>
        <p>0.08 ETH #6192</p>
        <p className='flex items-center gap-2'>
          <FaHeart /> <span>50</span>
        </p>
      </main>
      <a href="#" className='self-center flex items-center bg-white p-1 rounded'>Bid<FaArrowRight /></a>
    </div>
  )
}
