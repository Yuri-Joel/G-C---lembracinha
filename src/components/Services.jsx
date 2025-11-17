import { Zap, Package, Award } from 'lucide-react'

const ServiceCard = ({ icon: Icon, title, description, features }) => (
  <div className="group p-6 rounded-xl border border-gray-200 hover:border-pink-400 transition hover:shadow-xl hover:scale-105 transform duration-300">
    <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-pink-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
      <Icon size={24} className="text-white" />
    </div>
    <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
    <p className="text-gray-600 text-sm mb-4">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
          <span className="text-pink-600 font-bold">✓</span>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
)

export default function Services() {
  const services = [
    {
      icon: Zap,
      title: "Decoração de Eventos",
      description: "Criamos ambientes mágicos para qualquer ocasião",
      features: ["Casamentos", "Aniversários", "Formaturas", "Corporativo"]
    },
    {
      icon: Package,
      title: "Balões Personalizados",
      description: "Designs únicos que refletem sua personalidade",
      features: ["Balões temáticos", "Estruturas 3D", "Arranjos especiais", "Confecção rápida"]
    },
    {
      icon: Award,
      title: "Lembrancinhas Personalizadas",
      description: "Presentes memoráveis que fazem a diferença",
      features: ["Design exclusivo", "Vários materiais", "Entrega rápida", "Qualidade premium"]
    }
  ]

  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold mb-4">
            NOSSOS SERVIÇOS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Tudo para Sua Festa Ser Perfeita
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Oferecemos soluções completas em decoração, balões e lembrancinhas personalizadas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
