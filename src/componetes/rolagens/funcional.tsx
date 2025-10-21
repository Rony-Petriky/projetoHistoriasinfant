"use client"
import Rectangle from "@/assets/images/Rectangle.png"
import Image from "next/image";
import React, { useRef } from 'react';
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";


export function Rolagem(){
    const scrollRef = useRef<HTMLDivElement>(null)
    const SCROLL_AMOUNT = 300;


    const handleScroll = (direction:string) => {
        console.log(scrollRef.current)
        if (scrollRef.current) {
          const currentScroll = scrollRef.current.scrollLeft;
          
          if (direction === 'left') {
            // Rola para a esquerda: diminui o valor de scrollLeft
            const ret = scrollRef.current.scrollTo({
              left: currentScroll - SCROLL_AMOUNT,
              behavior: 'smooth' // Adiciona rolagem suave
            });
          } else {
            // Rola para a direita: aumenta o valor de scrollLeft
            const ret = scrollRef.current.scrollTo({
              left: currentScroll + SCROLL_AMOUNT,
              behavior: 'smooth'
            });
          }
        }
        
      };

    
    return(
    <div className="bg-white rounded-2xl mt-5">
        <h1 className=" p-5 font-bold text-3xl">
            Historias Novas!
        </h1>
        <div className="relative">
            <button
                    onClick={() => handleScroll('left')}
                    className="absolute left-0 top-1/2  p-2 transform -translate-y-1/2
                     bg-white shadow-lg rounded-full z-10 
                     hover:bg-gray-200 transition-colors"
                    >
                    <MdOutlineKeyboardArrowLeft
                    size={50}/>
            </button>
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
            <button
                onClick={() => handleScroll('right')}
                className="absolute right-0 top-1/2  p-2 transform -translate-y-1/2
                    bg-white shadow-lg rounded-full z-10 
                    hover:bg-gray-200 transition-colors"
                >
                <MdOutlineKeyboardArrowRight size={50} />
            </button>

        </div>

    </div>
    );
};