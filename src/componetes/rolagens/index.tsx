"use client"
import Rectangle from "@/assets/images/Rectangle.png"
import Image from "next/image";
import { useRef, useState, useEffect } from 'react';
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";

interface historia {
    id:string,
    urlImage: string,
    titulo: string
    descricao: string
}
interface historiaProps{
    titulo: string,
    historias: historia[]
}

export function Rolagem({titulo, historias}: historiaProps){
    const scrollRef = useRef<HTMLDivElement>(null)
    const [isAtStart, setIsAtStart] = useState(true)
    const [isAtEnd, setIsAtEnd] = useState(false)

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
          const { clientWidth } = scrollRef.current;
          // Calcula a quantidade de scroll (80% da largura visível)
          const scrollAmount = 300; 
    
          if (direction === 'left') {
            scrollRef.current.scrollLeft -= scrollAmount;
          } else {
            scrollRef.current.scrollLeft += scrollAmount;
          }
        }
      };

    
    return(
    <div className="bg-white rounded-2xl mt-5">
        <h1 className=" p-5 font-bold text-3xl">
            Historias Novas!
        </h1>
        <div className="relative">
            {!isAtStart && (
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-0 top-1/2  p-2 transform -translate-y-1/2
                            bg-white shadow-lg rounded-full z-10 
                            hover:bg-gray-200 transition-colors"
                        >
                        <MdOutlineKeyboardArrowLeft
                        size={50}/>
                    </button>
            )}

            <div ref={scrollRef} className="w-full h-[230px] md:h-[365px] overflow-y-hidden py-5 md:py-10 overflow-x-scroll .scrollbar-hide
                            [&::-webkit-scrollbar]:hidden 
                            [-ms-overflow-style:'none'] 
                            [scrollbar-width:'none']
                                ">

                <ul className=" flex flex-row justify-between flex-nowrap w-max">
                    <li>
                        <Image
                        className="w-[140px] m-2 h-[172px] md:h-[264px] md:w-[212px]
                        transition ease-in-out duration-300 hover:scale-125"
                        src={Rectangle}
                        alt="imagem do home do site"
                        />
                    </li>
                    <li>
                        <Image
                        className="w-[140px] m-2 h-[172px] md:h-[264px] md:w-[212px]
                        transition ease-in-out duration-300 hover:scale-125"
                        src={Rectangle}
                        alt="imagem do home do site"
                        />
                    </li>
                    <li>
                        <Image
                        className="w-[140px] m-2 h-[172px] md:h-[264px] md:w-[212px]
                        transition ease-in-out duration-300 hover:scale-125"
                        src={Rectangle}
                        alt="imagem do home do site"
                        />
                    </li>
                    <li>
                        <Image
                        className="w-[140px] m-2 h-[172px] md:h-[264px] md:w-[212px]
                        transition ease-in-out duration-300 hover:scale-125"
                        src={Rectangle}
                        alt="imagem do home do site"
                        />
                    </li>
                    <li>
                        <Image
                        className="w-[140px] m-2 h-[172px] md:h-[264px] md:w-[212px]
                        transition ease-in-out duration-300 hover:scale-125"
                        src={Rectangle}
                        alt="imagem do home do site"
                        />
                    </li>
                    <li>
                        <Image
                        className="w-[140px] m-2 h-[172px] md:h-[264px] md:w-[212px]
                        transition ease-in-out duration-300 hover:scale-125"
                        src={Rectangle}
                        alt="imagem do home do site"
                        />
                    </li>
                    <li>
                        <Image
                        className="w-[140px] m-2 h-[172px] md:h-[264px] md:w-[212px]
                        transition ease-in-out duration-300 hover:scale-125"
                        src={Rectangle}
                        alt="imagem do home do site"
                        />
                    </li>
                    <li>
                        <Image
                        className="w-[140px] m-2 h-[172px] md:h-[264px] md:w-[212px]
                        transition ease-in-out duration-300 hover:scale-125"
                        src={Rectangle}
                        alt="imagem do home do site"
                        />
                    </li>
                    <li>
                        <Image
                        className="w-[140px] m-2 h-[172px] md:h-[264px] md:w-[212px]
                        transition ease-in-out duration-300 hover:scale-125"
                        src={Rectangle}
                        alt="imagem do home do site"
                        />
                    </li>
                </ul>
            </div>
            {isAtStart && (
                        <button
                            onClick={() => scroll("right")}
                            className="absolute right-0 top-1/2  p-2 transform -translate-y-1/2
                                bg-white shadow-lg rounded-full z-10 
                                hover:bg-gray-200 transition-colors"
                            >
                            <MdOutlineKeyboardArrowRight size={50} />
                        </button>
            )}


        </div>

    </div>
    );
};