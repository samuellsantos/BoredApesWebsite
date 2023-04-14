import React from 'react'
import image1 from '../../../assets/3dApe1.jpg'
import image2 from '../../../assets/3dApe2.jpg'
import image3 from '../../../assets/3dApe3.jpg'

export const Collection = () => {
  const [image, setImage] = React.useState('first')


  return (
    <div>
      {image === 'first' && (
        <div className='rounded-lg overflow-hidden'>
          <img src={image1} alt="Bored Ape 3d" />
        </div>
      )}
      {image === 'second' && (
        <div className='rounded-lg overflow-hidden'>
          <img src={image2} alt="Bored Ape 3d" />
        </div>
        
      )}
      {image === 'third' && (
        <div className='rounded-lg overflow-hidden'>
          <img src={image3} alt="Bored Ape 3d"/>
        </div>
        
      )}

      <section className='flex items-center justify-center gap-4 my-12'>
        <div className={`rounded-full ${image === 'first' ? 'bg-black' : 'bg-white'} w-12 h-12 cursor-pointer`} onClick={handleClick => setImage('first')}></div>


        <div className={`rounded-full ${image === 'second' ? 'bg-black' : 'bg-white'} w-12 h-12 cursor-pointer `} onClick={handleClick => setImage('second')}></div>


        <div className={`rounded-full ${image === 'third' ? 'bg-black' : 'bg-white'} w-12 h-12 cursor-pointer`} onClick={handleClick => setImage('third')}></div>
      </section>
    </div>
  )
}
