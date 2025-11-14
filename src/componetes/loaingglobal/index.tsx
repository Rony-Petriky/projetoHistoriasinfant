"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Load } from "../loading";

export default function RouteLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500); // tempo mínimo de exibição (ajuste como quiser)

    return () => clearTimeout(timeout);
  }, [pathname]); // executa toda vez que muda de rota

  if (!loading) return null;

  return (
    <Load/>
  );
}