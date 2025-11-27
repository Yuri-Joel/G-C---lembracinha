import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <div className='w-full fixed z-10 h-full pt-[80vh] flex flex-col gap-2 items-end justify-end px-4 pb-10 md:p-20'>
        <img alt='ww' src={"/whatsap.png"} className='w-[50px] shadow-xl rounded-full'/>
      </div>
      <Hero />
      <Services />
      <Portfolio />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}
