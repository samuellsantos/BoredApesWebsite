import React, { ReactNode } from 'react'
import styles from './WhiteButton.module.css'

export const WhiteButton = ({children}:{children: ReactNode}) => {
  return (
    <button className={`font-overpass py-4 px-12 border-2 border-black font-bold uppercase bg-white z-10 ${styles.button}`}>{children}</button>
  )
}
