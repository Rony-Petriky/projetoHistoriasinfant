"use client";

import Image from 'next/image';
// Importa os tipos necessários do React
import { useState, useRef, useEffect } from 'react';

// 1. Definir a interface de Props
// Isto define o "contrato" do seu componente
interface TimedAudioPlayerProps {
  srcSom: string;
  srcImage: string;
  playForSeconds: number;
}

// 2. Aplicar a interface às props do componente
export default function TimedAudioPlayer({ srcSom,srcImage, playForSeconds }: TimedAudioPlayerProps) {
  
  // 3. Tipar as Refs
  // audioRef vai guardar um elemento de áudio do HTML ou null
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // timeoutRef vai guardar o ID numérico do setTimeout ou null
  // (Em ambientes de browser, o ID do timeout é um 'number')
  const timeoutRef = useRef<number | null>(null);
  
  // useState infere 'boolean' automaticamente (useState<boolean>(false))
  const [isPlaying, setIsPlaying] = useState(false);
  const [corCinza, setCorCinza] = useState("")

  // Função centralizada para parar o áudio e limpar o timeout
  // (Nenhuma alteração de tipo necessária aqui)
  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; 
    }
    
    // O 'if' aqui também serve como "type guard" para o TypeScript
    // Ele só chama clearTimeout se timeoutRef.current for um 'number'
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    
    setIsPlaying(false);
  };

  // Efeito para criar e limpar a instância do áudio
  useEffect(() => {
    if (typeof window !== "undefined") {
      // 'new Audio(src)' cria um HTMLAudioElement, que corresponde à ref
      audioRef.current = new Audio(srcSom);
        
      audioRef.current.onended = () => {
        stopAudio();
      };
    }

    // Função de "limpeza" (Cleanup) do useEffect
    return () => {
      stopAudio(); 
      if (audioRef.current) {
        audioRef.current = null;
      }
    };
  }, [srcSom]); // Recria se o 'src' mudar

  // Função do botão (Play/Pause)
  // (Nenhuma alteração de tipo necessária aqui)
  const handlePlay = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
      }
      
      // O '?' (optional chaining) é uma boa prática
      audioRef.current?.play();
      setIsPlaying(true);

      // Usar window.setTimeout deixa explícito que é um ID de browser ('number')
      timeoutRef.current = window.setTimeout(() => {
        stopAudio();
      }, playForSeconds * 1000); 
    }
  };
  

useEffect(() => {
    if(isPlaying){
        setCorCinza(" grayscale")}else{
            setCorCinza("")
        };

    },[isPlaying])
  return (
    <div className='px-2'>
      <button  onClick={handlePlay} className={`${corCinza}`} >
        <Image 
        src={srcImage}
        width={42}
        height={42}
        alt='...'
        />
      </button>
    </div>
  );
}