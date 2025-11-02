import { Container } from "@/componetes/container";
import Image from "next/image";
import { MainCorpo } from "@/app/home/componets/mainCorpo";

import Livro from "@/assets/images/livro.png"
import MundoContos from "@/assets/images/mundoContos.png"
import  {Carrossel}  from "@/componetes/carrossel";

import image1 from "@/assets/images/carrossel/carousel-1.svg"
import image2 from "@/assets/images/carrossel/carousel-2.svg"
import image3 from "@/assets/images/carrossel/carousel-3.svg"
import image4 from "@/assets/images/carrossel/carousel-4.svg"
import image5 from "@/assets/images/carrossel/carousel-5.svg"

const histoias = [
  { id: '1', titulo: 'Filme 1', urlImage: image1, descricao:"uma historia cheia de AVENTURAS uma historia cheia de AVENTURAS" },
  { id: '2', titulo: 'Filme 2', urlImage: image2, descricao:"uma historia cheia de aventuraas uma historia cheia de AVENTURAS" },
  { id: '3', titulo: 'Filme 3', urlImage: image3, descricao:"uma historia cheia de aventuraas uma historia cheia de AVENTURAS" },
  { id: '4', titulo: 'Filme 4', urlImage: image4, descricao:"uma historia cheia de aventuraas uma historia cheia de AVENTURAS" },
  { id: '5', titulo: 'Filme 5', urlImage: image5, descricao:"uma historia cheia de aventuraas uma historia cheia de AVENTURAS" },
  
];

const SLIDES = Array.from(Array(5).keys())
export default function Home() {
  return (
    <div>
        <Container>       
             {/* <div className=" flex justify-center items-center py-5 mt-5 bg-[#61C6D3]">
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
             </div> */}
              <Carrossel historias={[...histoias]}/>
             <MainCorpo/>


        </Container>
        
  </div>
  );
}
