import React from 'react'
import { Rabisco } from './Rabisco'
import { WhiteButton } from '../buttons/WhiteButton'


export const NewApesSection = () => {
  return (
    <section className='flex justify-center items-center flex-col'>
        <Rabisco />
      <div className='flex items-center justify-between 2xl:w-10/12'>
        <h1 className='font-bold text-6xl font-robotoCondensed'>Meet The new Year Apes</h1>
        <WhiteButton color='[#97FA01]'>NEW YEAR APE</WhiteButton>
      </div>
    </section>
  )
}
