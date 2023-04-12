import React from 'react'
import ape1 from '../../../assets/bored1.png'
import ape2 from '../../../assets/bored2.png'
import ape3 from '../../../assets/bored3.png'
import styles from './ApesCard.module.css'
import { GoVerified } from 'react-icons/go';
import { FaEthereum } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { CircularText } from './CircularText'



export const ApesCard = () => {

  /* LIST OF IMAGES AND DETAILS BORED APES */
  const apes = [
    {
      id: 1,
      name: 'Bored Ape Yacht Club',
      number: 6163,
      price: 2.42,
      src: ape1
    },
    {
      id: 2,
      name: 'Bored Ape Yacht Club',
      number: 6164,
      price: 2.49,
      src: ape2
    },
    {
      id: 3,
      name: 'Bored Ape Yacht Club',
      number: 6721,
      price: 3.58,
      src:ape3
    }
  ]

  /* FUNCTION FOR HOVER DETAILS */
  const [showDetails, setShowDetails] = React.useState(null)

  function toggleShowDetails(id:number | any) {
    if (showDetails === id) {
      setShowDetails(null);
    } else {
      setShowDetails(id);
    }
  }

  return (
    <section className='flex flex-wrap items-center justify-center gap-x-32 w-full '>
      {apes.map((ape) => (
        <div key={ape.id} className={`${styles.container} relative`}  
        onMouseEnter={() => toggleShowDetails(ape.id)}
        onMouseLeave={() => setShowDetails(null)}>
          
          <img src={ape.src} alt={ape.name} className={styles.image}/>

          {showDetails === ape.id && (
            <div className={`bg-[#97FA01] p-4 font-overpass absolute ${styles.detailsSection} left-2 top-64`}>
            <section className={`flex items-center justify-between`}>

              <p className='flex items-center gap-2 font-bold cursor-pointer'>{ape.name} <GoVerified /></p> 
              <p className='text-white bg-black p-2 rounded text-xs'>{ape.number}</p>
            </section>

            <section className='flex items-center justify-between mt-4'>
              <p className='flex items-center gap-2 pointer-events-none'>
                <FaEthereum /> {ape.price}
              </p>
              <FiArrowUpRight size={25} className='cursor-pointer'/>
            </section>
          </div>
          )}
          
        </div>
      ))}

      <CircularText />
    </section>
  )
}
