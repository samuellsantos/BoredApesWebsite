import React from 'react'
import { OurCollectionHeader } from './header/OurCollectionHeader'
import { Collection } from './Collection/Collection'

export const OurCollection = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-[url('/src/assets/backgroundGreen.png')] mt-24 ">
      <OurCollectionHeader />
      <section className="mt-12">
        <div className='flex justify-around gap-24 h-24'>
          <h1 className='text-6xl font-robotoCondensed font-bold'>Our Collection</h1>
          <p className='text-2xl font-overpass self-end '>
            Ready to join the New Year Ape <br /> World? Browse our collections below
          </p>
        </div>
      </section>
      <Collection />
    </section>
  )
}
