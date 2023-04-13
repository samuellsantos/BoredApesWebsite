import React from 'react'
import { ApesCard } from './ApesCard'
import circle from '../../../assets/circle.png'

export const MainApes = () => {
  return (
    <div className={`bg-gradient-to-b from-[#D8A1FE] to-[#D6A0FD] flex flex-col items-center relative`}>
      <ApesCard /> 
      <div className='absolute -bottom-20 bg-white p-4 rounded-full'>
        <img src={circle} alt="Circle" />
      </div>
  </div>
  )
}
