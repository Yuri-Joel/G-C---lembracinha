import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsappButton'

export default function App() {
  

  return (
    <div className="relative min-h-screen bg-white">
      
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Gallery />
      <Contact />
      <Footer />
     <WhatsAppButton />
    </div>
  )
}
