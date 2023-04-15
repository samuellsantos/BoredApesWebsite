import React from 'react'
import { FaAdn } from "react-icons/fa";
import { FaGalacticRepublic } from "react-icons/fa";

export const PartnersName = () => {
  return (
    <div className='grid grid-cols-2 text-3xl md:text-5xl sm:text-4xl items-center justify-center gap-4 md:gap-8 mt-10'>
      <div className='flex items-center justify-center'>
        <FaAdn /> <span>Antunes</span>
      </div>
      <div className='flex items-center justify-center'>
        <FaGalacticRepublic /> <span>GalaticRepu</span>
      </div>
      <div className='flex items-center justify-center'>
        <FaGalacticRepublic /> <span>GalaticRepu</span>
      </div>
      <div className='flex items-center justify-center'>
        <FaAdn /> <span>Antunes</span>
      </div>
    </div>

  )
}
