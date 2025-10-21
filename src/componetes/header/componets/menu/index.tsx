"use client"
import Link from "next/link";
import { useState, useEffect, useRef} from 'react';
import type { MouseEvent as ReactMouseEvent } from 'react';
import useWindowDimensions from '@/componetes/tamanhotela'; // Ajuste o caminho
import { FaHome } from "react-icons/fa";
import { ImBook } from "react-icons/im";
import { GiMustache } from "react-icons/gi";
import { BsFillTelephoneFill } from "react-icons/bs";

import { FiMenu } from "react-icons/fi";
export function Menu(){
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const { width, height } = useWindowDimensions();

    const breakpoint = 768;
    const isTabletOrLarger: boolean = width! >= breakpoint;

    useEffect(() => {
      // A tipagem do evento do `mousedown` é `MouseEvent`.
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []); 
    
    const toggleDropdown = (event: ReactMouseEvent<HTMLButtonElement>) => {
      event.stopPropagation(); // Opcional, para evitar que o clique se propague para o document.
      setIsOpen(!isOpen); };

    const drawerClasses = `
    fixed 
    top-0 
    right-0 
    h-screen       // Altura total da tela (100vh)
    w-1/2          // Largura de 50% (metade da tela)
    bg-gray-800    // Cor de fundo
    text-white     // Cor do texto
    shadow-2xl     // Sombra para dar profundidade
    z-50           // Garante que fique acima de outros elementos
    
    // TRANSITION
    transition-transform // Define que a propriedade 'transform' terá transição
    duration-500       // Duração da animação (500ms)
    ease-in-out        // Tipo de aceleração (começa lento, acelera, termina lento)

    // POSIÇÃO DE ANIMAÇÃO (Slide da Direita para Esquerda)
    // Se 'isOpen' for true, usa 'translate-x-0' (posição normal).
    // Se 'isOpen' for false, usa 'translate-x-full' (totalmente fora da tela). 
    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
    `;
    return (<>
        {!isTabletOrLarger ? (
        <div  ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="px-0 py-0  text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <FiMenu size={32} color="#ffff"/>
        </button>

          <nav className={drawerClasses}>
              <ul className=" flex flex-col w-full mx-auto list-none pt-5 text-left pl-5">
              <li className=" pb-3"><Link className="text-white font-medium text-lg flex flex-row items-center" href="#/"><FaHome/>  <h1 className="pl-3">INICIO </h1></Link></li>
              <li className=" pb-3"><Link className="text-white font-medium text-lg flex flex-row items-center" href="#histoias"> <ImBook/><h1 className="pl-3">HISTORIAS</h1></Link></li>
              <li className=" pb-3"><Link className="text-white  font-medium text-lg flex flex-row items-center" href="#sobre nos"><GiMustache/><h1 className="pl-3">SOBRE NOS</h1></Link></li>
              <li className=" pb-3"><Link className="text-white  font-medium text-lg flex flex-row items-center" href="#contato"><BsFillTelephoneFill/><h1 className="pl-3">CONTATO</h1></Link></li>
              <li className="pb-3" ><button className="font-medium text-white text-lg flex flex-row items-center" onClick={()=>{}} >SAIR</button></li>
              </ul>
          </nav>
        
      </div>
    ):( <nav>
        <ul className="list-none flex space-x-6 m-0 p-0">
            <li><Link className="text-white font-bold hover:text-blue-200 text-lg" href="#/">INICIO</Link></li>
            <li><Link className="text-white font-bold hover:text-blue-200 text-lg" href="#histoias">HISTORIAS</Link></li>
            <li><Link className="text-white font-bold hover:text-blue-200 text-lg" href="#sobre nos">SOBRE NOS</Link></li>
            <li><Link className="text-white font-bold hover:text-blue-200 text-lg" href="#contato">CONTATO</Link></li>
            <li className="text-white font-bold hover:text-blue-200 text-lg" onClick={()=>{}}>SAIR</li>

        </ul>
        </nav>)
}</>)
}