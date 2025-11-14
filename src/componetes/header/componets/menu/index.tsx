
"use client"
import Link from "next/link";
import { useState, useEffect, useRef} from 'react';
import type { MouseEvent as ReactMouseEvent } from 'react';
import useWindowDimensions from '@/componetes/tamanhotela'; // Ajuste o caminho

import { signIn, signOut, useSession } from "next-auth/react";
import { MenuMobileouPc } from "./componetes";
import { Load } from "@/componetes/loading";


export function Menu(){
  const { status, data } = useSession();
  async function handleLogin(mode:string) {
    await signIn(mode);
  }

    return (<>
    {status === "authenticated" &&(
      <MenuMobileouPc/>
    )}

    {status === "loading" &&(
          <Load/>
        )}

    {status === "unauthenticated" &&(
      <button className="font-medium text-white text-lg flex flex-row items-center" onClick={()=>handleLogin("google")} >Entrar</button>
    )}
    
    </>)
}