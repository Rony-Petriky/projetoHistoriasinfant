"use client";

import { useRef, useState, useEffect, useCallback, ReactNode} from "react";

export default function DraggableDiv({children}:{children : ReactNode}) {
  const divRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 50, y: 50 }); // posição inicial

  /* 🔹 Carrega posição salva (Opcional - Correto)
  useEffect(() => {
    const saved = localStorage.getItem("draggable-position");
    if (saved) {
      setPosition(JSON.parse(saved));
    }
  }, []);

  // 🔹 Salva posição no localStorage (Opcional - Correto)
  useEffect(() => {
    localStorage.setItem("draggable-position", JSON.stringify(position));
  }, [position]);*/

  // --- MOUSE EVENTS ---
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    const rect = divRef.current?.getBoundingClientRect();
    if (rect) {
      setOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  // 2. Otimizar os handlers dos listeners com 'useCallback'
  //    Isto garante que as funções não sejam recriadas a menos que 'isDragging' ou 'offset' mudem.
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    setPosition({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  }, [isDragging, offset]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []); // Vazio pois não depende de nenhum estado

  // --- TOUCH EVENTS ---
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    const touch = e.touches[0];
    const rect = divRef.current?.getBoundingClientRect();
    if (rect) {
      setOffset({ x: touch.clientX - rect.left, y: touch.clientY - rect.top });
    }
  };

  // 2. Otimizar os handlers dos listeners com 'useCallback'
  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    setPosition({ x: touch.clientX - offset.x, y: touch.clientY - offset.y });
  }, [isDragging, offset]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // --- LISTENERS ---
  // 3. CORREÇÃO DE PERFORMANCE
  //    Adicionar o array de dependências.
  //    Este useEffect agora só corre quando os handlers mudam.
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
    // Adicionar os handlers ao array de dependências
  }, [handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  return (
    <div
      ref={divRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}

      // 4. CORREÇÃO PRINCIPAL (VISUAL)
      //    Aplicar a posição dinâmica via 'style', não 'className'
      style={{
        position: 'fixed', // 'fixed' deve estar no style ou na className
        right: `${position.x}px`,
        bottom: `${position.y}px`,
        touchAction: "none" // Evita que a página dê scroll no telemóvel
      }}

      // Limpar a className
      
    >
      {children}
    </div>
  );
}