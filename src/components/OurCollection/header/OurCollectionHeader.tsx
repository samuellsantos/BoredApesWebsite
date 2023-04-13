import React from 'react'
import { FaArrowRight } from "react-icons/fa";

export const OurCollectionHeader = () => {
  return (
    <header className='flex items-center justify-center gap-4 bg-black p-4 overflow-hidden w-full'>
      <div className='hidden gap-12 text-[#f29ef5] 2xl:flex'>
      <FaArrowRight size={30}/>
      <FaArrowRight size={30}/>
      <FaArrowRight size={30}/>
      <FaArrowRight size={30}/>
      <FaArrowRight size={30}/>
      <FaArrowRight size={30}/>
      <FaArrowRight size={30}/>
      </div>
      
      <h1 className='text-white text-center font-robotoCondensed text-4xl lg:text-6xl'>
        A Quick look at
      </h1>

      <div className=' gap-12 hidden text-[#f29ef5] 2xl:flex'>
      <FaArrowRight size={30}/>
      <FaArrowRight size={30}/>
      <FaArrowRight size={30}/>
      <FaArrowRight size={30}/>
      <FaArrowRight size={30}/>
      <FaArrowRight size={30}/>
      <FaArrowRight size={30}/>
      </div>
    </header>
  )
}
