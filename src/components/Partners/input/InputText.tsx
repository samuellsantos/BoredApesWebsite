import React from 'react'
import { WhiteButton } from '../../buttons/WhiteButton'

export const InputText = () => {
  return (
    <div className='my-20 font-robotoCondensed flex items-center justify-between gap-4 md:gap-24 px-4'>
      <input type="text" placeholder='Enter your mail' className='"border border-b-2 focus:outline-none focus:border-[#97FA01] w-3/4 pb-4 self-end'/> <WhiteButton color='[#97FA01]'>Send</WhiteButton>
    </div>
  )
}
