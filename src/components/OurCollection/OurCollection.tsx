import React from 'react'
import { OurCollectionHeader } from './header/OurCollectionHeader'
import { Collection } from './Collection/Collection'

export const OurCollection = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-[url('/src/assets/backgroundGreen.png')] mt-24 ">
      <OurCollectionHeader />
      <section className="my-12">
        <div className='flex md:justify-around gap-4 flex-wrap justify-center md:gap-24 h-auto md:h-24'>
          <h1 className='md:text-6xl text-4xl font-robotoCondensed font-bold'>Our Collection</h1>
          <p className='md:text-2xl text-xl font-overpass self-end md:text-left text-center'>
            Ready to join the New Year Ape <br /> World? Browse our collections below
          </p>
        </div>
      </section>
      <Collection />
    </section>
  )
}
