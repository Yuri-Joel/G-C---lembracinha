# 🎉 G&C Lembracinhas

> Sua Festa, Nossa Paixão - Transformando momentos em memórias inesquecíveis

Um site moderno e responsivo para serviços de decoração de eventos, balões personalizados e lembrancinhas em Luanda, Angola.

## ✨ Características

- 🎨 **Design Moderno** - Interface elegante com cores vibrantes (rosa e preto)
- 📱 **Responsivo** - Funciona perfeitamente em dispositivos móveis, tablets e desktops
- 🎪 **Carousel Automático** - Galeria de imagens com autoplay
- 💬 **Integração WhatsApp** - Botão flutuante para contato direto
- 🎯 **Seções Otimizadas** - Navegação suave entre serviços, portfólio, galeria e contato
- ⚡ **Performance** - Construído com Vite para máxima velocidade

## 🏗️ Estrutura do Projeto

```
.
├── src/
│   ├── components/
│   │   ├── ui/              # Componentes de UI reutilizáveis
│   │   ├── Navbar.jsx       # Barra de navegação
│   │   ├── Hero.jsx         # Seção hero com carousel
│   │   ├── Services.jsx     # Serviços oferecidos
│   │   ├── Portfolio.jsx    # Portfólio de trabalhos
│   │   ├── Gallery.jsx      # Galeria de fotos
│   │   ├── Contact.jsx      # Seção de contato
│   │   ├── Footer.jsx       # Rodapé
│   │   ├── Carrocel.tsx     # Carousel principal
│   │   └── WhatsappButton.jsx
│   ├── lib/
│   │   └── utils.ts         # Utilitários (cn - class merger)
│   ├── App.jsx              # Componente principal
│   ├── main.jsx             # Entry point
│   └── index.css            # Estilos globais
├── styles/
│   └── globals.css          # Configuração Tailwind
├── types/
│   └── carrocel.d.ts        # Type definitions
├── public/                  # Imagens e assets
├── index.html               # HTML principal
├── vite.config.js           # Configuração Vite
├── tailwind.config.js       # Configuração Tailwind CSS
├── postcss.config.cjs       # Configuração PostCSS
└── package.json             # Dependências do projeto
```

## 🚀 Como Começar

### Pré-requisitos
- Node.js 16+ instalado
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone <seu-repositorio>
cd G-C---lembracinha

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

Para visualizar a build:

```bash
npm run preview
```

## 📦 Dependências Principais

- **React 18** - Biblioteca UI
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS
- **Embla Carousel** - Carousel com autoplay
- **Lucide React** - Ícones
- **Class Variance Authority** - Componentes com variantes

## 🎨 Seções do Site

### Navbar
Navegação fixa com logo, menu responsivo e informações de contato

### Hero
Banner principal com carousel automático de imagens, call-to-action e estatísticas

### Serviços
Três cards destacando:
- 🎪 Decoração de Eventos
- 🎈 Balões Personalizados
- 🎁 Lembrancinhas Personalizadas

### Portfólio
Carousel com trabalhos realizados em diferentes categorias

### Galeria
Grid responsivo com lightbox para visualização de detalhes

### Contato
Informações de telefone, email, localização e horário

### Footer
Links para redes sociais e informações da empresa

## 📱 Responsividade

O site utiliza Tailwind CSS com breakpoints:
- `md:` para tablets (768px)
- `sm:` para dispositivos pequenos (640px)

## 🔗 Integração WhatsApp

O botão flutuante de WhatsApp permite contato direto:
- Número: +244 975 631 212
- Mensagem pré-definida para orçamentos

## 🎯 Funcionalidades Especiais

- ✅ Animações suaves (slide-in, float, pulse)
- ✅ Modo dark-ready (estrutura CSS preparada)
- ✅ Acessibilidade semântica
- ✅ Smooth scroll behavior
- ✅ Formulário de contato funcional

## 📧 Contato

- **Telefone**: +244 xxxxxxxxxx
- **Email**: [em desenvolvimento]
- **Instagram**: @gc_lembracinhas
- **Localização**: Luanda, Angola
- **Horário**: Segunda a Sábado, 8:30 - 18:00

## 📄 Licença

Todos os direitos reservados © 2024 G&C Lembracinhas

---

**Desenvolvido por YuriDev & Adalberto Camosso (Adobe).Luanda, Angola**