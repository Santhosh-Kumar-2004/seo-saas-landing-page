import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <hr style={{ border: '1px solid rgba(255, 255, 255, 0.3)' }} />
    <Features />
    <hr style={{ border: '1px solid rgba(255, 255, 255, 0.3)' }} />
      {/* <h1>Welcome to the SEO Page</h1>
      <p>This is a simple landing page optimized for search engines.</p> */}
    </>
  )
}

export default App
