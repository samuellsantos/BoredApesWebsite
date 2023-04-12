import React, {ReactNode } from 'react'
import styles from './TransparentButton.module.css'

interface Button {
  children: ReactNode;
  brColor: ReactNode;
}

export const TransparentButton = ({children, brColor,}: Button) => {
  return (
    <button className={`font-overpass py-4 px-8 border-2 border-${brColor} uppercase bg-transparent ${styles.button}`} data-texto={children}>{children}</button>
  )
}
