import { ChevronDown } from 'lucide-react'
import {CarrocelComponent} from './Carrocel'

const FloatingBalloon = ({ delay, duration }) => (
  <div
    className="absolute  w-8 h-10 rounded-full opacity-20 pointer-events-none"
    style={{
      animation: `float-slow ${duration}s ease-in-out infinite`,
      animationDelay: `${delay}s`,
      background: `linear-gradient(135deg, #ec4899, #db2777)`
    }}
  />
)

export default function Hero() {
  return (
    <section className="relative  text-white min-h-screen pt-20 pb-10 flex items-center justify-center overflow-hidden bg-[url('/decora--o-casamento-elegante-luxuoso.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 overflow-hidden">
        <FloatingBalloon delay={0} duration={6} style={{ left: '10%', top: '20%' }} />
        <FloatingBalloon delay={1} duration={7} style={{ left: '80%', top: '30%' }} />
        <FloatingBalloon delay={2} duration={8} style={{ left: '20%', bottom: '20%' }} />
        <FloatingBalloon delay={1.5} duration={6.5} style={{ right: '15%', top: '40%' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4  text-center">
        <div className="animate-slide-in-left">
          <span className="inline-block px-4 py-2 bg-white text-pink-700 rounded-full text-sm font-semibold mb-6">
            Sua Festa Merece o Melhor 
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
          Sua Festa,<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-400">
            Nossa Paixão
          </span>
        </h1>

        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
          Transformamos seus momentos especiais em memórias inesquecíveis com decorações criativas, balões personalizados e lembrancinhas que encantam.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
          <button className="px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-white transition transform hover:scale-105">
            Solicitar Orçamento
          </button>
          <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition">
            Conhecer Serviços
          </button>
        </div>

        <div className="flex justify-center gap-8 text-center mb-12 animate-pulse-subtle">
          <div>
            <p className="text-3xl font-bold text-pink-400">500+</p>
            <p className=" text-sm">Festas Decoradas</p>
          </div>
          <div className="h-12 w-px bg-gray-300" />
          <div>
            <p className="text-3xl font-bold text-pink-400">100%</p>
            <p className="text-sm">Satisfação</p>
          </div>
          <div className="h-12 w-px bg-gray-300" />
          <div>
            <p className="text-3xl font-bold text-pink-400">8h+</p>
            <p className=" text-sm">Disponibilidade</p>
          </div>
        </div>

        <div className="animate-bounce mt-12">
          <ChevronDown size={32} className="mx-auto text-white" />
        </div>
      </div>
    
    <CarrocelComponent/>
    <div className="absolute z-1 bg-black opacity-60 w-full h-full" />
    </section>
  )
}
