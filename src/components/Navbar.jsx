import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-black to-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🎈</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <h1 className="text-black font-bold text-sm leading-tight">Sua Festa</h1>
              <p className="text-pink-600 text-xs font-semibold">Nossa Paixão</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-black hover:text-pink-600 transition">Serviços</a>
            <a href="#portfolio" className="text-black hover:text-pink-600 transition">Portfólio</a>
            <a href="#gallery" className="text-black hover:text-pink-600 transition">Galeria</a>
            <a href="#contact" className="text-black hover:text-pink-600 transition">Contato</a>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <Phone className="w-5 h-5 text-pink-600" />
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">Das 8:30-18:00</span>
              <span className="text-black font-semibold text-sm">+244 923 456 789</span>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            <a href="#services" className="block py-2 text-black hover:text-pink-600">Serviços</a>
            <a href="#portfolio" className="block py-2 text-black hover:text-pink-600">Portfólio</a>
            <a href="#gallery" className="block py-2 text-black hover:text-pink-600">Galeria</a>
            <a href="#contact" className="block py-2 text-black hover:text-pink-600">Contato</a>
          </div>
        )}
      </div>
    </nav>
  )
}
