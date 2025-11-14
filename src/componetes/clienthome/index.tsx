"use client";

import { Container } from "@/componetes/container";
import Image from "next/image";
import UserForm from "@/componetes/formulario";
import FormEntrar from "@/componetes/formEntrar";
import capa from "@/assets/images/capa.png";
import { useState, useEffect, useRef } from "react";

export default function ClientHome() {
  const [form, setForm] = useState(false);
  const [fentrar, setFentrar] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const entrarRef = useRef<HTMLDivElement>(null);

  const handleform = (modo: string) => {
    if (modo === "Entrar") setFentrar(!fentrar);
    else if (modo === "Cadastrar") setForm(!form);
    else if (modo === "trocar") {
      setFentrar(!fentrar);
      setForm(!form);
    } else {
      if (form) setForm(false);
      if (fentrar) setFentrar(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (!formRef.current?.contains(target) && !entrarRef.current?.contains(target)) {
        setForm(false);
        setFentrar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-green-300 w-full max-w-full h-full 2xl:h-screen">
      <Container>
        <div className="px-2 flex flex-col md:flex-row">
          <div className="md:w-1/2 pt-10 md:pt-30">
            <h2 className="text-[20px] font-serif">CONTOS DO SABER</h2>
            <h1 className="text-5xl text-white font-bold pt-15">
              Leia historias de forma divertida
            </h1>
            <h3 className="font-light text-[18px] pt-8 pb-8">
              Histórias divertidas com efeitos sonoros que transportam você para dentro da aventura.
            </h3>

            <div className="z-50 flex">
              <button
                onClick={() => handleform("Entrar")}
                className="text-white font-bold mr-2 bg-black p-2 hover:bg-gray-600 rounded"
              >
                Entrar
              </button>

              <button
                onClick={() => handleform("Cadastrar")}
                className="text-black font-bold bg-white p-2 hover:bg-amber-100 rounded"
              >
                Cadastrar gratis
              </button>
            </div>

            {form && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div ref={formRef} className="relative">
                  <button onClick={() => handleform("x")} className="absolute top-2 right-3">
                    X
                  </button>
                  <UserForm />
                  <div className="flex flex-row justify-center">
                    <p className="text-sm text-center pr-1">Possui uma conta?</p>
                    <p className="text-white text-sm font-bold text-center">
                      <button onClick={() => handleform("trocar")}>Entrar</button>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {fentrar && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div ref={entrarRef} className="relative">
                  <button onClick={() => handleform("x")} className="absolute top-2 right-3">
                    X
                  </button>
                  <FormEntrar />
                  <div className="flex flex-row justify-center">
                    <p className="text-sm text-center pr-1">Não possui uma conta?</p>
                    <p className="text-white text-sm font-bold text-center">
                      <button onClick={() => handleform("trocar")}>Cadastrar</button>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="z-49 relative pt-40 md:pt-10 flex justify-center items-center">
            <div
              className="w-0 h-0
                         md:pt-90
                         pt-70
                         md:border-l-[400px]
                         border-l-[200px] border-l-transparent
                         md:border-r-[300px]
                         border-r-[150px] border-r-transparent
                         md:border-b-[200px]
                         border-b-[100px] border-b-blue-500"
            />

            <div className="absolute pt-0 z-49 bottom-5 animate-bounce">
              <Image src={capa} width={400} height={400} alt="..." priority />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
