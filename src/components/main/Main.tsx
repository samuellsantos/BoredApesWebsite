import React from 'react'
import { Navbar } from './navbar/Navbar'
import bg from '../../assets/backgroundGreen.png'
import { WhiteButton } from '../buttons/WhiteButton'
import { TransparentButton } from '../buttons/TransparentButton'

export const Main = () => {
  return (
    <main className="bg-[url('/src/assets/backgroundGreen.png')] flex items-center justify-center flex-col z-10">
      <Navbar />
      <h1 className='font-bold font-robotoCondensed uppercase text-8xl 2xl:text-9xl'>New Year ape world</h1>
      <div className='flex gap-8'>
      <div>
      <WhiteButton>Buy Now</WhiteButton>
      <TransparentButton brColor=''>Check it</TransparentButton>
      </div>
      </div>
    </main>
  )
}
