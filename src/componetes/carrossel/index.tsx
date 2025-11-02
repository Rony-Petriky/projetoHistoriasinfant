'use client'
import Imag from "next/image";
import Image, { StaticImageData } from "next/image";


import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'

interface historia {
    id:string,
    urlImage: StaticImageData,
    titulo: string,
    descricao: string
}
// Props do componente, permitindo passar opções do Embla
type Props = { // Neste exemplo, apenas números, mas poderiam ser objetos de imagem
  options?: EmblaOptionsType,
  historias: historia[]
}

export const Carrossel: React.FC<Props> = ({ historias, options }) => {
  // 1. Inicializa o Embla Carousel com o plugin Autoplay
  // O Autoplay para por padrão ao interagir (hover, clique)
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      ...options, 
      loop: true // Ativa o loop para o carrossel
    }, 
    [
      Autoplay({
        delay: 6000, // Tempo de espera em milissegundos
        stopOnInteraction: false, // Continua mesmo após interação manual
        stopOnMouseEnter: true, // Pausa ao passar o mouse
      })
    ]
  )

  // 2. Estados para controlar os botões de navegação
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  // 3. Funções de callback para rolar
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  // 4. Efeito para atualizar o estado dos botões
  // O 'select' é o evento disparado quando um slide é selecionado
  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      // Se 'loop' estiver desativado, isso controla os botões
      setPrevBtnDisabled(!emblaApi.canScrollPrev())
      setNextBtnDisabled(!emblaApi.canScrollNext())
    }

    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect) // Atualiza no 'reInit' também

    // Define o estado inicial dos botões
    onSelect()

    // Limpa os listeners ao desmontar o componente
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi])

  return (
    <div className="relative w-full rounded-full shadow-xl/20 mx-auto pt-3">
      {/* O 'viewport' do Embla que esconde o overflow */}
      <div className="overflow-hidden" ref={emblaRef}>
        
        {/* O 'container' do Embla que usa flexbox */}
        <div className="flex h-[300px] rounded-full md:h-[400px] ">
          
          {/* Slides individuais */}
          {historias.map((historia) => (
            // 'flex-none' previne o slide de encolher
            // 'w-full' faz cada slide ocupar 100% do viewport
            // 'min-w-0' é importante para o flexbox funcionar corretamente
            <div 
              className="flex-none rounded-full w-full min-w-0 aspect-video" 
              key={historia.id}
            >
              <div className=" relative  flex bg-white  items-center justify-center w-full h-full rounded-3xl">
                <Imag
                className="rounded-4xl w-full"
                src={historia.urlImage}
                alt={historia.descricao}/>
                
                <div className="brightness-50  absolute w-[400px] bg-black blur-2xl bottom-0 left-0 p-5">
                    <h1 className="font-bold text-white pt-1  text-3xl">{historia.titulo}</h1>
                    <p className="text-white">{historia.descricao}</p>
                </div>
                <div className="absolute w-[400px] bottom-0 left-0 p-5">
                    <h1 className="font-bold text-white pt-1  text-3xl">{historia.titulo}</h1>
                    <p className="text-white">{historia.descricao}</p>
                </div>
               
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botão Anterior */}
      <button
        onClick={scrollPrev}
        disabled={prevBtnDisabled}
        className="absolute top-1/2 left-2 -translate-y-1/2 z-10 p-2 bg-white/70 rounded-full shadow-md hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        aria-label="Slide anterior"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Botão Próximo */}
      <button
        onClick={scrollNext}
        disabled={nextBtnDisabled}
        className="absolute top-1/2 right-2 -translate-y-1/2 z-10 p-2 bg-white/70 rounded-full shadow-md hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        aria-label="Próximo slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  )
}

