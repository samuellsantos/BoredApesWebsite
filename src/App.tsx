import React from 'react'
import { Main } from './components/main/Main'
import { MainApes } from './components/main/mainApes/MainApes'
import { NewApesSection } from './components/newApes/NewApesSection'
import { About } from './components/AboutSection/About'
import { PurchaseSection } from './components/PurchaseSection/PurchaseSection'
import { OurCollection } from './components/OurCollection/OurCollection'

export function App() {

  return (
   <>
   <Main />
   <MainApes />
   <NewApesSection />
   <About />
   <PurchaseSection />
   <OurCollection />
   </>
  )
}

