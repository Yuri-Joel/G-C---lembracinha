import { useState } from 'react'
import { X } from 'lucide-react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    '/decora--o-entrada-evento.jpg',
    '/bal-es-decora--o-festa-colorida.jpg',
    '/arranjo-bal-es-metalizados.jpg',
    '/lembrancinhas-personalizadas-elegantes.jpg',
    '/mesa-decorada-bal-es-tem-tica.jpg',
    '/detalhes-decorativos-lembrancinhas.jpg',
    '/decora--o-entrada-evento.jpg',
    '/bal-es-decora--o-festa-colorida.jpg',
    '/arranjo-bal-es-metalizados.jpg',
    '/lembrancinhas-personalizadas-elegantes.jpg',
    '/mesa-decorada-bal-es-tem-tica.jpg',
    '/detalhes-decorativos-lembrancinhas.jpg', 
    '/decora--o-entrada-evento.jpg',
    '/bal-es-decora--o-festa-colorida.jpg',
    '/arranjo-bal-es-metalizados.jpg',
    '/lembrancinhas-personalizadas-elegantes.jpg',
    '/mesa-decorada-bal-es-tem-tica.jpg',
    '/detalhes-decorativos-lembrancinhas.jpg'
  ]

  return (
    <section id="gallery" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold mb-4">
            GALERIA
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Confira Nossos Detalhes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image)}
              className="group relative aspect-square overflow-hidden cursor-pointer"
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Galeria ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-4xl">🔍</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white p-2 rounded-full hover:bg-gray-200 transition"
            >
              <X size={24} className="text-black" />
            </button>
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Ampliada"
              className="max-w-2xl w-full h-auto rounded-xl animate-slide-in-right"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  )
}
