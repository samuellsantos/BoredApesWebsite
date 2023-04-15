import React from 'react'
import rabisco from '../../assets/rabisco.png'
import styles from './Rabisco.module.css'

export const Rabisco = () => {
  return (
    <div className='flex items-center justify-center md:justify-between flex-wrap w-full gap-6 xl:w-10/12'>
      <div className='flex gap-6'>
          <div className={`relative cursor-pointer ${styles.rabisco}`}>
            <img src={rabisco} alt="Rabisco" />
            <a href="#" className='absolute top-3 left-6 font-overpass underline'>Twitter</a>
          </div>
          <div className={`relative cursor-pointer ${styles.rabisco}`}>
            <img src={rabisco} alt="Rabisco" />
            <a href="#" className='absolute top-3 left-4 font-overpass underline'>Instagram</a>
          </div>
        </div>


        <div className='flex gap-6'>
          <div className={`relative cursor-pointer ${styles.rabisco}`}>
              <img src={rabisco} alt="Rabisco" />
              <a href="#" className='absolute top-3 left-5 font-overpass underline'>Telegram</a>
            </div>
            <div className={`relative cursor-pointer ${styles.rabisco}`}>
              <img src={rabisco} alt="Rabisco" />
              <a href="#" className='absolute top-3 left-4 font-overpass underline'>Facebook</a>
            </div>
        </div>
    </div>
  )
}
