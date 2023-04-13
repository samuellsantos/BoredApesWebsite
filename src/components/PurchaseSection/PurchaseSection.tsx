import React from 'react'
import { CardAndMonkey } from './CardAndMonkey/CardAndMonkey'
import diretorImage from '../../assets/BigBored.png'
import { FaHeart } from "react-icons/fa";
import profile from '../../assets/profile4.jpg'


export const PurchaseSection = () => {
  return (
    <section className='flex flex-wrap justify-around items-center mt-24 bg-white'>
      <div className='p-8'>
        <img src={diretorImage} alt="diretorImage" className='rounded'/>
        <div className='flex flex-col gap-2 font-overpass bg-[#97FA01] p-4 rounded-br rounded-bl'>
          <header className='flex items-center gap-4'>
            <img src={profile} alt="Profile Picture" className='rounded-full'/>
            <h1 className='text-2xl font-bold'>@BAYC</h1>
          </header>
          <main>
            <p>0.08 ETH #6192</p>
            <p className='flex items-center gap-2'>
              <FaHeart /> <span>50</span>
            </p>
          </main>
        </div>
      </div>

       <div>
        <CardAndMonkey />
      </div>
    </section>
      
  )
}
