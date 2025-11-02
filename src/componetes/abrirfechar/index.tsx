"use client"
import { ReactNode, useState, useRef, useEffect } from "react";
import type { MouseEvent as ReactMouseEvent } from 'react';
import { ImMusic } from "react-icons/im";

export function AbrirFechar({children}:{children:ReactNode}){
    const [isOpen, setIsOpen] = useState(false)
    const divRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // A tipagem do evento do `mousedown` é `MouseEvent`.
        const handleClickOutside = (event: MouseEvent) => {
        if (divRef.current && !divRef.current.contains(event.target as Node)) {
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
                            scale-0
                           
                            md:bottom-15 
                            md:right-15
                            bottom-12 
                            right-12
                            // TRANSITION
                            transform // Define que a propriedade 'transform' terá transição
                            origin-bottom-right
                            duration-500       // Duração da animação (500ms)
                            ease-out        // Tipo de aceleração (começa lento, acelera, termina lento)
                            absolute
                            // POSIÇÃO DE ANIMAÇÃO (Slide da Direita para Esquerda)
                            // Se 'isOpen' for true, usa 'translate-x-0' (posição normal).
                            // Se 'isOpen' for false, usa 'translate-x-full' (totalmente fora da tela). 
                           ${isOpen ? 'scale-100 ' : 'scale-0 '}    // Estado inicial (invisível)
                        
    `;
    return(
        <div ref={divRef} className="bg-black">
            <div className=" fixed p-6 bottom-0 right-0" >
                <div className="p-10 bottom-0 right-0">
                    <button className={`rounded-full bottom-2 right-7 md:bottom-10 md:right-10 fixed z-50 p-4 animate-bounce shadow-2xl bg-amber-500 ${!isOpen ? 'animate-bounce ' : 'animate-none '}`} onClick={toggleDropdown}>
                           <ImMusic color="#ffff" size={28}/>
                    </button>
                </div>
              
                    <div className={drawerClasses}>
                        {children}
                    </div>
            

                
             
            </div>

        </div>
    );
};