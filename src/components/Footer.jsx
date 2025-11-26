import { Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
             <div className="flex items-center gap-2">
            <div className="w-20 rounded-lg flex items-center justify-center">
             <img src='../../public/logotipo.png' className='w-[60px] rounded'/>
            </div>
            <div className="hidden sm:flex flex-col">
              <h1 className="text-white font-bold text-md leading-tight">G&C</h1>
              <p className="text-pink-600 text-md font-semibold">Lembracinhas</p>
            </div>
          </div>
            <p className="text-gray-400 p-2 text-sm">
              Transformando momentos em memórias inesquecíveis desde 2018.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-pink-400 transition">Decoração de Eventos</a></li>
              <li><a href="#services" className="hover:text-pink-400 transition">Balões Personalizados</a></li>
              <li><a href="#services" className="hover:text-pink-400 transition">Lembrancinhas</a></li>
              <li><a href="#services" className="hover:text-pink-400 transition">Consultoria</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Redes Sociais</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-pink-400 transition">Instagram</a></li>
              <li><a href="#" className="hover:text-pink-400 transition">Facebook</a></li>
              <li><a href="#" className="hover:text-pink-400 transition">WhatsApp</a></li>
              <li><a href="#" className="hover:text-pink-400 transition">TikTok</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {currentYear} Sua Festa, Nossa Paixão. Todos os direitos reservados.</p>
            <div className="flex items-center gap-1">
              <span>Feito com</span>
              <Heart size={16} className="text-pink-600 fill-pink-600" />
              <span>em Luanda, Angola</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
