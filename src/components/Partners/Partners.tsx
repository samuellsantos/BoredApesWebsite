import React from 'react'
import background from '../../assets/monkey-bg.png'
import { PartnersName } from './PartnersName/PartnersName'
import { InputText } from './input/InputText'

export const Partners = () => {
  return (
    <section className="flex items-center justify-center flex-col relative mt-24">
      <div className='z-20 flex flex-col items-center'>
        <h1 className='text-7xl font-overpass font-bold'>Partners</h1>
        <p className='font-robotoCondensed text-2xl'>
          New Year Ape World gets by with a little help from our friends:
        </p>
      </div>
      <PartnersName />
      <div>
        <h1 className='text-6xl mt-12 font-robotoCondensed font-bold'>Subscribe to our updates</h1>
        <InputText />
      </div>
      <img src={background} alt="Background Image" className='absolute top-4 z-10'/>
    </section>
  )
}
