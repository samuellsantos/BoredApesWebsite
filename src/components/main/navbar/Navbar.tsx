import React from 'react'
import logo from '../../../assets/logo.png'
import { TransparentButton } from '../../buttons/TransparentButton'

export const Navbar = () => {
  return (
    <nav className='flex flex-col justify-center gap-8 items-center p-4 w-full 2xl:w-10/12 md:flex-row md:justify-between'>
      <div className="logo">
        <img src={logo} alt="Logo Bored Apes" />
      </div>
      <div className="navItems">
        <ul className='uppercase flex gap-8 flex-col items-center md:flex-row'>
          <li>
            <a href="#">Whitepaper</a>
          </li>
          <li>
          <a href="#">Legal option letter</a>
          </li>
          <li>
          <a href="#">WhitePaper</a>
          </li>
        </ul>
      </div>
      <div className="button">
        <TransparentButton brColor='black' >Whitepaper</TransparentButton>
      </div>
    </nav>
  )
}
