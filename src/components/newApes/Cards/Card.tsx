import React from 'react'
import bored1 from '../../../assets/bored4.png'
import bored2 from '../../../assets/bored5.png'
import bored3 from '../../../assets/bored6.png'
import { FiArrowUpRight } from 'react-icons/fi';

const images = [
  {
    id: 1,
    src: bored1
  },
  {
    id: 2,
    src: bored2
  },
  {
    id: 3,
    src: bored3
  }
]

export const Card = () => {
  return (
    <section className='flex justify-center items-center flex-wrap gap-x-32 gap-y-16 w-full'>
      {images.map((image)=>(
        <div key={image.id} className='flex flex-col w-72 gap-y-3'>
          <img src={image.src} alt="Bored Ape Image" />
          <h1 className='text-2xl font-bold font-overpass'>MADE FOR ADVENTURE</h1>
          <p className='font-robotoCondensed'>
            New Year Apes love to party. Wheter they're raving up a storm in their Burrows, kicking it with Party Cat friends or travelling abroad.
          </p>
          <div className='bg-[#D6A0FD] flex items-center justify-center cursor-pointer w-8 h-8'>
            <FiArrowUpRight size={25}/>
          </div>
        </div>
      ))}
    </section>
  )
}
