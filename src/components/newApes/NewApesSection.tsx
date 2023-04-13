import React from 'react'
import { Rabisco } from './Rabisco'
import { WhiteButton } from '../buttons/WhiteButton'
import { Card } from './Cards/Card'


export const NewApesSection = () => {
  return (
    <section className='flex justify-center items-center flex-col gap-20 mt-20 font-robotoCondensed bg-white'>
        <Rabisco />
      <div className='flex flex-col items-center justify-between gap-y-8 border-b-2 border-b-black pb-4 w-full xl:w-10/12 md:flex-row'>
        <h1 className='font-bold text-5xl text-center md:text-left xl:text-7xl'>Meet The new Year Apes</h1>
        <WhiteButton color='[#97FA01]'>NEW YEAR APE</WhiteButton>
      </div>
      <Card />
    </section>
  )
}
