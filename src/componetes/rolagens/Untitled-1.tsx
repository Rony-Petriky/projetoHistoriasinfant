// app/components/MovieCarousel.tsx
'use client'; // Necessário pois usaremos 'useRef' e 'useState' (hooks de cliente)

import { useRef, useState, useEffect } from 'react';

// Definição da interface para cada item do carrossel
interface Movie {
  id: string;
  title: string;
  imageUrl: string;
  description: string
}

// Definição das props do componente
interface MovieCarouselProps {
  title: string;
  movies: Movie[];
}

export function MovieCarousel({ title, movies }: MovieCarouselProps) {
  // Ref para o container que faz o scroll
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Estado para controlar a visibilidade dos botões
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  // Função para verificar a posição do scroll e atualizar os estados
  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      
      // Verifica se está no início (com uma pequena tolerância)
      setIsAtStart(scrollLeft < 10);
      
      // Verifica se está no fim (com uma pequena tolerância)
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 10);
    }
  };

  // Efeito para adicionar o listener de scroll e verificar a posição inicial
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
  }, [movies]); // Re-executa se a lista de filmes mudar

  // Função para rolar para a esquerda ou direita
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      // Calcula a quantidade de scroll (80% da largura visível)
      const scrollAmount = clientWidth * 0.8; 

      if (direction === 'left') {
        scrollRef.current.scrollLeft -= scrollAmount;
      } else {
        scrollRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-4 px-4 md:px-10">{title}</h2>
      
      {/* Container principal com 'group' para o hover dos botões */}
      <div className="relative group">
        
        {/* Botão Esquerdo */}
        {/* Aparece no hover do 'group' e se não estiver no início */}
        {!isAtStart && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2
                       bg-black/50 text-white rounded-full
                       opacity-0 group-hover:opacity-100 transition-all
                       hover:bg-black/80 focus:outline-none ml-2"
          >
            <ChevronLeft size={32} />
          </button>
        )}

        {/* O Container de Scroll */}
        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto scroll-smooth
                     pb-4 px-4 md:px-10
                     // Classes para esconder a barra de scroll
                     [&::-webkit-scrollbar]:hidden 
                     [-ms-overflow-style:'none'] 
                     [scrollbar-width:'none']"
        >
          {movies.map((movie) => (
            // Card do Filme
            <div
              key={movie.id}
              className="flex-shrink-0 w-60 md:w-72
                         transform transition-transform duration-300 
                         hover:scale-105"
            >
              <div className="aspect-[2/3] bg-neutral-800 rounded-md overflow-hidden">
                <img
                  src={movie.imageUrl}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Você pode adicionar o título do filme aqui se quiser */}
              {/* <h3 className="mt-2 text-sm text-white truncate">{movie.title}</h3> */}
            </div>
          ))}
        </div>

        {/* Botão Direito */}
        {/* Aparece no hover do 'group' e se não estiver no fim */}
        {!isAtEnd && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2
                       bg-black/50 text-white rounded-full
                       opacity-0 group-hover:opacity-100 transition-all
                       hover:bg-black/80 focus:outline-none mr-2"
          >
            <ChevronRight size={32} />
          </button>
        )}
      </div>
    </div>
  );
}