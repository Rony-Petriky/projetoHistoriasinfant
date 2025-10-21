import { Container } from "@/componetes/container";
import Image from "next/image";
import { MainCorpo } from "@/app/home/componets/mainCorpo";

import Livro from "@/assets/images/livro.png"
import MundoContos from "@/assets/images/mundoContos.png"

export default function Home() {
  return (
    <div>
        <Container>       
             <div className=" flex justify-center items-center py-5 mt-5 bg-[#61C6D3]">
                <div className="flex flex-row items-center px-5 justify-between w-full max-w-7xl">
                <Image
                className="w-32 h-32  md:w-96 md:h-96"
                src={MundoContos}
                alt="imagem do home do site"
                />
                
                <Image
                className="w-32 h-32  md:w-96 md:h-96"
                    src={Livro}

                    alt="imagem do home do site"
                />
                </div>
             </div>
             <MainCorpo/>


        </Container>
        
  </div>
  );
}
