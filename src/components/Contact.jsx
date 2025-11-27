import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulário enviado:', formData)
    setFormData({ name: '', email: '', phone: '', message: '' })
    alert('Obrigado! Entraremos em contato em breve.')
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold mb-4">
            CONTATO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Vamos Criar Sua Festa Perfeita
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
         
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-black mb-1">Telefone</h3>
                <p className="text-gray-600">+244 923 456 789</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-black mb-1">Email</h3>
                <p className="text-gray-600">contato@cc</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-black mb-1">Localização</h3>
                <p className="text-gray-600">Luanda, Angola</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-black mb-1">Horário</h3>
                <p className="text-gray-600">Segunda a Domingo<br />8:30 - 18:00</p>
              </div>
            </div>
          </div>

      </div>
    </section>
  )
}
