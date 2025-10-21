"use client"
import { useState, useEffect } from 'react';


type WindowDimensions = {
    width: number | undefined;
    height: number | undefined;
  };
  
  export default function useWindowDimensions(): WindowDimensions {
    // Inicialização segura para o SSR:
    const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
      width: undefined,
      height: undefined
    });
    
    const [isMounted, setIsMounted] = useState(false); // <--- Novo Estado
  
    useEffect(() => {
      // 1. Define o estado como montado (isMounted = true)
      setIsMounted(true);
      
      // 2. A função que realmente pega o tamanho da tela
      const handleResize = () => {
        setWindowDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
  
      // 3. Executa a primeira atualização APÓS a montagem
      handleResize();
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
      
    }, []); 
  
    // Se você precisa do isMounted para saber quando o hook está pronto:
    //return { ...windowDimensions, isMounted }; // Se você mudar o tipo de retorno
  
    // Se o erro PERSISTE, é por causa da primeira renderização.
    // Você DEVE lidar com o `undefined` no componente que usa o hook.
    return windowDimensions;
  }