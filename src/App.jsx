import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import WhyHire from './components/WhyHire'
import PricingSection from './components/PricingSection'
import PortfolioSection from './components/PortfolioSection'

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <hr style={{ border: '1px solid rgba(255, 255, 255, 0.3)' }} />
    <Features />
    <hr style={{ border: '1px solid rgba(255, 255, 255, 0.3)' }} />
    <WhyHire />
    <hr style={{ border: '1px solid rgba(255, 255, 255, 0.3)' }} />
    <PricingSection />
    <hr style={{ border: '1px solid rgba(255, 255, 255, 0.3)' }} />
    <PortfolioSection />
    </>
  )
}

export default App
