import React from 'react'
import { Navbar } from './navbar/Navbar'
import { WhiteButton } from '../buttons/WhiteButton'
import { TransparentButton } from '../buttons/TransparentButton'
import ballon from '../../assets/balloon.png'
import styles from './Main.module.css'

export const Main = () => {
  return (
    <main className="bg-[url('/src/assets/backgroundGreen.png')] flex items-center justify-center flex-col gap-20">
      <Navbar />
      <h1 className='font-bold font-robotoCondensed uppercase text-center z-20 text-8xl lg:text-9xl'>New Year ape world</h1>
      {/* BALLOONS */}
      <img src={ballon} alt="Ballon" className={`z-10 absolute right-80 top-44 ${styles.balloon}`}/>
      <img src={ballon} alt="Ballon" className={`z-10 absolute left-80 top-44 ${styles.balloon}`}/>
      <img src={ballon} alt="Ballon" className={`z-10 absolute right-96 top-72 ${styles.balloon}`}/>

      <div className='flex flex-col items-center justify-around gap-24 pb-60 lg:gap-40 lg:flex-row md:gap-24 sm:flex-col'>
      <div className='flex gap-8'>
        <WhiteButton color='white'>Buy Now</WhiteButton>
        <TransparentButton brColor='white'>Check it</TransparentButton>
      </div>
      <p className='font-overpass text-2xl font-500 text-center w-9/12 md:text-left lg:w-5/12 sm:w-full'>
        New Year Ape metaverse ecosystem of NFT character collectables and a global
      </p>
      </div>
    </main>
  )
}
