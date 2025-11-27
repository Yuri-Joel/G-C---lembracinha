import { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const PortfolioCarousel = () => {
  const [current, setCurrent] = useState(0)
  const autoplayRef = useRef(null)

  const portfolioItems = [
    {
      image: '/decora--o-casamento-elegante-luxuoso.jpg',
      title: 'Casamento Elegante',
      category: 'Eventos Especiais'
    },
    {
      image: '/decora--o-festa-quinze-anos-elegante-magenta.jpg',
      title: 'Festa de 15 Anos',
      category: 'Debutantes'
    },
    {
      image: '/decora--o-bal-es-anivers-rio-infantil-colorida.jpg',
      title: 'Aniversário Infantil',
      category: 'Crianças'
    },
    {
      image: '/decora--o-evento-corporativo-profissional.jpg',
      title: 'Evento Corporativo',
      category: 'Empresas'
    }
  ]

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % portfolioItems.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length)
  }

  return (
    <section id="portfolio" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold mb-4">
            PORTFÓLIO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Nossos Trabalhos
          </h2>
        </div>

        <div className="relative group">
          <div className="relative h-96 md:h-[500px] overflow-hidden rounded-2xl bg-black">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === current ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-pink-300 text-lg">{item.category}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white p-2 rounded-full transition"
          >
            <ChevronLeft className="text-black" size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white p-2 rounded-full transition"
          >
            <ChevronRight className="text-black" size={24} />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {portfolioItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all ${
                  index === current
                    ? 'bg-pink-600 w-8'
                    : 'bg-gray-300 w-2 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioCarousel
