import React from 'react'
import logo from '../../assets/logo.png'
import { FaFacebookF, FaInstagram, FaRegCopyright, FaTelegramPlane, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-center bg-[#D8A1FE] p-12'>

      <div className='flex items-center justify-center lg:gap-x-48 w-full px-8 border-b-2 border-zinc-800 pb-8 flex-wrap gap-4'>


      <div>
        <img src={logo} alt="Logo Bored Ape" className='md:order-2'/>
      </div>


      <nav className='flex gap-4 font-robotoCondensed text-xl '>
        <a href="#">Home</a>
        <a href="#">Contact</a>
        <a href="#">About</a>
      </nav>


      <div className='flex items-center gap-2'>
        <div className="p-4 rounded-full bg-black/95 text-white  hover:bg-black/80 cursor-pointer">
          <FaTwitter size={20}/>
        </div>

        <div className="p-4 rounded-full bg-black/95 text-white hover:bg-black/80 cursor-pointer">
          <FaTelegramPlane size={20}/>
        </div>

        <div className="p-4 rounded-full bg-black/95 text-white hover:bg-black/80 cursor-pointer">
          <FaFacebookF size={20}/>
        </div>

        <div className="p-4 rounded-full bg-black/95 text-white hover:bg-black/80 cursor-pointer">
          <FaInstagram size={20}/>
        </div>

        </div>
      </div>
      <p className='flex items-center gap-2 mt-14 font-robotoCondensed'>Copyright <FaRegCopyright /> NEW YEAR APE Ltd. All Right Reserved</p>
    </footer>
  )
}
