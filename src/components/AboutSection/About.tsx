import React from 'react'
import { HeaderAbout } from './header/HeaderAbout'
import img1 from '../../assets/bored7.png'
import img2 from '../../assets/bored8.png'

export const About = () => {
  return (
    <section className='mt-32'>
      <HeaderAbout />
      <main className="bg-[url('/src/assets/backgroundGreen.png')] flex items-center justify-center relative">
        <img src={img1} alt="Illustrate Image" className='absolute z-10 left-44 hidden xl:block'/>
        <img src={img2} alt="Illustrate Image" className='absolute z-10 top-10 right-52 hidden xl:block'/>

        <p className='font-robotoCondensed text-4xl text-center w-full p-6 lg:w-2/4 leading-relaxed z-20'>
          New Year Apes are our genesis collection of 10,000 2D, programmatically-<span className='border-b-8 border-b-[#D6A0FD] rounded-md'>generated ape avatars</span>, each with their own unique features and sotries to tell. Unique digital collectables living on the BNB blockchain. Your New Year Apes doubles as your NYAPE membership card, and grants access to BAYC#6192 <span className='border-b-8 border-b-[#D6A0FD] rounded-md'>only benefits.</span>
        </p>
      </main>
    </section>
  )
}
