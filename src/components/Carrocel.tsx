
import { useEffect, useRef, useState } from "react"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import type { CarouselApi } from "@/types/carrocel";
import { Sparkles, TrendingUp, Users, Zap } from "lucide-react"

const slides = [
  {
    image: "/decora--o-casamento-elegante-luxuoso.jpg",
  },
  {
    image: "/decora--o-bal-es-anivers-rio-infantil-colorida.jpg",
  },
  {
    image: "/decora--o-entrada-evento.jpg",
  },
  {
    image: "/decora--o-festa-quinze-anos-elegante-magenta.jpg",
  },
]


export const CarrocelComponent = ()=> {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const pluginRef = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }))

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", onSelect)

    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <main className="z-2 absolute w-screen bg-black h-screen overflow-hidden">
      <Carousel
        setApi={setApi}
        className="relative w-screen h-screen overflow-hidden"
        opts={{
          loop: true,
          align: "start",
        }}
        plugins={[pluginRef.current]}
      >
        <CarouselContent className="w-screen h-screen ">
          {slides.map((slide,index) => {
            return (
              <CarouselItem key={index} 
              style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundRepeat: "no-repeat",      
                  backgroundSize: "cover",          
                  backgroundPosition: "center",    
                }}
               className="relative bg-black w-full h-full flex items-center md:justify-center bg-cover bg-center">
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </Carousel>
    </main>
  )
}
