"use client"
import Rectangle from "@/assets/images/Rectangle.png"
import Image from "next/image";
import { useRef, useState, useEffect } from 'react';
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import useWindowDimensions from '@/componetes/tamanhotela'; // Ajuste o caminho
import { Divolorida } from "../diccolorida";
import type { StaticImageData } from 'next/image';
import Link from "next/link";
import { set } from "zod";


interface historia {
    id:string,
    srcCapaMiniatura: string,
    titulo: string,
    descricao: string
}
interface historiaProps{
    titulo: string,
    historias: historia[]
}

export function Rolagem({titulo, historias}: historiaProps){
    const [ehistorias, setihistorias] = useState<typeof historias>([])

    useEffect(() => {
    function embaralharLista<T>(array: T[]): T[] {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // índice aleatório
        [array[i], array[j]] = [array[j], array[i]]; // troca os elementos
      }
      return array;
    }
    const historiasEmbaralhadas = embaralharLista(historias) as []
    setihistorias(historiasEmbaralhadas)}, [])


    const { width, height } = useWindowDimensions();

    const breakpoint = 768;
    const isTabletOrLarger: boolean = width! >= breakpoint;
    
    const scrollRef = useRef<HTMLDivElement>(null)
    const [selecCor, setSelectCor] = useState("bg-red-500")
    const [isAtStart, setIsAtStart] = useState(true)
    const [isAtEnd, setIsAtEnd] = useState(false)
    const SCROLL_AMOUNT = 300;


      const checkScrollPosition = () => {
        if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        
        // Verifica se está no início (com uma pequena tolerância)
        setIsAtStart(scrollLeft < 10);

        // Verifica se está no fim (com uma pequena tolerância)
        setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 10);

        }
    };

    useEffect(() => {
        const scrollElement = scrollRef.current;
        if (scrollElement) {
          // Verifica a posição quando o componente é montado
          checkScrollPosition(); 
          
          // Adiciona o listener de evento de scroll
          scrollElement.addEventListener('scroll', checkScrollPosition);
          
          // Limpa o listener quando o componente é desmontado
          return () => {
            scrollElement.removeEventListener('scroll', checkScrollPosition);
          };
        }
      }, [historias]);

      const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
          const currentScroll = scrollRef.current.scrollLeft;
          
          if (direction === 'left') {
            // Rola para a esquerda: diminui o valor de scrollLeft
            scrollRef.current.scrollTo({
              left: currentScroll - SCROLL_AMOUNT,
              behavior: 'smooth' // Adiciona rolagem suave
            });
          } else {
            // Rola para a direita: aumenta o valor de scrollLeft
            scrollRef.current.scrollTo({
              left: currentScroll + SCROLL_AMOUNT,
              behavior: 'smooth'
            });
          }
        }
    }
    const cores = [
      "bg-red-500",
      "bg-red-600",
      "bg-red-700",
      "bg-rose-500",
      "bg-rose-600",
      "bg-rose-700",
      "bg-pink-500",
      "bg-pink-600",
      "bg-pink-700",
      "bg-fuchsia-500",
      "bg-fuchsia-600",
      "bg-fuchsia-700",
      "bg-orange-500",
      "bg-orange-600",
      "bg-orange-700",
      "bg-amber-500",
      "bg-amber-600",
      "bg-amber-700",
      "bg-yellow-500",
      "bg-yellow-600",
      "bg-yellow-700",
      "bg-lime-500",
      "bg-lime-600",
      "bg-lime-700",
      "bg-green-500",
      "bg-green-600",
      "bg-green-700",
      "bg-emerald-500",
      "bg-emerald-600",
      "bg-emerald-700",
      "bg-teal-500",
      "bg-teal-600",
      "bg-teal-700",
      "bg-cyan-500",
      "bg-cyan-600",
      "bg-cyan-700",
      "bg-sky-500",
      "bg-sky-600",
      "bg-sky-700",
      "bg-blue-500",
      "bg-blue-600",
      "bg-blue-700",
      "bg-indigo-500",
      "bg-indigo-600",
      "bg-indigo-700",
      "bg-violet-500",
      "bg-violet-600",
      "bg-violet-700",
      "bg-purple-500",
      "bg-purple-600",
      "bg-purple-700"
    ]

    
    return(
    <div className="bg-white rounded-2xl mt-5 ">
        <h1 className=" p-2 font-bold text-3xl">
            {titulo}
        </h1>
        <div className="relative">
            {isTabletOrLarger &&(
            <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2  p-2 transform -translate-y-1/2
                    opacity-10 hover:opacity-100
                    bg-white shadow-lg rounded-full z-10 "
                >
                <MdOutlineKeyboardArrowLeft
                size={50}/>
            </button>
            )}

            <div ref={scrollRef} className="w-full h-[315px] md:h-[405px] overflow-y-hidden py-5 md:pt-20 md:pb-20 overflow-x-scroll .scrollbar-hide
                            [&::-webkit-scrollbar]:hidden 
                            [-ms-overflow-style:'none'] 
                            [scrollbar-width:'none']
                            ">
                <ul  className=" flex h-full flex-row justify-between items-center flex-nowrap w-max">
                    
                    {ehistorias.map( (historia) => (    
                            <li key={historia.id} >
                                  <Link href={`/story/${historia.id}`} >
                                    <Divolorida>
                                          <Image
                                              className="object-cover w-full h-56 md:h-[264px] 
                                              "
                                              src={historia.srcCapaMiniatura}
                                              alt={historia.descricao}
                                              width={400}
                                              height={400}
                                              
                                          />
                                          <div className="py-1 text-center">
                                          <h1 className="block text-[15px] font-bold text-gray-800 dark:text-white">{historia.titulo}</h1>
                                          <p className=" px-1 text-[10px] text-start text-gray-700 dark:text-gray-200">{historia.descricao}</p>
                                          </div>
                                    </Divolorida>
                                  </Link>
                                                     
                            </li>     
                    ))}
                 </ul>
                
            </div>
                {isTabletOrLarger && (
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-1/2  p-2 transform -translate-y-1/2
                    opacity-10 hover:opacity-100
                    bg-white shadow-lg rounded-full z-10 "
                    >
                    <MdOutlineKeyboardArrowRight size={50} />
                </button>
                )}
        </div>
    </div>
    );
};