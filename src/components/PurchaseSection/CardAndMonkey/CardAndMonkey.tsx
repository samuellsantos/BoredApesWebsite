import React from 'react'
import profile1 from '../../../assets/profile1.jpg'
import profile2 from '../../../assets/profile2.jpg'
import profile3 from '../../../assets/profile3.jpg'
import { BidCard } from '../BidCard/BidCard'

import monekey1 from '../../../assets/NObgBored1.png'
import monekey2 from '../../../assets/NObgBored2.png'
import monekey3 from '../../../assets/NObgBored3.png'

export const CardAndMonkey = () => {
  return (
    <div>
      <section className='flex items-end'>
        <img src={monekey1} alt="Monkey" />
        <BidCard profile={profile1} name='@rahman'/>
      </section>


        <section className='flex items-end'>
        <BidCard profile={profile2} name='@Will Smith'/>
        <img src={monekey2} alt="Monkey" className='transform scale-x-[-1]'/>
        </section>
        
        <section className='flex items-end '>
        <img src={monekey3} alt="Monkey" />
        <BidCard profile={profile3} name='@Samukk.a'/>
        </section>
    </div>
  )
}
